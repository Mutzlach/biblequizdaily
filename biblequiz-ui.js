// ============================================
// BIBLEQUIZ UI COMPONENTS
// Display badges, stats, and achievements
// ============================================

class BibleQuizUI {
    
    // ==================== BADGE POPUP ====================
    showBadgeUnlock(badge) {
        const popup = document.createElement('div');
        popup.className = 'badge-unlock-popup';
        popup.innerHTML = `
            <div class="badge-unlock-content">
                <div class="badge-unlock-icon">${badge.icon}</div>
                <h2>🎉 Badge Unlocked!</h2>
                <h3>${badge.name}</h3>
                <p>${badge.description}</p>
                <button onclick="this.closest('.badge-unlock-popup').remove()">Awesome!</button>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (popup.parentElement) {
                popup.classList.add('fade-out');
                setTimeout(() => popup.remove(), 300);
            }
        }, 5000);
    }

    // ==================== PROGRESS DASHBOARD ====================
    createProgressDashboard() {
        const stats = window.BibleQuizGame.getPersonalStats();
        const streak = window.BibleQuizGame.getStreak();
        const recommendations = window.BibleQuizGame.getRecommendations();

        const dashboard = `
            <div class="progress-dashboard">
                <div class="dashboard-header">
                    <h2>👋 Welcome Back!</h2>
                    <p class="streak-info">
                        ${streak.current > 0 ? 
                            `🔥 <strong>${streak.current} day streak!</strong> ${this.getStreakMessage(streak.current)}` : 
                            'Start your quiz streak today!'}
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon">📚</div>
                        <div class="stat-number">${stats.quizzesCompleted}</div>
                        <div class="stat-label">Quizzes Taken</div>
                        <div class="stat-progress">
                            <div class="progress-bar-small">
                                <div class="progress-fill-small" style="width: ${stats.completionPercentage}%"></div>
                            </div>
                            <span class="progress-text">${stats.quizzesCompleted}/${stats.quizzesTotal}</span>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">⭐</div>
                        <div class="stat-number">${stats.averageScore}%</div>
                        <div class="stat-label">Average Score</div>
                        <div class="stat-sublabel">${this.getScoreMessage(stats.averageScore)}</div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-number">${stats.badgesUnlocked}</div>
                        <div class="stat-label">Badges Earned</div>
                        <div class="stat-progress">
                            <div class="progress-bar-small">
                                <div class="progress-fill-small" style="width: ${(stats.badgesUnlocked/stats.badgesTotal)*100}%"></div>
                            </div>
                            <span class="progress-text">${stats.badgesUnlocked}/${stats.badgesTotal}</span>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon">🔥</div>
                        <div class="stat-number">${streak.longest}</div>
                        <div class="stat-label">Longest Streak</div>
                        <div class="stat-sublabel">${streak.longest > streak.current ? 'Beat your record!' : 'New record!'}</div>
                    </div>
                </div>

                ${recommendations.length > 0 ? `
                    <div class="recommendations-section">
                        <h3>📌 Recommended for You</h3>
                        <div class="recommendations-grid">
                            ${recommendations.map(rec => this.createRecommendationCard(rec)).join('')}
                        </div>
                    </div>
                ` : ''}

                <div class="dashboard-actions">
                    <button onclick="BibleQuizUIInstance.showAllBadges()" class="btn-secondary">
                        🏆 View All Badges
                    </button>
                </div>
            </div>
        `;

        return dashboard;
    }

    getStreakMessage(streak) {
        if (streak >= 14) return 'Unstoppable! 🔥🔥🔥';
        if (streak >= 7) return 'Amazing dedication! 🔥🔥';
        if (streak >= 3) return 'Keep it going! 🔥';
        return 'Great start!';
    }

    getScoreMessage(score) {
        if (score >= 90) return 'Outstanding! ⭐⭐⭐';
        if (score >= 80) return 'Great work! ⭐⭐';
        if (score >= 70) return 'Good job! ⭐';
        return 'Keep practicing!';
    }

    createRecommendationCard(rec) {
        const quizNames = {
            'genesis': 'Genesis Quiz',
            'moses': 'Moses Quiz',
            'miracles-of-jesus': 'Miracles of Jesus',
            'parables': 'Parables Quiz',
            'anxiety-bible': 'Anxiety Bible Quiz',
            'psalms-proverbs': 'Psalms & Proverbs',
            'old-testament': 'Old Testament',
            'new-testament': 'New Testament'
        };

        const name = quizNames[rec.quiz] || rec.quiz;
        const url = rec.quiz.includes('testament') || rec.quiz === 'prophets' || rec.quiz === 'miracles' ? 
            `quiz.html?category=${rec.quiz}` : 
            `${rec.quiz}-quiz.html`;

        return `
            <a href="${url}" class="recommendation-card">
                <div class="rec-label">${rec.reason}</div>
                <div class="rec-name">${name}</div>
                <div class="rec-arrow">→</div>
            </a>
        `;
    }

    // ==================== ALL BADGES VIEW ====================
    showAllBadges() {
        const unlocked = window.BibleQuizGame.getUnlockedBadges();
        const locked = window.BibleQuizGame.getLockedBadges();

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content badges-modal">
                <div class="modal-header">
                    <h2>🏆 Your Badges</h2>
                    <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
                </div>
                
                <div class="badges-stats">
                    <span>${unlocked.length} of ${unlocked.length + locked.length} badges unlocked</span>
                    <div class="progress-bar-small">
                        <div class="progress-fill-small" style="width: ${(unlocked.length/(unlocked.length+locked.length))*100}%"></div>
                    </div>
                </div>

                ${unlocked.length > 0 ? `
                    <div class="badges-section">
                        <h3>✅ Unlocked (${unlocked.length})</h3>
                        <div class="badges-grid">
                            ${unlocked.map(b => this.createBadgeCard(b, true)).join('')}
                        </div>
                    </div>
                ` : ''}

                ${locked.length > 0 ? `
                    <div class="badges-section locked-section">
                        <h3>🔒 Locked (${locked.length})</h3>
                        <div class="badges-grid">
                            ${locked.map(b => this.createBadgeCard(b, false)).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;

        document.body.appendChild(modal);
    }

    createBadgeCard(badge, unlocked) {
        return `
            <div class="badge-card ${unlocked ? 'unlocked' : 'locked'}">
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-description">${badge.description}</div>
                ${!unlocked ? `<div class="badge-requirement">${badge.requirement}</div>` : ''}
            </div>
        `;
    }

    // ==================== ENHANCED RESULTS SCREEN ====================
    createEnhancedResults(quizName, score, total, timeInSeconds) {
        const percentage = Math.round((score / total) * 100);
        
        // Record completion
        const result = window.BibleQuizGame.recordQuizCompletion(
            quizName, 
            score, 
            total, 
            timeInSeconds
        );

        // Show new badges first
        result.newBadges.forEach(badge => {
            setTimeout(() => this.showBadgeUnlock(badge), 500);
        });

        // Get high score
        const highScore = window.BibleQuizGame.getHighScore(quizName);
        const isNewBest = !highScore || percentage >= highScore.percentage;
        
        // Get personal stats
        const stats = result.stats;

        const resultsHTML = `
            <div class="enhanced-results">
                <div class="results-celebration">
                    ${percentage >= 90 ? '🎉' : percentage >= 70 ? '👏' : '💪'}
                </div>

                <div class="score-display">
                    <div class="score-circle-large">
                        <div class="score-percentage">${percentage}%</div>
                    </div>
                    <h2 class="results-title">${this.getResultsTitle(percentage)}</h2>
                    <p class="results-subtitle">${score} out of ${total} correct</p>
                </div>

                ${isNewBest && highScore && highScore.attempts > 1 ? `
                    <div class="achievement-banner new-best">
                        🏆 New Personal Best! 🏆
                    </div>
                ` : ''}

                ${result.newBadges.length > 0 ? `
                    <div class="achievement-banner badges-earned">
                        ${result.newBadges.length} New Badge${result.newBadges.length > 1 ? 's' : ''} Unlocked! 🎉
                    </div>
                ` : ''}

                <div class="results-stats-grid">
                    <div class="result-stat">
                        <div class="result-stat-label">Your Best</div>
                        <div class="result-stat-value">${highScore ? highScore.percentage : percentage}%</div>
                    </div>
                    <div class="result-stat">
                        <div class="result-stat-label">Attempts</div>
                        <div class="result-stat-value">${highScore ? highScore.attempts : 1}</div>
                    </div>
                    <div class="result-stat">
                        <div class="result-stat-label">Time</div>
                        <div class="result-stat-value">${this.formatTime(timeInSeconds)}</div>
                    </div>
                </div>

                <div class="personal-progress">
                    <h3>📊 Your Overall Progress</h3>
                    <div class="progress-mini-grid">
                        <div class="progress-mini-item">
                            <span class="mini-label">Total Quizzes</span>
                            <span class="mini-value">${stats.quizzesCompleted}</span>
                        </div>
                        <div class="progress-mini-item">
                            <span class="mini-label">Average Score</span>
                            <span class="mini-value">${stats.averageScore}%</span>
                        </div>
                        <div class="progress-mini-item">
                            <span class="mini-label">Badges</span>
                            <span class="mini-value">${stats.badgesUnlocked}/${stats.badgesTotal}</span>
                        </div>
                        <div class="progress-mini-item">
                            <span class="mini-label">Streak</span>
                            <span class="mini-value">${stats.streak} 🔥</span>
                        </div>
                    </div>
                </div>

                ${this.createResultsRecommendations(quizName, percentage)}

                <div class="results-actions">
                    <button onclick="location.reload()" class="btn-primary btn-large">
                        🔄 Retake Quiz
                    </button>
                    <button onclick="window.location.href='index.html'" class="btn-secondary btn-large">
                        📚 All Quizzes
                    </button>
                    <button onclick="BibleQuizUIInstance.showAllBadges()" class="btn-secondary btn-large">
                        🏆 View Badges
                    </button>
                </div>

                <div class="share-section">
                    <p>Share your score:</p>
                    <div class="share-buttons">
                        <button onclick="BibleQuizUIInstance.shareToTwitter('${quizName}', ${percentage})" class="share-btn">
                            🐦 Twitter
                        </button>
                        <button onclick="BibleQuizUIInstance.shareToFacebook()" class="share-btn">
                            📘 Facebook
                        </button>
                        <button onclick="BibleQuizUIInstance.copyScoreLink('${quizName}', ${percentage})" class="share-btn">
                            🔗 Copy Link
                        </button>
                    </div>
                </div>
            </div>
        `;

        return resultsHTML;
    }

    getResultsTitle(percentage) {
        if (percentage === 100) return 'Perfect Score! 💯';
        if (percentage >= 90) return 'Outstanding! 🌟';
        if (percentage >= 80) return 'Great Job! 📖';
        if (percentage >= 70) return 'Good Work! ✝️';
        if (percentage >= 60) return 'Not Bad! 📚';
        return 'Keep Studying! 💎';
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    createResultsRecommendations(currentQuiz, percentage) {
        let recommendations = [];

        if (percentage < 70) {
            recommendations.push({
                text: 'Try an easier quiz to build confidence',
                link: 'easy-bible-quiz.html',
                emoji: '📚'
            });
        } else if (percentage >= 90) {
            recommendations.push({
                text: 'Challenge yourself with a harder quiz',
                link: 'hard-bible-quiz.html',
                emoji: '🎯'
            });
        }

        const related = {
            'genesis': { quiz: 'Moses Quiz', link: 'moses-quiz.html' },
            'moses': { quiz: 'Old Testament', link: 'quiz.html?category=old-testament' },
            'miracles-of-jesus': { quiz: 'Parables Quiz', link: 'parables-quiz.html' },
            'parables': { quiz: 'Jesus Life Quiz', link: 'quiz.html?category=jesus-life' }
        };

        if (related[currentQuiz]) {
            recommendations.push({
                text: `Try ${related[currentQuiz].quiz} next`,
                link: related[currentQuiz].link,
                emoji: '➡️'
            });
        }

        if (recommendations.length === 0) return '';

        return `
            <div class="recommendations-box">
                <h3>What's Next?</h3>
                ${recommendations.map(rec => `
                    <a href="${rec.link}" class="recommendation-link">
                        ${rec.emoji} ${rec.text}
                    </a>
                `).join('')}
            </div>
        `;
    }

    // ==================== SHARE FUNCTIONS ====================
    shareToTwitter(quizName, percentage) {
        const text = `I scored ${percentage}% on the ${quizName} quiz at BibleQuizDaily.com! 📖 Can you beat my score?`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    }

    shareToFacebook() {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    }

    copyScoreLink(quizName, percentage) {
        const text = `I scored ${percentage}% on the ${quizName} quiz! ${window.location.href}`;
        navigator.clipboard.writeText(text).then(() => {
            alert('✅ Link copied to clipboard!');
        });
    }

    // ==================== IN-QUIZ PROGRESS ====================
    createInQuizProgress(currentQ, totalQ, correctSoFar, streak) {
        return `
            <div class="in-quiz-progress">
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" style="width: ${(currentQ/totalQ)*100}%"></div>
                </div>
                <div class="quiz-progress-stats">
                    <span class="progress-question">Question ${currentQ} of ${totalQ}</span>
                    <span class="progress-score">✓ ${correctSoFar} correct</span>
                    ${streak > 2 ? `<span class="progress-streak">🔥 ${streak} in a row!</span>` : ''}
                </div>
            </div>
        `;
    }

    // ==================== ENCOURAGEMENT MESSAGES ====================
    getEncouragementMessage(questionNumber, total, correctSoFar, streak) {
        // Start
        if (questionNumber === 1) return "Let's begin! 📖";
        
        // Milestones
        if (questionNumber === Math.floor(total / 2)) return "Halfway there! You're doing great! 💪";
        if (questionNumber === total - 5) return "Final stretch! Stay focused! 🎯";
        
        // Streaks
        if (streak === 3) return "Three in a row! You're on fire! 🔥";
        if (streak === 5) return "Five straight! Incredible! ⭐";
        if (streak >= 10) return "TEN IN A ROW! Unstoppable! 🚀";
        
        // After wrong answer
        if (streak === 0 && questionNumber > 1) return "No worries - keep going! 💙";
        
        return "";
    }
}

// ==================== GLOBAL INSTANCE ====================
window.BibleQuizUIInstance = new BibleQuizUI();

console.log('✅ BibleQuiz UI System Loaded!');
