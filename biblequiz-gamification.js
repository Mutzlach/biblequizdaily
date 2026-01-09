// ============================================
// BIBLEQUIZ GAMIFICATION SYSTEM
// All features use localStorage - no backend needed
// ============================================

class BibleQuizGamification {
    constructor() {
        this.badges = this.initializeBadges();
        this.stats = this.loadStats();
        this.initializeSystem();
    }

    // ==================== BADGE DEFINITIONS ====================
    initializeBadges() {
        return {
            // COMPLETION BADGES
            'first-steps': {
                name: 'First Steps',
                description: 'Complete your first quiz',
                icon: '👣',
                requirement: 'Complete 1 quiz',
                unlocked: false
            },
            'knowledge-seeker': {
                name: 'Knowledge Seeker',
                description: 'Complete 5 quizzes',
                icon: '📚',
                requirement: 'Complete 5 quizzes',
                unlocked: false
            },
            'bible-scholar': {
                name: 'Bible Scholar',
                description: 'Complete 10 quizzes',
                icon: '🎓',
                requirement: 'Complete 10 quizzes',
                unlocked: false
            },
            'scripture-master': {
                name: 'Scripture Master',
                description: 'Complete 20 quizzes',
                icon: '👑',
                requirement: 'Complete all 20 quizzes',
                unlocked: false
            },

            // SCORE BADGES
            'perfectionist': {
                name: 'Perfectionist',
                description: 'Score 100% on any quiz',
                icon: '💯',
                requirement: 'Get perfect score',
                unlocked: false
            },
            'ace-student': {
                name: 'Ace Student',
                description: 'Score 90%+ on 3 different quizzes',
                icon: '⭐',
                requirement: 'Score 90%+ on 3 quizzes',
                unlocked: false
            },
            'consistent-learner': {
                name: 'Consistent Learner',
                description: 'Score 80%+ on 5 quizzes',
                icon: '📈',
                requirement: 'Score 80%+ on 5 quizzes',
                unlocked: false
            },

            // STREAK BADGES
            'dedicated': {
                name: 'Dedicated',
                description: 'Take quizzes 3 days in a row',
                icon: '🔥',
                requirement: '3-day streak',
                unlocked: false
            },
            'committed': {
                name: 'Committed',
                description: 'Take quizzes 7 days in a row',
                icon: '🔥🔥',
                requirement: '7-day streak',
                unlocked: false
            },
            'unstoppable': {
                name: 'Unstoppable',
                description: 'Take quizzes 14 days in a row',
                icon: '🔥🔥🔥',
                requirement: '14-day streak',
                unlocked: false
            },

            // CATEGORY EXPERT BADGES
            'genesis-expert': {
                name: 'Genesis Expert',
                description: 'Score 90%+ on Genesis Quiz',
                icon: '🌍',
                requirement: 'Master Genesis',
                unlocked: false
            },
            'moses-master': {
                name: 'Moses Master',
                description: 'Score 90%+ on Moses Quiz',
                icon: '📜',
                requirement: 'Master Moses',
                unlocked: false
            },
            'miracle-worker': {
                name: 'Miracle Worker',
                description: 'Score 90%+ on Miracles Quiz',
                icon: '✨',
                requirement: 'Master Miracles',
                unlocked: false
            },
            'parable-sage': {
                name: 'Parable Sage',
                description: 'Score 90%+ on Parables Quiz',
                icon: '💡',
                requirement: 'Master Parables',
                unlocked: false
            },
            'peace-finder': {
                name: 'Peace Finder',
                description: 'Score 90%+ on Anxiety Bible Quiz',
                icon: '🕊️',
                requirement: 'Master Peace Verses',
                unlocked: false
            },

            // IMPROVEMENT BADGES
            'comeback-kid': {
                name: 'Comeback Kid',
                description: 'Improve score by 20%+ on retake',
                icon: '↗️',
                requirement: 'Show improvement',
                unlocked: false
            },
            'persistent': {
                name: 'Persistent',
                description: 'Retake same quiz 3 times',
                icon: '🔄',
                requirement: 'Never give up',
                unlocked: false
            },

            // SPECIAL BADGES
            'early-bird': {
                name: 'Early Bird',
                description: 'Take a quiz before 8 AM',
                icon: '🌅',
                requirement: 'Quiz before 8 AM',
                unlocked: false
            },
            'night-owl': {
                name: 'Night Owl',
                description: 'Take a quiz after 10 PM',
                icon: '🦉',
                requirement: 'Quiz after 10 PM',
                unlocked: false
            },
            'speed-demon': {
                name: 'Speed Demon',
                description: 'Complete quiz in under 5 minutes',
                icon: '⚡',
                requirement: 'Fast completion',
                unlocked: false
            }
        };
    }

