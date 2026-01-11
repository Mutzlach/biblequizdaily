// ============================================
// BIBLEQUIZ GAMIFICATION INTEGRATION
// External script that adds gamification without modifying quiz.html
// ============================================

(function() {
    'use strict';
    
    console.log('🎮 Gamification integration loading...');
    
    // Store references to quiz instances
    let currentQuizInstance = null;
    let quizStartTime = Date.now();
    let correctStreak = 0;
    
    // Wait for page to be ready
    function init() {
        // Intercept quiz instantiation by overriding the global new operator
        interceptQuizCreation();
        
        console.log('✅ Gamification integration ready!');
    }
    
    function interceptQuizCreation() {
        // Store original constructors
        const OriginalNewQuiz = window.NewBibleQuiz;
        const OriginalOldQuiz = window.OldBibleQuiz;
        
        // Wrap NewBibleQuiz
        if (OriginalNewQuiz) {
            window.NewBibleQuiz = function(questions, title) {
                const instance = new OriginalNewQuiz(questions, title);
                currentQuizInstance = instance;
                quizStartTime = Date.now();
                correctStreak = 0;
                enhanceQuizInstance(instance);
                console.log('✅ NewBibleQuiz enhanced');
                return instance;
            };
        }
        
        // Wrap OldBibleQuiz
        if (OriginalOldQuiz) {
            window.OldBibleQuiz = function(questions, title) {
                const instance = new OriginalOldQuiz(questions, title);
                currentQuizInstance = instance;
                quizStartTime = Date.now();
                correctStreak = 0;
                enhanceQuizInstance(instance);
                console.log('✅ OldBibleQuiz enhanced');
                return instance;
            };
        }
        
        // Try again in 100ms if classes don't exist yet
        if (!OriginalNewQuiz && !OriginalOldQuiz) {
            setTimeout(interceptQuizCreation, 100);
        }
    }
    
    function enhanceQuizInstance(quiz) {
        // Store original methods
        const originalLoadQuestion = quiz.loadQuestion;
        const originalSelectAnswer = quiz.selectAnswer;
        const originalShowResults = quiz.showResults;
        
        // Enhance loadQuestion
        quiz.loadQuestion = function() {
            originalLoadQuestion.call(this);
            addInQuizProgress(this);
        };
        
        // Enhance selectAnswer
        quiz.selectAnswer = function(answerIndex) {
            if (this.selectedAnswer !== null) return;
            
            this.selectedAnswer = answerIndex;
            const question = this.questions[this.currentQuestionIndex];
            const options = document.querySelectorAll('.option');
            
            options.forEach(opt => opt.classList.add('disabled'));
            options[answerIndex].classList.add('selected');
            
            const isCorrect = answerIndex === question.correct;
            
            if (isCorrect) {
                options[answerIndex].classList.remove('selected');
                options[answerIndex].classList.add('correct');
                this.score++;
                correctStreak++;
                
                // Show streak message
                if (correctStreak >= 3) {
                    showStreakMessage(this);
                }
            } else {
                options[answerIndex].classList.remove('selected');
                options[answerIndex].classList.add('incorrect');
                options[question.correct].classList.add('correct');
                correctStreak = 0;
            }
            
            this.showFeedback(question, isCorrect);
            document.getElementById('nextBtn').classList.remove('hidden');
            document.getElementById('nextBtn').onclick = () => this.nextQuestion();
        };
        
        // Enhance showResults
        quiz.showResults = function() {
            document.getElementById('questionSection').classList.add('hidden');
            document.getElementById('quizHeader').classList.add('hidden');
            
            showEnhancedResults(this);
        };
    }
    
    function addInQuizProgress(quiz) {
        if (!window.BibleQuizUIInstance) return;
        
        const questionNumber = quiz.currentQuestionIndex + 1;
        const progressHTML = window.BibleQuizUIInstance.createInQuizProgress(
            questionNumber,
            quiz.questions.length,
            quiz.score,
            correctStreak
        );
        
        const questionSection = document.getElementById('questionSection');
        let progressDiv = document.getElementById('in-quiz-progress');
        if (!progressDiv) {
            progressDiv = document.createElement('div');
            progressDiv.id = 'in-quiz-progress';
            questionSection.insertBefore(progressDiv, questionSection.firstChild);
        }
        progressDiv.innerHTML = progressHTML;
    }
    
    function showStreakMessage(quiz) {
        if (!window.BibleQuizUIInstance) return;
        
        const message = window.BibleQuizUIInstance.getEncouragementMessage(
            quiz.currentQuestionIndex + 1,
            quiz.questions.length,
            quiz.score,
            correctStreak
        );
        
        if (message) {
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed; top: 20px; right: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white; padding: 15px 25px; border-radius: 12px;
                font-weight: 700; font-size: 16px; z-index: 9999;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            `;
            popup.textContent = message;
            document.body.appendChild(popup);
            setTimeout(() => popup.remove(), 3000);
        }
    }
    
    function showEnhancedResults(quiz) {
        if (!window.BibleQuizUIInstance || !window.BibleQuizGame) {
            // Fallback to original results if gamification not loaded
            showOriginalResults(quiz);
            return;
        }
        
        const timeInSeconds = Math.floor((Date.now() - quizStartTime) / 1000);
        const urlParams = new URLSearchParams(window.location.search);
        const quizName = urlParams.get('category') || 'bible';
        
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.innerHTML = window.BibleQuizUIInstance.createEnhancedResults(
            quizName,
            quiz.score,
            quiz.questions.length,
            timeInSeconds
        );
        resultsSection.classList.remove('hidden');
        
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'quiz_complete', {
                'quiz_category': quizName,
                'score': Math.round((quiz.score / quiz.questions.length) * 100),
                'correct_answers': quiz.score,
                'total_questions': quiz.questions.length
            });
        }
    }
    
    function showOriginalResults(quiz) {
        const percentage = Math.round((quiz.score / quiz.questions.length) * 100);
        const incorrect = quiz.questions.length - quiz.score;
        
        document.getElementById('scoreText').textContent = percentage + '%';
        document.getElementById('correctCount').textContent = quiz.score;
        document.getElementById('incorrectCount').textContent = incorrect;
        document.getElementById('accuracyPercent').textContent = percentage + '%';
        
        let message = percentage >= 90 ? 'Outstanding! You have excellent Bible knowledge! 🌟' :
                      percentage >= 80 ? 'Great job! You know your Scripture well! 📖' :
                      percentage >= 70 ? 'Good work! Keep studying God\'s Word! ✝️' :
                      percentage >= 60 ? 'Not bad! There\'s room to grow! 📚' :
                      'Keep studying! God\'s Word is a treasure! 💎';
        
        document.getElementById('resultsMessage').textContent = message;
        document.getElementById('resultsSection').classList.remove('hidden');
    }
    
    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
