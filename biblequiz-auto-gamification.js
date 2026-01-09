// ============================================
// BIBLEQUIZ AUTO-GAMIFICATION
// Just include this file and it automatically enhances your quizzes!
// ============================================

(function() {
    'use strict';
    
    console.log('🎮 BibleQuiz Auto-Gamification Loading...');
    
    // Wait for both gamification systems to load
    function waitForSystems() {
        if (typeof window.BibleQuizGame !== 'undefined' && 
            typeof window.BibleQuizUIInstance !== 'undefined') {
            initializeGamification();
        } else {
            setTimeout(waitForSystems, 100);
        }
    }
    
    function initializeGamification() {
        console.log('✅ Gamification Systems Ready!');
        
        // Monkey-patch both quiz classes to add gamification
        enhanceQuizClasses();
        
        // Add homepage dashboard if on index page
        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            addHomepageDashboard();
        }
    }
    
    function enhanceQuizClasses() {
        // Store original classes
        const OriginalNewQuiz = window.NewBibleQuiz;
        const OriginalOldQuiz = window.OldBibleQuiz;
        
        // Enhanced NEW Quiz Class
        if (OriginalNewQuiz) {
            window.NewBibleQuiz = class extends OriginalNewQuiz {
                constructor(questions, title) {
                    super(questions, title);
                    this.startTime = Date.now();
                    this.correctStreak = 0;
                }
                
                loadQuestion() {
                    super.loadQuestion();
                    
                    // Add in-quiz progress
                    const questionNumber = this.currentQuestionIndex + 1;
                    const progressHTML = window.BibleQuizUIInstance.createInQuizProgress(
                        questionNumber,
                        this.questions.length,
                        this.score,
                        this.correctStreak
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
                
                selectAnswer(answerIndex) {
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
                        this.correctStreak++;
                        
                        // Show encouragement
                        if (this.correctStreak >= 3) {
                            this.showStreakMessage();
                        }
                    } else {
                        options[answerIndex].classList.remove('selected');
                        options[answerIndex].classList.add('incorrect');
                        options[question.correct].classList.add('correct');
                        this.correctStreak = 0;
                    }
                    
                    this.showFeedback(question, isCorrect);
                    
                    document.getElementById('nextBtn').classList.remove('hidden');
                    document.getElementById('nextBtn').onclick = () => this.nextQuestion();
                }
                
                showStreakMessage() {
                    const message = window.BibleQuizUIInstance.getEncouragementMessage(
                        this.currentQuestionIndex + 1,
                        this.questions.length,
                        this.score,
                        this.correctStreak
                    );
                    
                    if (message) {
                        const popup = document.createElement('div');
                        popup.style.cssText = `
                            position: fixed;
                            top: 20px;
                            right: 20px;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            padding: 15px 25px;
                            border-radius: 12px;
                            font-weight: 700;
                            font-size: 16px;
                            z-index: 9999;
                            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                        `;
                        popup.textContent = message;
                        document.body.appendChild(popup);
                        
                        setTimeout(() => popup.remove(), 3000);
                    }
                }
                
                showResults() {
                    document.getElementById('questionSection').classList.add('hidden');
                    document.getElementById('quizHeader').classList.add('hidden');
                    
                    const timeInSeconds = Math.floor((Date.now() - this.startTime) / 1000);
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    const quizName = urlParams.get('category') || 
                                    window.location.pathname.split('/').pop().replace('-quiz.html', '').replace('.html', '');
                    
                    const resultsSection = document.getElementById('resultsSection');
                    resultsSection.innerHTML = window.BibleQuizUIInstance.createEnhancedResults(
                        quizName,
                        this.score,
                        this.questions.length,
                        timeInSeconds
                    );
                    resultsSection.classList.remove('hidden');
                    
                    // Google Analytics
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'quiz_complete', {
                            'quiz_category': quizName,
                            'score': Math.round((this.score / this.questions.length) * 100),
                            'correct_answers': this.score,
                            'total_questions': this.questions.length
                        });
                    }
                }
            };
        }
        
        // Enhanced OLD Quiz Class
        if (OriginalOldQuiz) {
            window.OldBibleQuiz = class extends OriginalOldQuiz {
                constructor(questions, title) {
                    super(questions, title);
                    this.startTime = Date.now();
                    this.correctStreak = 0;
                }
                
                loadQuestion() {
                    super.loadQuestion();
                    
                    // Add in-quiz progress
                    const questionNumber = this.currentQuestionIndex + 1;
                    const progressHTML = window.BibleQuizUIInstance.createInQuizProgress(
                        questionNumber,
                        this.questions.length,
                        this.score,
                        this.correctStreak
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
                
                selectAnswer(answerIndex) {
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
                        this.correctStreak++;
                        
                        // Show encouragement
                        if (this.correctStreak >= 3) {
                            this.showStreakMessage();
                        }
                    } else {
                        options[answerIndex].classList.remove('selected');
                        options[answerIndex].classList.add('incorrect');
                        options[question.correct].classList.add('correct');
                        this.correctStreak = 0;
                    }
                    
                    this.showFeedback(question, isCorrect);
                    
                    document.getElementById('nextBtn').classList.remove('hidden');
                    document.getElementById('nextBtn').onclick = () => this.nextQuestion();
                }
                
                showStreakMessage() {
                    const message = window.BibleQuizUIInstance.getEncouragementMessage(
                        this.currentQuestionIndex + 1,
                        this.questions.length,
                        this.score,
                        this.correctStreak
                    );
                    
                    if (message) {
                        const popup = document.createElement('div');
                        popup.style.cssText = `
                            position: fixed;
                            top: 20px;
                            right: 20px;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            padding: 15px 25px;
                            border-radius: 12px;
                            font-weight: 700;
                            font-size: 16px;
                            z-index: 9999;
                            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                        `;
                        popup.textContent = message;
                        document.body.appendChild(popup);
                        
                        setTimeout(() => popup.remove(), 3000);
                    }
                }
                
                showResults() {
                    document.getElementById('questionSection').classList.add('hidden');
                    document.getElementById('quizHeader').classList.add('hidden');
                    
                    const timeInSeconds = Math.floor((Date.now() - this.startTime) / 1000);
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    const quizName = urlParams.get('category') || 
                                    window.location.pathname.split('/').pop().replace('-quiz.html', '').replace('.html', '');
                    
                    const resultsSection = document.getElementById('resultsSection');
                    resultsSection.innerHTML = window.BibleQuizUIInstance.createEnhancedResults(
                        quizName,
                        this.score,
                        this.questions.length,
                        timeInSeconds
                    );
                    resultsSection.classList.remove('hidden');
                    
                    // Google Analytics
                    if (typeof gtag !== 'undefined') {
                        const category = new URLSearchParams(window.location.search).get('category');
                        gtag('event', 'quiz_complete', {
                            'quiz_category': category,
                            'score': Math.round((this.score / this.questions.length) * 100),
                            'correct_answers': this.score,
                            'total_questions': this.questions.length
                        });
                    }
                }
            };
        }
        
        console.log('✅ Quiz classes enhanced with gamification!');
    }
    
    function addHomepageDashboard() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', insertDashboard);
        } else {
            insertDashboard();
        }
    }
    
    function insertDashboard() {
        // Find a good place to insert dashboard (after header, before quiz grid)
        const container = document.querySelector('.container');
        if (!container) return;
        
        // Create dashboard container
        const dashboardDiv = document.createElement('div');
        dashboardDiv.id = 'progress-dashboard-container';
        dashboardDiv.style.marginBottom = '40px';
        
        // Insert after first child (usually the header/hero)
        if (container.children.length > 1) {
            container.insertBefore(dashboardDiv, container.children[1]);
        } else {
            container.appendChild(dashboardDiv);
        }
        
        // Render dashboard
        dashboardDiv.innerHTML = window.BibleQuizUIInstance.createProgressDashboard();
        
        console.log('✅ Homepage dashboard added!');
    }
    
    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForSystems);
    } else {
        waitForSystems();
    }
    
})();

console.log('📦 Auto-Gamification Script Loaded!');