    // ==================== STATS MANAGEMENT ====================
    loadStats() {
        const defaultStats = {
            totalQuizzes: 0,
            quizHistory: [],
            scores: {},
            lastVisit: null,
            streak: 0,
            longestStreak: 0,
            badges: {},
            achievements: [],
            startDate: new Date().toISOString()
        };

        const saved = localStorage.getItem('bibleQuizStats');
        return saved ? { ...defaultStats, ...JSON.parse(saved) } : defaultStats;
    }

    saveStats() {
        localStorage.setItem('bibleQuizStats', JSON.stringify(this.stats));
    }

    // ==================== INITIALIZATION ====================
    initializeSystem() {
        this.updateStreak();
        this.loadUnlockedBadges();
    }

    loadUnlockedBadges() {
        if (this.stats.badges) {
            Object.keys(this.stats.badges).forEach(badgeId => {
                if (this.badges[badgeId]) {
                    this.badges[badgeId].unlocked = true;
                }
            });
        }
    }

    // ==================== QUIZ COMPLETION ====================
    recordQuizCompletion(quizName, score, totalQuestions, timeInSeconds) {
        const percentage = Math.round((score / totalQuestions) * 100);
        
        const quizData = {
            quiz: quizName,
            score: score,
            total: totalQuestions,
            percentage: percentage,
            time: timeInSeconds,
            date: new Date().toISOString()
        };

        // Update stats
        this.stats.totalQuizzes++;
        this.stats.quizHistory.push(quizData);
        
        // Update scores
        if (!this.stats.scores[quizName]) {
            this.stats.scores[quizName] = [];
        }
        this.stats.scores[quizName].push(quizData);

        // Check for new badges
        const newBadges = this.checkBadges(quizData);
        
        this.saveStats();
        
        return {
            quizData,
            newBadges,
            stats: this.getPersonalStats()
        };
    }

    // ==================== BADGE CHECKING ====================
    checkBadges(quizData) {
        const newBadges = [];

        // First quiz
        if (this.stats.totalQuizzes === 1 && !this.badges['first-steps'].unlocked) {
            newBadges.push(this.unlockBadge('first-steps'));
        }

        // 5 quizzes
        if (this.stats.totalQuizzes === 5 && !this.badges['knowledge-seeker'].unlocked) {
            newBadges.push(this.unlockBadge('knowledge-seeker'));
        }

        // 10 quizzes
        if (this.stats.totalQuizzes === 10 && !this.badges['bible-scholar'].unlocked) {
            newBadges.push(this.unlockBadge('bible-scholar'));
        }

        // 20 quizzes
        if (this.stats.totalQuizzes >= 20 && !this.badges['scripture-master'].unlocked) {
            newBadges.push(this.unlockBadge('scripture-master'));
        }

        // Perfect score
        if (quizData.percentage === 100 && !this.badges['perfectionist'].unlocked) {
            newBadges.push(this.unlockBadge('perfectionist'));
        }

        // 90%+ scores count
        const highScores = this.stats.quizHistory.filter(q => q.percentage >= 90);
        const uniqueHighScores = [...new Set(highScores.map(q => q.quiz))].length;
        
        if (uniqueHighScores >= 3 && !this.badges['ace-student'].unlocked) {
            newBadges.push(this.unlockBadge('ace-student'));
        }

        // 80%+ scores
        const goodScores = this.stats.quizHistory.filter(q => q.percentage >= 80);
        if (goodScores.length >= 5 && !this.badges['consistent-learner'].unlocked) {
            newBadges.push(this.unlockBadge('consistent-learner'));
        }

        // Category experts
        if (quizData.percentage >= 90) {
            const categoryBadges = {
                'genesis': 'genesis-expert',
                'moses': 'moses-master',
                'miracles-of-jesus': 'miracle-worker',
                'miracles': 'miracle-worker',
                'parables': 'parable-sage',
                'anxiety-bible': 'peace-finder'
            };

            const badgeId = categoryBadges[quizData.quiz];
            if (badgeId && !this.badges[badgeId].unlocked) {
                newBadges.push(this.unlockBadge(badgeId));
            }
        }

        // Speed demon (under 5 minutes)
        if (quizData.time && quizData.time < 300 && !this.badges['speed-demon'].unlocked) {
            newBadges.push(this.unlockBadge('speed-demon'));
        }

        // Time-based badges
        const hour = new Date().getHours();
        if (hour < 8 && !this.badges['early-bird'].unlocked) {
            newBadges.push(this.unlockBadge('early-bird'));
        }
        if (hour >= 22 && !this.badges['night-owl'].unlocked) {
            newBadges.push(this.unlockBadge('night-owl'));
        }

        // Improvement tracking
        const previousScores = this.stats.scores[quizData.quiz];
        if (previousScores && previousScores.length > 1) {
            const previous = previousScores[previousScores.length - 2];
            const improvement = quizData.percentage - previous.percentage;
            
            if (improvement >= 20 && !this.badges['comeback-kid'].unlocked) {
                newBadges.push(this.unlockBadge('comeback-kid'));
            }

            if (previousScores.length >= 3 && !this.badges['persistent'].unlocked) {
                newBadges.push(this.unlockBadge('persistent'));
            }
        }

        // Streak badges
        if (this.stats.streak >= 3 && !this.badges['dedicated'].unlocked) {
            newBadges.push(this.unlockBadge('dedicated'));
        }
        if (this.stats.streak >= 7 && !this.badges['committed'].unlocked) {
            newBadges.push(this.unlockBadge('committed'));
        }
        if (this.stats.streak >= 14 && !this.badges['unstoppable'].unlocked) {
            newBadges.push(this.unlockBadge('unstoppable'));
        }

        return newBadges;
    }

    unlockBadge(badgeId) {
        this.badges[badgeId].unlocked = true;
        this.stats.badges[badgeId] = new Date().toISOString();
        this.stats.achievements.push({
            type: 'badge',
            badgeId: badgeId,
            date: new Date().toISOString()
        });
        return this.badges[badgeId];
    }

    // ==================== STREAK MANAGEMENT ====================
    updateStreak() {
        const today = new Date().toDateString();
        const lastVisit = this.stats.lastVisit;

        if (!lastVisit) {
            // First visit
            this.stats.streak = 1;
            this.stats.lastVisit = today;
            this.saveStats();
            return;
        }

        const lastVisitDate = new Date(lastVisit).toDateString();
        
        if (lastVisitDate === today) {
            // Same day - no change
            return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();

        if (lastVisitDate === yesterdayStr) {
            // Consecutive day - increment streak
            this.stats.streak++;
            if (this.stats.streak > this.stats.longestStreak) {
                this.stats.longestStreak = this.stats.streak;
            }
        } else {
            // Streak broken
            this.stats.streak = 1;
        }

        this.stats.lastVisit = today;
        this.saveStats();
    }

    getStreak() {
        return {
            current: this.stats.streak,
            longest: this.stats.longestStreak,
            isActive: this.stats.streak > 0
        };
    }

    // ==================== PERSONAL STATS ====================
    getPersonalStats() {
        const completed = this.stats.totalQuizzes;
        const totalAvailable = 20;
        
        let totalScore = 0;
        let totalPossible = 0;
        
        this.stats.quizHistory.forEach(q => {
            totalScore += q.score;
            totalPossible += q.total;
        });

        const averagePercentage = totalPossible > 0 ? 
            Math.round((totalScore / totalPossible) * 100) : 0;

        const unlockedBadges = Object.values(this.badges).filter(b => b.unlocked).length;
        const totalBadges = Object.keys(this.badges).length;

        return {
            quizzesCompleted: completed,
            quizzesTotal: totalAvailable,
            completionPercentage: Math.round((completed / totalAvailable) * 100),
            averageScore: averagePercentage,
            streak: this.stats.streak,
            longestStreak: this.stats.longestStreak,
            badgesUnlocked: unlockedBadges,
            badgesTotal: totalBadges,
            totalPoints: totalScore
        };
    }

    // ==================== QUIZ RECOMMENDATIONS ====================
    getRecommendations() {
        const allQuizzes = [
            'genesis', 'moses', 'miracles-of-jesus', 'parables', 'anxiety-bible',
            'psalms-proverbs', 'old-testament', 'new-testament', 'jesus-life',
            'prophets', 'women-of-the-bible', 'miracles', 'easter', 'christmas',
            'kids', 'easy', 'hard'
        ];

        const taken = Object.keys(this.stats.scores);
        const notTaken = allQuizzes.filter(q => !taken.includes(q));

        const recommendations = [];

        // Not taken yet
        if (notTaken.length > 0) {
            recommendations.push({
                quiz: notTaken[0],
                reason: 'New challenge',
                priority: 'high'
            });
        }

        // Low scores - try again
        Object.keys(this.stats.scores).forEach(quiz => {
            const scores = this.stats.scores[quiz];
            const latest = scores[scores.length - 1];
            if (latest.percentage < 70) {
                recommendations.push({
                    quiz: quiz,
                    reason: `Improve your ${latest.percentage}% score`,
                    priority: 'medium'
                });
            }
        });

        // Close to perfect - try for 100%
        Object.keys(this.stats.scores).forEach(quiz => {
            const scores = this.stats.scores[quiz];
            const best = Math.max(...scores.map(s => s.percentage));
            if (best >= 80 && best < 100) {
                recommendations.push({
                    quiz: quiz,
                    reason: `So close! Best: ${best}%`,
                    priority: 'medium'
                });
            }
        });

        return recommendations.slice(0, 3);
    }

    // ==================== HIGH SCORES ====================
    getHighScore(quizName) {
        if (!this.stats.scores[quizName]) return null;
        
        const scores = this.stats.scores[quizName];
        const best = scores.reduce((max, s) => 
            s.percentage > max.percentage ? s : max
        );
        
        return {
            score: best.score,
            total: best.total,
            percentage: best.percentage,
            date: best.date,
            attempts: scores.length
        };
    }

    // ==================== BADGE DISPLAY ====================
    getAllBadges() {
        return Object.keys(this.badges).map(id => ({
            id,
            ...this.badges[id]
        }));
    }

    getUnlockedBadges() {
        return this.getAllBadges().filter(b => b.unlocked);
    }

    getLockedBadges() {
        return this.getAllBadges().filter(b => !b.unlocked);
    }
}

// ==================== GLOBAL INSTANCE ====================
window.BibleQuizGame = new BibleQuizGamification();

console.log('✅ BibleQuiz Gamification System Loaded!');
console.log('📊 Total Quizzes:', window.BibleQuizGame.stats.totalQuizzes);
console.log('🏆 Badges Unlocked:', window.BibleQuizGame.getUnlockedBadges().length);
console.log('🔥 Current Streak:', window.BibleQuizGame.stats.streak);
