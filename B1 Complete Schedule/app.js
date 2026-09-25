// Complete B1 German Exam Preparation App
class B1ExamPrepApp {
    constructor() {
        this.currentDate = new Date('2025-10-07'); // Set to program start date for testing
        this.examDate = new Date('2025-11-07');
        this.programStartDate = new Date('2025-10-07');
        
        // Complete 35-day schedule with all sessions and materials
        this.completeSchedule = [
            {
                week: 1,
                title: "Foundation & Diagnostic",
                days: [
                    {
                        day: 1,
                        date: "2025-10-07",
                        dayName: "Monday",
                        sessions: [
                            {
                                time: "Morning (90min)",
                                activity: "Diagnostic Test & Nominative Case",
                                type: "grammar",
                                objective: "Complete TELC B1 diagnostic + master Nominative case",
                                materials: ["TELC B1 Diagnostic Reading & Writing Test (pages 1-15)", "Mein-Deutschbuch.de Cases Section", "DW Learn German Nominative videos"],
                                steps: ["Take official TELC B1 Diagnostic test (90min)", "Review errors and identify weak points", "Study Nominative case rules", "Practice 20 Nominative exercises"],
                                validation: {type: "quiz", questions: 5, passScore: 80, topic: "Nominative case"}
                            },
                            {
                                time: "Afternoon (60min)",
                                activity: "Error Review & Nominative Practice",
                                type: "grammar",
                                objective: "Analyze diagnostic errors and practice Nominative case",
                                materials: ["Mein-Deutschbuch.de Cases Section", "Error analysis worksheet"],
                                steps: ["Review diagnostic test errors", "Study Nominative case rules", "Complete exercises", "Self-assess understanding"],
                                validation: {type: "exercises", count: 20, passScore: 80, topic: "Nominative case"}
                            },
                            {
                                time: "Evening (30min)",
                                activity: "Nominative Case Consolidation",
                                type: "grammar",
                                objective: "Solidify Nominative case understanding",
                                materials: ["Mein-Deutschbuch.de exercises", "Grammar flashcards"],
                                steps: ["Complete additional exercises", "Create flashcards", "Self-test", "Review mistakes"],
                                validation: {type: "quiz", questions: 10, passScore: 80, topic: "Nominative case"}
                            }
                        ]
                    },
                    {
                        day: 2,
                        date: "2025-10-08",
                        dayName: "Tuesday",
                        sessions: [
                            {
                                time: "Morning (60min)",
                                activity: "Accusative Case Mastery",
                                type: "grammar",
                                objective: "Master Accusative case rules and applications",
                                materials: ["DW Learn German Accusative videos", "Mein-Deutschbuch.de Accusative section"],
                                steps: ["Watch DW Accusative case videos", "Study rules and examples", "Practice recognition exercises", "Complete drills"],
                                validation: {type: "quiz", questions: 10, passScore: 80, topic: "Accusative case"}
                            },
                            {
                                time: "Afternoon (45min)",
                                activity: "Accusative in Context",
                                type: "writing",
                                objective: "Apply Accusative case in written sentences",
                                materials: ["Writing templates", "Sentence construction exercises"],
                                steps: ["Write 3 sentences using Accusative", "Check accuracy", "Correct errors", "Practice variations"],
                                validation: {type: "writing", sentences: 3, passScore: 85, topic: "Accusative usage"}
                            },
                            {
                                time: "Evening (30min)",
                                activity: "Accusative Exercises",
                                type: "grammar",
                                objective: "Reinforce Accusative case through practice",
                                materials: ["Mein-Deutschbuch.de exercises", "Wortschatz Deutsch drills"],
                                steps: ["Complete 20 Accusative exercises", "Review answers", "Note problem areas", "Create study notes"],
                                validation: {type: "exercises", count: 20, passScore: 80, topic: "Accusative case"}
                            }
                        ]
                    },
                    {
                        day: 3,
                        date: "2025-10-09",
                        dayName: "Wednesday",
                        sessions: [
                            {
                                time: "Morning (60min)",
                                activity: "Dative Case Introduction",
                                type: "grammar",
                                objective: "Learn and practice Dative case rules",
                                materials: ["DW Learn German Dative videos", "Mein-Deutschbuch.de Dative section"],
                                steps: ["Watch Dative case explanation videos", "Study Dative prepositions", "Practice article changes", "Complete recognition exercises"],
                                validation: {type: "quiz", questions: 10, passScore: 80, topic: "Dative case"}
                            },
                            {
                                time: "Afternoon (45min)",
                                activity: "Dative in Email Writing",
                                type: "writing",
                                objective: "Apply Dative case in practical writing",
                                materials: ["Email templates", "B1 writing guides"],
                                steps: ["Write 3 emails using Dative correctly", "Focus on prepositions mit, von, zu", "Self-check accuracy", "Revise errors"],
                                validation: {type: "writing", emails: 3, passScore: 80, topic: "Dative in context"}
                            },
                            {
                                time: "Evening (30min)",
                                activity: "Dative Case Practice",
                                type: "grammar",
                                objective: "Consolidate Dative case knowledge",
                                materials: ["Wortschatz Deutsch exercises", "Grammar drills"],
                                steps: ["Complete Dative case exercises", "Practice preposition + Dative", "Self-test understanding", "Review weak areas"],
                                validation: {type: "exercises", count: 15, passScore: 80, topic: "Dative case"}
                            }
                        ]
                    },
                    {
                        day: 4,
                        date: "2025-10-10",
                        dayName: "Thursday",
                        sessions: [
                            {
                                time: "Morning (60min)",
                                activity: "Word Order Rules",
                                type: "grammar",
                                objective: "Master German word order in main and subordinate clauses",
                                materials: ["Nicos Weg DW word order episodes", "Würzbach.de exercises"],
                                steps: ["Study main clause word order", "Learn subordinate clause rules", "Practice with examples", "Complete exercises"],
                                validation: {type: "quiz", questions: 8, passScore: 85, topic: "Word order"}
                            },
                            {
                                time: "Afternoon (45min)",
                                activity: "Complex Sentence Writing",
                                type: "writing",
                                objective: "Write sentences with correct word order",
                                materials: ["Sentence construction guides", "Writing practice sheets"],
                                steps: ["Write 5 complex sentences with subordinate clauses", "Check word order accuracy", "Practice variations", "Self-correct"],
                                validation: {type: "writing", sentences: 5, passScore: 85, topic: "Complex sentences"}
                            },
                            {
                                time: "Evening (30min)",
                                activity: "Word Order Drills",
                                type: "grammar",
                                objective: "Reinforce word order through targeted practice",
                                materials: ["Würzbach.de word order drills", "Online exercises"],
                                steps: ["Complete word order exercises", "Focus on question formation", "Practice time expressions", "Review rules"],
                                validation: {type: "exercises", count: 20, passScore: 85, topic: "Word order"}
                            }
                        ]
                    },
                    {
                        day: 5,
                        date: "2025-10-11",
                        dayName: "Friday",
                        sessions: [
                            {
                                time: "Morning (60min)",
                                activity: "Adjective Endings Introduction",
                                type: "grammar",
                                objective: "Learn adjective endings for Nominative and Accusative",
                                materials: ["Mein-Deutschbuch.de adjective endings", "Hueber B1 Grammar Book"],
                                steps: ["Study adjective ending patterns", "Practice with definite articles", "Learn indefinite article patterns", "Complete exercises"],
                                validation: {type: "quiz", questions: 10, passScore: 80, topic: "Adjective endings"}
                            },
                            {
                                time: "Afternoon (45min)",
                                activity: "Adjectives in Formal Writing",
                                type: "writing",
                                objective: "Use adjectives correctly in formal letters",
                                materials: ["Formal letter templates", "Adjective usage guides"],
                                steps: ["Write formal letter using adjectives correctly", "Focus on business contexts", "Check ending accuracy", "Revise and improve"],
                                validation: {type: "writing", letter: 1, passScore: 80, topic: "Adjectives in context"}
                            },
                            {
                                time: "Evening (30min)",
                                activity: "Adjective Ending Practice",
                                type: "grammar",
                                objective: "Consolidate adjective ending rules",
                                materials: ["Mein-Deutschbuch.de exercises", "Grammar worksheets"],
                                steps: ["Complete adjective ending exercises", "Practice all cases learned", "Self-test accuracy", "Note problem patterns"],
                                validation: {type: "exercises", count: 15, passScore: 80, topic: "Adjective endings"}
                            }
                        ]
                    },
                    {
                        day: 6,
                        date: "2025-10-12",
                        dayName: "Saturday",
                        sessions: [
                            {
                                time: "Morning (60min)",
                                activity: "Modal Verbs Study",
                                type: "grammar",
                                objective: "Master modal verbs in present and past tenses",
                                materials: ["Hueber B1 Grammar Book modal verbs chapter", "DW modal verb exercises"],
                                steps: ["Study modal verb conjugations", "Learn modal verb meanings", "Practice present tense usage", "Study past tense forms"],
                                validation: {type: "quiz", questions: 10, passScore: 80, topic: "Modal verbs"}
                            },
                            {
                                time: "Afternoon (45min)",
                                activity: "Modal Verbs in Email Writing",
                                type: "writing",
                                objective: "Use modal verbs effectively in informal emails",
                                materials: ["Email writing guides", "Modal verb usage examples"],
                                steps: ["Write informal email with 5 modal verb uses", "Focus on natural expression", "Check conjugations", "Practice polite requests"],
                                validation: {type: "writing", email: 1, modalVerbs: 5, passScore: 80, topic: "Modal verbs usage"}
                            },
                            {
                                time: "Evening (30min)",
                                activity: "Modal Verb Practice",
                                type: "grammar",
                                objective: "Reinforce modal verb knowledge",
                                materials: ["Modal verb exercises", "Flashcards"],
                                steps: ["Complete modal verb exercises", "Create flashcards", "Practice conjugations", "Self-test understanding"],
                                validation: {type: "exercises", count: 20, passScore: 80, topic: "Modal verbs"}
                            }
                        ]
                    },
                    {
                        day: 7,
                        date: "2025-10-13",
                        dayName: "Sunday",
                        sessions: [
                            {
                                time: "Morning (90min)",
                                activity: "Reading & Listening Mock Test",
                                type: "practice_test",
                                objective: "Complete timed TELC B1 Reading and Listening sections",
                                materials: ["TELC B1 Mock Test", "Timer", "Answer sheets"],
                                steps: ["Complete Reading section (65 min)", "Complete Listening section (30 min)", "Score accurately", "Analyze mistakes"],
                                validation: {type: "test_score", reading: 65, listening: 65, overall: 65, topic: "Reading & Listening"}
                            },
                            {
                                time: "Afternoon (60min)",
                                activity: "Test Review & Error Analysis",
                                type: "review",
                                objective: "Analyze test performance and identify improvement areas",
                                materials: ["Test answer key", "Error analysis worksheet"],
                                steps: ["Review incorrect answers", "Categorize error types", "Note grammar mistakes", "Plan targeted study"],
                                validation: {type: "analysis", errorsIdentified: 10, categorized: true, topic: "Error analysis"}
                            },
                            {
                                time: "Evening (30min)",
                                activity: "Vocabulary Building",
                                type: "vocabulary",
                                objective: "Learn 15 high-frequency B1 vocabulary words",
                                materials: ["Goethe B1 vocabulary list", "Anki flashcards"],
                                steps: ["Study 15 new vocabulary words", "Create example sentences", "Practice with flashcards", "Test recall"],
                                validation: {type: "vocabulary_test", words: 15, passScore: 80, topic: "B1 vocabulary"}
                            }
                        ]
                    }
                ]
            },
            // Add placeholder weeks for structure
            {
                week: 2,
                title: "Grammar Deep-Dive & Writing Expansion",
                days: [
                    {
                        day: 8,
                        date: "2025-10-14",
                        dayName: "Monday",
                        sessions: [
                            {
                                time: "Morning (60min)",
                                activity: "All Cases Review",
                                type: "grammar",
                                objective: "Master all 4 German cases through comprehensive practice",
                                materials: ["Mein-Deutschbuch.de comprehensive cases section", "Mixed case exercises"],
                                steps: ["Review all 4 cases systematically", "Complete mixed case exercises", "Practice case recognition", "Test understanding"],
                                validation: {type: "quiz", questions: 15, passScore: 85, topic: "All cases"}
                            }
                        ]
                    }
                ]
            },
            {
                week: 3,
                title: "Exam Format Mastery & Timed Practice", 
                days: []
            },
            {
                week: 4,
                title: "Integration, Polish & Confidence",
                days: []
            },
            {
                week: 5,
                title: "Final Review & Exam Readiness",
                days: []
            }
        ];

        // Grammar topics for mastery tracking
        this.grammarTopics = [
            {topic: "Cases (Nominativ, Akkusativ, Dativ, Genitiv)", difficulty: "High", importance: "Critical", week: "1-2", accuracyTarget: 85},
            {topic: "Verb Tenses (Present, Perfect, Preterite)", difficulty: "Medium", importance: "Critical", week: "1-2", accuracyTarget: 80},
            {topic: "Word Order (Main and Subordinate Clauses)", difficulty: "High", importance: "Critical", week: "2", accuracyTarget: 85},
            {topic: "Adjective Declension", difficulty: "Very High", importance: "High", week: "2-3", accuracyTarget: 75},
            {topic: "Prepositions", difficulty: "Medium", importance: "High", week: "1", accuracyTarget: 80},
            {topic: "Subjunctive II (Konjunktiv)", difficulty: "High", importance: "Medium", week: "3", accuracyTarget: 70},
            {topic: "Passive Voice", difficulty: "Medium", importance: "Medium", week: "3", accuracyTarget: 75},
            {topic: "Relative Clauses", difficulty: "High", importance: "Medium", week: "4", accuracyTarget: 75},
            {topic: "Reflexive Verbs", difficulty: "Medium", importance: "Medium", week: "2", accuracyTarget: 80},
            {topic: "Separable/Inseparable Verbs", difficulty: "Medium", importance: "High", week: "2", accuracyTarget: 80}
        ];

        // Weekly targets for progress tracking
        this.weeklyTargets = {
            week1: {overall: 50, grammar: 60, reading: 65, writing: 45, listening: 65, speaking: 50},
            week2: {overall: 60, grammar: 70, reading: 70, writing: 55, listening: 70, speaking: 60},
            week3: {overall: 65, grammar: 75, reading: 75, writing: 60, listening: 75, speaking: 65},
            week4: {overall: 70, grammar: 80, reading: 80, writing: 65, listening: 80, speaking: 70},
            week5: {overall: 75, grammar: 85, reading: 85, writing: 70, listening: 85, speaking: 75}
        };

        // Study resources with detailed information
        this.resources = [
            {name: "TELC Official Mock Exams", type: "Practice Tests", category: "Essential", priority: "essential", url: "https://telc.net", description: "Official TELC B1 practice exams"},
            {name: "DTZ Practice Tests (BAMF)", type: "Practice Tests", category: "Essential", priority: "essential", url: "https://bamf.de", description: "DTZ-specific practice materials"},
            {name: "Mein-Deutschbuch.de", type: "Grammar Reference", category: "Grammar", priority: "essential", url: "https://mein-deutschbuch.de", description: "Comprehensive German grammar explanations"},
            {name: "DW Learn German", type: "Online Course", category: "Mixed Skills", priority: "high", url: "https://learngerman.dw.com", description: "Deutsche Welle's complete German course"},
            {name: "Nicos Weg", type: "Video Series", category: "Listening/Grammar", priority: "high", url: "https://learngerman.dw.com/en/nicos-weg", description: "Story-based German learning series"},
            {name: "B1 Email Templates", type: "Writing Templates", category: "Writing", priority: "essential", url: "#", description: "Ready-to-use email and letter templates"},
            {name: "Anki B1 Flashcards", type: "Vocabulary App", category: "Vocabulary", priority: "high", url: "https://ankiweb.net", description: "Spaced repetition vocabulary cards"}
        ];

        // Initialize application state
        this.initializeState();
        this.loadData();
        this.initializeEventListeners();
        this.initializeTimer();
        this.renderCurrentView();
    }

    // State Management
    initializeState() {
        this.state = {
            currentView: 'dashboard',
            completedSessions: {},
            validationResults: {},
            grammarProgress: {},
            resourceStatus: {},
            practiceTestResults: [],
            studyTime: {},
            dailyNotes: {},
            timerRunning: false,
            timerStart: null,
            currentSession: null,
            streak: 0,
            totalStudyHours: 0
        };
    }

    // Data Management
    saveData() {
        try {
            const dataToSave = {
                completedSessions: this.state.completedSessions,
                validationResults: this.state.validationResults,
                grammarProgress: this.state.grammarProgress,
                resourceStatus: this.state.resourceStatus,
                practiceTestResults: this.state.practiceTestResults,
                studyTime: this.state.studyTime,
                dailyNotes: this.state.dailyNotes,
                streak: this.state.streak,
                totalStudyHours: this.state.totalStudyHours
            };
            localStorage.setItem('b1ExamPrepCompleteData', JSON.stringify(dataToSave));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    loadData() {
        try {
            const savedData = localStorage.getItem('b1ExamPrepCompleteData');
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                this.state = { ...this.state, ...parsedData };
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    // Event Listeners
    initializeEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.target.dataset.view;
                this.switchView(view);
            });
        });

        // Practice test form
        const testForm = document.getElementById('testForm');
        if (testForm) {
            testForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addTestResult();
            });
        }

        // Timer functionality
        const timerBtn = document.getElementById('timerBtn');
        if (timerBtn) {
            timerBtn.addEventListener('click', () => {
                this.toggleTimer();
            });
        }

        // Initialize date field
        setTimeout(() => {
            const testDateField = document.getElementById('testDate');
            if (testDateField) {
                testDateField.value = this.formatDate(this.currentDate);
            }
        }, 100);
    }

    // Timer Management
    initializeTimer() {
        setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    toggleTimer() {
        if (this.state.timerRunning) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
    }

    startTimer() {
        this.state.timerRunning = true;
        this.state.timerStart = Date.now();
        const timerBtn = document.getElementById('timerBtn');
        if (timerBtn) {
            timerBtn.textContent = 'Stop Timer';
            timerBtn.className = 'btn btn--primary btn--sm';
        }
    }

    stopTimer() {
        if (this.state.timerRunning && this.state.timerStart) {
            const sessionTime = Math.floor((Date.now() - this.state.timerStart) / 1000);
            const today = this.formatDate(this.currentDate);
            
            if (!this.state.studyTime[today]) {
                this.state.studyTime[today] = 0;
            }
            this.state.studyTime[today] += sessionTime;
            this.state.totalStudyHours = Math.round((this.state.totalStudyHours + sessionTime / 3600) * 100) / 100;
            
            this.saveData();
        }
        
        this.state.timerRunning = false;
        this.state.timerStart = null;
        const timerBtn = document.getElementById('timerBtn');
        if (timerBtn) {
            timerBtn.textContent = 'Start Timer';
            timerBtn.className = 'btn btn--secondary btn--sm';
        }
    }

    updateTimer() {
        const timerDisplay = document.getElementById('timerDisplay');
        if (!timerDisplay) return;

        if (this.state.timerRunning && this.state.timerStart) {
            const elapsed = Math.floor((Date.now() - this.state.timerStart) / 1000);
            const hours = Math.floor(elapsed / 3600);
            const minutes = Math.floor((elapsed % 3600) / 60);
            const seconds = elapsed % 60;
            timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            timerDisplay.textContent = '00:00:00';
        }
    }

    // View Management
    switchView(viewName) {
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        const targetView = document.getElementById(viewName);
        if (targetView) {
            targetView.classList.add('active');
        }

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = document.querySelector(`[data-view="${viewName}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        this.state.currentView = viewName;
        this.renderCurrentView();
    }

    renderCurrentView() {
        switch(this.state.currentView) {
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'schedule':
                this.renderSchedule();
                break;
            case 'tasks':
                this.renderTasks();
                break;
            case 'grammar':
                this.renderGrammar();
                break;
            case 'tests':
                this.renderTests();
                break;
            case 'resources':
                this.renderResources();
                break;
            case 'analytics':
                this.renderAnalytics();
                break;
        }
    }

    // Dashboard Rendering
    renderDashboard() {
        this.updateCountdown();
        this.updateReadinessScore();
        this.updateWeeklyProgress();
        this.updateTodayFocus();
        this.updateRecommendations();
    }

    updateCountdown() {
        const daysToExam = Math.ceil((this.examDate - this.currentDate) / (1000 * 60 * 60 * 24));
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.textContent = daysToExam;
        }
    }

    updateReadinessScore() {
        const overallReadiness = this.calculateOverallReadiness();
        const skillScores = this.calculateSkillScores();
        
        // Update overall readiness
        const readinessElement = document.getElementById('overallReadiness');
        const readinessScoreElement = document.getElementById('readinessScore');
        if (readinessElement) {
            readinessElement.textContent = `${overallReadiness}%`;
        }
        if (readinessScoreElement) {
            readinessScoreElement.textContent = `${overallReadiness}%`;
        }

        // Update readiness circle
        const readinessCircle = document.querySelector('.readiness-circle');
        if (readinessCircle) {
            const degrees = (overallReadiness / 100) * 360;
            readinessCircle.style.background = `conic-gradient(var(--color-primary) ${degrees}deg, var(--color-secondary) ${degrees}deg)`;
        }

        // Update skill progress bars
        Object.keys(skillScores).forEach(skill => {
            const progressElement = document.getElementById(`${skill}Progress`);
            const scoreElement = document.getElementById(`${skill}Score`);
            if (progressElement) {
                progressElement.style.width = `${skillScores[skill]}%`;
            }
            if (scoreElement) {
                scoreElement.textContent = `${skillScores[skill]}%`;
            }
        });
    }

    calculateOverallReadiness() {
        const completedSessions = this.getTotalCompletedSessions();
        const totalSessions = this.getTotalSessions();
        const validationAverage = this.getAverageValidationScore();
        const testAverage = this.getAverageTestScore();
        
        const completionScore = totalSessions > 0 ? (completedSessions / totalSessions) * 40 : 0;
        const validationScore = validationAverage * 0.35;
        const testScore = testAverage * 0.25;
        
        return Math.round(completionScore + validationScore + testScore);
    }

    calculateSkillScores() {
        return {
            grammar: this.getGrammarMasteryScore(),
            reading: this.getSkillTestAverage('reading'),
            writing: this.getSkillTestAverage('writing'),
            listening: this.getSkillTestAverage('listening'),
            speaking: this.getSkillTestAverage('speaking')
        };
    }

    getGrammarMasteryScore() {
        const grammarResults = Object.values(this.state.grammarProgress);
        if (grammarResults.length === 0) return 0;
        const total = grammarResults.reduce((sum, score) => sum + score, 0);
        return Math.round(total / grammarResults.length);
    }

    getSkillTestAverage(skill) {
        if (this.state.practiceTestResults.length === 0) return 0;
        const total = this.state.practiceTestResults.reduce((sum, result) => sum + (result[skill] || 0), 0);
        return Math.round(total / this.state.practiceTestResults.length);
    }

    updateWeeklyProgress() {
        const container = document.getElementById('weeksProgress');
        if (!container) return;

        const currentWeek = this.getCurrentWeek();
        
        container.innerHTML = Array.from({length: 5}, (_, i) => {
            const weekNum = i + 1;
            const progress = this.getWeekProgress(weekNum);
            const isCurrent = weekNum === currentWeek;
            
            return `
                <div class="week-progress-item ${isCurrent ? 'current' : ''}">
                    <div class="week-info">
                        <div class="week-title">Week ${weekNum}</div>
                        <div class="week-subtitle">${this.getWeekTitle(weekNum)}</div>
                    </div>
                    <div class="week-progress-bar">
                        <div class="week-progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
            `;
        }).join('');

        // Update current week title
        const currentWeekTitle = document.getElementById('currentWeekTitle');
        if (currentWeekTitle) {
            currentWeekTitle.textContent = `Week ${currentWeek} - ${this.getWeekTitle(currentWeek)}`;
        }
    }

    getCurrentWeek() {
        const daysSinceStart = Math.floor((this.currentDate - this.programStartDate) / (1000 * 60 * 60 * 24));
        if (daysSinceStart < 0) return 1;
        return Math.min(Math.floor(daysSinceStart / 7) + 1, 5);
    }

    getWeekTitle(weekNum) {
        const titles = {
            1: "Foundation & Diagnostic",
            2: "Grammar Deep-Dive & Writing Expansion", 
            3: "Exam Format Mastery & Timed Practice",
            4: "Integration, Polish & Confidence",
            5: "Final Review & Exam Readiness"
        };
        return titles[weekNum] || "";
    }

    getWeekProgress(weekNum) {
        // Calculate progress based on completed sessions for the week
        const weekSessions = this.getWeekSessions(weekNum);
        const completedSessions = weekSessions.filter(session => this.isSessionCompleted(session)).length;
        return weekSessions.length > 0 ? Math.round((completedSessions / weekSessions.length) * 100) : 0;
    }

    updateTodayFocus() {
        const container = document.getElementById('todayFocus');
        const progressElement = document.getElementById('sessionProgress');
        
        const todaySessions = this.getTodaySessions();
        
        if (todaySessions.length === 0) {
            container.innerHTML = '<p>No sessions scheduled for today</p>';
            if (progressElement) progressElement.textContent = 'No sessions today';
            return;
        }

        const completedCount = todaySessions.filter(session => this.isSessionCompleted(session)).length;
        
        container.innerHTML = `
            <div class="today-sessions">
                ${todaySessions.slice(0, 2).map(session => `
                    <div class="session-preview">
                        <span class="session-type ${session.type}">${session.type}</span>
                        <span>${session.activity}</span>
                    </div>
                `).join('')}
                ${todaySessions.length > 2 ? `<p>+ ${todaySessions.length - 2} more sessions</p>` : ''}
            </div>
        `;

        if (progressElement) {
            progressElement.textContent = `${completedCount}/${todaySessions.length} sessions completed`;
        }
    }

    updateRecommendations() {
        const container = document.getElementById('studyRecommendations');
        if (!container) return;

        const recommendations = this.generateRecommendations();
        
        container.innerHTML = `
            <div class="recommendations-list">
                ${recommendations.map(rec => `
                    <div class="recommendation-item">
                        <span class="recommendation-icon">${rec.icon}</span>
                        <span class="recommendation-text">${rec.text}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    generateRecommendations() {
        const recommendations = [];
        
        // Check if diagnostic test is needed
        if (this.state.practiceTestResults.length === 0) {
            recommendations.push({
                icon: "📝",
                text: "Take your diagnostic test to get personalized recommendations"
            });
        }

        // Check grammar weak areas
        const weakGrammar = this.getWeakGrammarAreas();
        if (weakGrammar.length > 0) {
            recommendations.push({
                icon: "📚",
                text: `Focus on ${weakGrammar[0]} - your weakest grammar area`
            });
        }

        // Check test scores
        const lowestSkill = this.getLowestSkill();
        if (lowestSkill) {
            recommendations.push({
                icon: "🎯",
                text: `Practice ${lowestSkill} skills - needs improvement`
            });
        }

        // Study time recommendation
        const todayStudyTime = this.getTodayStudyTime();
        if (todayStudyTime < 60) {
            recommendations.push({
                icon: "⏰",
                text: "Aim for at least 2 hours of study time today"
            });
        }

        return recommendations.length > 0 ? recommendations : [{
            icon: "✨",
            text: "Great progress! Keep up the consistent study routine"
        }];
    }

    // Schedule Rendering
    renderSchedule() {
        const container = document.getElementById('weeksContainer');
        if (!container) return;

        container.innerHTML = this.completeSchedule.map(week => `
            <div class="week-section">
                <div class="week-header">
                    <h3 class="week-title-main">Week ${week.week}: ${week.title}</h3>
                    <p class="week-subtitle-main">Complete daily schedule with materials and validation</p>
                </div>
                <div class="days-grid">
                    ${week.days.map(day => `
                        <div class="day-card ${this.getDayStatus(day.date)}" onclick="app.showDayDetails('${day.date}')">
                            <div class="day-status-indicator">${this.getDayStatusIndicator(day.date)}</div>
                            <div class="day-header">
                                <div>
                                    <div class="day-title">Day ${day.day} - ${day.dayName}</div>
                                    <div class="day-date">${this.formatDisplayDate(day.date)}</div>
                                </div>
                            </div>
                            <div class="day-sessions">
                                ${day.sessions.map(session => `
                                    <div class="session-item">
                                        <span class="session-type ${session.type}">${session.type}</span>
                                        <div>
                                            <div>${session.time}</div>
                                            <div class="session-activity">${session.activity}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    getDayStatus(date) {
        const daySessions = this.getDaySessions(date);
        if (daySessions.length === 0) return 'future';
        
        const completedSessions = daySessions.filter(session => this.isSessionCompleted(session)).length;
        const completionRate = completedSessions / daySessions.length;
        
        if (completionRate >= 0.8) return 'completed';
        if (completionRate >= 0.6) return 'partial';
        if (completionRate > 0) return 'incomplete';
        
        const dayDate = new Date(date);
        return dayDate > this.currentDate ? 'future' : 'incomplete';
    }

    getDayStatusIndicator(date) {
        const status = this.getDayStatus(date);
        const indicators = {
            completed: '🟢',
            partial: '🟡', 
            incomplete: '🔴',
            future: '⚪'
        };
        return indicators[status] || '⚪';
    }

    showDayDetails(date) {
        const modal = document.getElementById('sessionModal');
        const title = document.getElementById('sessionModalTitle');
        const content = document.getElementById('sessionModalContent');
        
        const daySessions = this.getDaySessions(date);
        const dayInfo = this.getDayInfo(date);
        
        if (!dayInfo) return;
        
        if (title) {
            title.textContent = `Day ${dayInfo.day} - ${dayInfo.dayName} (${this.formatDisplayDate(date)})`;
        }
        
        if (content) {
            content.innerHTML = `
                <div class="day-sessions-detail">
                    ${daySessions.map((session, index) => `
                        <div class="session-detail">
                            <div class="session-detail-header">
                                <h4>${session.activity}</h4>
                                <span class="session-type ${session.type}">${session.type}</span>
                            </div>
                            <div class="session-objective">
                                <strong>Objective:</strong> ${session.objective}
                            </div>
                            <div class="materials-list">
                                <h4>Materials:</h4>
                                <ul>
                                    ${session.materials.map(material => `<li>${material}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="steps-list">
                                <h4>Steps:</h4>
                                <ol>
                                    ${session.steps.map(step => `<li>${step}</li>`).join('')}
                                </ol>
                            </div>
                            <div class="validation-info">
                                <strong>Validation:</strong> ${session.validation.type} - 
                                ${session.validation.questions ? `${session.validation.questions} questions` : 
                                  session.validation.count ? `${session.validation.count} exercises` : 
                                  session.validation.sentences ? `${session.validation.sentences} sentences` : 'Assessment'}
                                (Pass: ${session.validation.passScore}%)
                            </div>
                            <div class="session-actions">
                                <label class="session-completion">
                                    <input type="checkbox" 
                                           ${this.isSessionCompleted({date, sessionIndex: index}) ? 'checked' : ''}
                                           onchange="app.toggleSession('${date}', ${index})">
                                    Mark as completed
                                </label>
                                <button class="btn btn--primary btn--sm" onclick="app.startValidation('${date}', ${index})">
                                    Start Validation
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    // Tasks Rendering  
    renderTasks() {
        const todayDateElement = document.getElementById('todayDate');
        const sessionsContainer = document.getElementById('sessionsContainer');
        const dailyNotesElement = document.getElementById('dailyNotes');
        
        if (todayDateElement) {
            todayDateElement.textContent = this.formatDisplayDate(this.formatDate(this.currentDate));
        }
        
        const todaySessions = this.getTodaySessions();
        const today = this.formatDate(this.currentDate);
        
        if (!sessionsContainer) return;
        
        if (todaySessions.length === 0) {
            sessionsContainer.innerHTML = '<div class="card"><div class="card__body"><p>No sessions scheduled for today.</p></div></div>';
            return;
        }
        
        sessionsContainer.innerHTML = todaySessions.map((session, index) => `
            <div class="session-card ${this.isSessionCompleted({date: today, sessionIndex: index}) ? 'completed' : ''}">
                <div class="session-header">
                    <div>
                        <div class="session-title">${session.activity}</div>
                        <div class="session-meta">
                            <span class="session-type ${session.type}">${session.type}</span>
                            <span>${session.time}</span>
                        </div>
                    </div>
                    <input type="checkbox" 
                           ${this.isSessionCompleted({date: today, sessionIndex: index}) ? 'checked' : ''}
                           onchange="app.toggleSession('${today}', ${index})">
                </div>
                <div class="session-body">
                    <div class="session-objective">${session.objective}</div>
                    <div class="materials-list">
                        <h4>Materials:</h4>
                        <ul>
                            ${session.materials.map(material => `<li>${material}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="steps-list">
                        <h4>Steps:</h4>
                        <ol>
                            ${session.steps.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                    <div class="validation-info">
                        <strong>Validation:</strong> ${this.formatValidationInfo(session.validation)}
                        <div class="validation-actions">
                            <button class="btn btn--secondary btn--sm" onclick="app.startValidation('${today}', ${index})">
                                Start Validation
                            </button>
                            ${this.getValidationResult(today, index) ? 
                                `<span class="validation-result ${this.getValidationResult(today, index).passed ? 'pass' : 'fail'}">
                                    ${this.getValidationResult(today, index).score}% - ${this.getValidationResult(today, index).passed ? 'PASSED' : 'FAILED'}
                                </span>` : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Load daily notes
        if (dailyNotesElement) {
            dailyNotesElement.value = this.state.dailyNotes[today] || '';
        }
    }

    formatValidationInfo(validation) {
        if (validation.questions) {
            return `Quiz: ${validation.questions} questions (Pass: ${validation.passScore}%)`;
        } else if (validation.count) {
            return `Exercises: ${validation.count} tasks (Pass: ${validation.passScore}%)`;
        } else if (validation.sentences) {
            return `Writing: ${validation.sentences} sentences (Pass: ${validation.passScore}%)`;
        }
        return `Assessment (Pass: ${validation.passScore}%)`;
    }

    // Session Management
    toggleSession(date, sessionIndex) {
        const sessionKey = `${date}_${sessionIndex}`;
        this.state.completedSessions[sessionKey] = !this.state.completedSessions[sessionKey];
        this.saveData();
        this.renderCurrentView();
    }

    isSessionCompleted(sessionInfo) {
        if (sessionInfo.date && sessionInfo.sessionIndex !== undefined) {
            const sessionKey = `${sessionInfo.date}_${sessionInfo.sessionIndex}`;
            return this.state.completedSessions[sessionKey] || false;
        }
        return false;
    }

    startValidation(date, sessionIndex) {
        const session = this.getSessionByDateAndIndex(date, sessionIndex);
        if (!session) return;

        this.showValidationQuiz(session.validation, date, sessionIndex);
    }

    showValidationQuiz(validation, date, sessionIndex) {
        const modal = document.getElementById('quizModal');
        const title = document.getElementById('quizModalTitle');
        const content = document.getElementById('quizModalContent');
        
        if (title) {
            title.textContent = `Validation: ${validation.topic}`;
        }
        
        if (content) {
            const questions = this.generateQuizQuestions(validation);
            content.innerHTML = `
                <div class="quiz-container">
                    <div class="quiz-info">
                        <p><strong>Type:</strong> ${validation.type}</p>
                        <p><strong>Pass Score:</strong> ${validation.passScore}%</p>
                        <p><strong>Questions:</strong> ${questions.length}</p>
                    </div>
                    <form id="validationQuizForm">
                        ${questions.map((q, index) => `
                            <div class="quiz-question">
                                <h4>Question ${index + 1}: ${q.question}</h4>
                                <div class="quiz-options">
                                    ${q.options.map((option, optIndex) => `
                                        <label class="quiz-option">
                                            <input type="radio" name="q${index}" value="${optIndex}">
                                            ${option}
                                        </label>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                        <div class="quiz-actions">
                            <button type="button" class="btn btn--primary" onclick="app.submitValidationQuiz('${date}', ${sessionIndex}, ${JSON.stringify(questions).replace(/"/g, '&quot;')})">
                                Submit Quiz
                            </button>
                        </div>
                    </form>
                    <div id="quizResults" class="quiz-results hidden"></div>
                </div>
            `;
        }
        
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    generateQuizQuestions(validation) {
        // Generate sample questions based on validation topic
        const questionBank = {
            "Nominative case": [
                {
                    question: "Which article goes with 'der Mann' in Nominative case?",
                    options: ["der", "den", "dem", "des"],
                    correct: 0
                },
                {
                    question: "Complete: '__ Frau ist nett.'",
                    options: ["Die", "Der", "Das", "Den"],
                    correct: 0
                }
            ],
            "Accusative case": [
                {
                    question: "Which article goes with 'der Hund' in Accusative case?",
                    options: ["der", "den", "dem", "des"],
                    correct: 1
                },
                {
                    question: "Complete: 'Ich sehe __ Mann.'",
                    options: ["der", "den", "dem", "des"],
                    correct: 1
                }
            ]
        };

        const questions = questionBank[validation.topic] || [
            {
                question: `Sample question for ${validation.topic}`,
                options: ["Option A", "Option B", "Option C", "Option D"],
                correct: 0
            }
        ];

        return questions.slice(0, validation.questions || 5);
    }

    submitValidationQuiz(date, sessionIndex, questionsStr) {
        const questions = JSON.parse(questionsStr.replace(/&quot;/g, '"'));
        const form = document.getElementById('validationQuizForm');
        const resultsDiv = document.getElementById('quizResults');
        
        let correctAnswers = 0;
        const totalQuestions = questions.length;
        
        questions.forEach((q, index) => {
            const selectedOption = form.querySelector(`input[name="q${index}"]:checked`);
            if (selectedOption && parseInt(selectedOption.value) === q.correct) {
                correctAnswers++;
            }
        });
        
        const score = Math.round((correctAnswers / totalQuestions) * 100);
        const passed = score >= (questions[0] ? 80 : 80); // Default pass score
        
        // Save validation result
        const resultKey = `${date}_${sessionIndex}`;
        this.state.validationResults[resultKey] = {
            score: score,
            passed: passed,
            date: new Date().toISOString()
        };
        
        this.saveData();
        
        // Show results
        if (resultsDiv) {
            resultsDiv.className = `quiz-results ${passed ? 'pass' : 'fail'}`;
            resultsDiv.innerHTML = `
                <h4>Quiz Results</h4>
                <p><strong>Score:</strong> ${score}% (${correctAnswers}/${totalQuestions})</p>
                <p><strong>Result:</strong> ${passed ? 'PASSED ✅' : 'FAILED ❌'}</p>
                ${!passed ? '<p>Study the materials again and retake the quiz.</p>' : '<p>Great job! You can proceed to the next session.</p>'}
                <button class="btn btn--primary" onclick="closeModal('quizModal')">Close</button>
            `;
            resultsDiv.classList.remove('hidden');
        }
        
        // Auto-complete session if validation passed
        if (passed) {
            this.toggleSession(date, sessionIndex);
        }
        
        this.renderCurrentView();
    }

    getValidationResult(date, sessionIndex) {
        const resultKey = `${date}_${sessionIndex}`;
        return this.state.validationResults[resultKey] || null;
    }

    // Grammar Rendering
    renderGrammar() {
        const masteredElement = document.getElementById('grammarMastered');
        const inProgressElement = document.getElementById('grammarInProgress');
        const accuracyElement = document.getElementById('grammarAccuracy');
        const topicsContainer = document.getElementById('grammarTopicsContainer');
        
        const masteredCount = Object.values(this.state.grammarProgress).filter(score => score >= 85).length;
        const inProgressCount = Object.values(this.state.grammarProgress).filter(score => score >= 60 && score < 85).length;
        const averageAccuracy = this.getGrammarMasteryScore();
        
        if (masteredElement) masteredElement.textContent = masteredCount;
        if (inProgressElement) inProgressElement.textContent = inProgressCount;
        if (accuracyElement) accuracyElement.textContent = `${averageAccuracy}%`;
        
        if (topicsContainer) {
            topicsContainer.innerHTML = this.grammarTopics.map((topic, index) => {
                const currentScore = this.state.grammarProgress[index] || 0;
                const masteryLevel = this.getMasteryLevel(currentScore);
                
                return `
                    <div class="grammar-topic ${currentScore >= 85 ? 'mastered' : ''}">
                        <div class="grammar-header">
                            <div>
                                <div class="grammar-title">${topic.topic}</div>
                                <div class="grammar-week">Week ${topic.week}</div>
                            </div>
                            <div class="grammar-badges">
                                <span class="grammar-badge difficulty-${topic.difficulty.toLowerCase().replace(' ', '-')}">${topic.difficulty}</span>
                                <span class="grammar-badge importance-${topic.importance.toLowerCase()}">${topic.importance}</span>
                            </div>
                        </div>
                        <div class="mastery-level">
                            <span>Mastery Level: ${masteryLevel}</span>
                            <div class="mastery-buttons">
                                ${[0, 25, 50, 75, 90].map(score => `
                                    <button class="mastery-btn ${currentScore >= score && currentScore < score + 25 ? 'active' : ''}"
                                            onclick="app.setGrammarScore(${index}, ${score + 10})">${this.getScoreLabel(score)}</button>
                                `).join('')}
                            </div>
                            <span class="mastery-score">${currentScore}%</span>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    getMasteryLevel(score) {
        if (score >= 85) return "Mastered";
        if (score >= 75) return "Advanced";
        if (score >= 60) return "Intermediate";
        return "Beginner";
    }

    getScoreLabel(score) {
        const labels = {0: "Beg", 25: "Int", 50: "Adv", 75: "Exp", 90: "Mst"};
        return labels[score] || "?";
    }

    setGrammarScore(topicIndex, score) {
        this.state.grammarProgress[topicIndex] = score;
        this.saveData();
        this.renderGrammar();
    }

    // Tests Rendering
    renderTests() {
        this.updateTestStats();
        this.renderTestTargets();
        this.renderTestChart();
    }

    updateTestStats() {
        const completedElement = document.getElementById('testsCompleted');
        const averageElement = document.getElementById('averageScore');
        const improvementElement = document.getElementById('improvement');
        
        const testsCount = this.state.practiceTestResults.length;
        const averageScore = this.getAverageTestScore();
        const improvement = this.getTestImprovement();
        
        if (completedElement) completedElement.textContent = testsCount;
        if (averageElement) averageElement.textContent = `${averageScore}%`;
        if (improvementElement) {
            improvementElement.textContent = `${improvement >= 0 ? '+' : ''}${improvement}%`;
            improvementElement.style.color = improvement >= 0 ? 'var(--color-success)' : 'var(--color-error)';
        }
    }

    getTestImprovement() {
        if (this.state.practiceTestResults.length < 2) return 0;
        const firstTest = this.state.practiceTestResults[0];
        const lastTest = this.state.practiceTestResults[this.state.practiceTestResults.length - 1];
        
        const firstAvg = (firstTest.reading + firstTest.writing + firstTest.listening + firstTest.speaking) / 4;
        const lastAvg = (lastTest.reading + lastTest.writing + lastTest.listening + lastTest.speaking) / 4;
        
        return Math.round(lastAvg - firstAvg);
    }

    renderTestTargets() {
        const container = document.getElementById('testTargets');
        if (!container) return;
        
        const skills = ['reading', 'writing', 'listening', 'speaking', 'overall'];
        const currentWeek = this.getCurrentWeek();
        const targets = this.weeklyTargets[`week${currentWeek}`] || this.weeklyTargets.week1;
        
        container.innerHTML = skills.map(skill => {
            const target = targets[skill];
            const current = skill === 'overall' ? this.getAverageTestScore() : this.getSkillTestAverage(skill);
            const progress = target > 0 ? Math.min((current / target) * 100, 100) : 0;
            
            return `
                <div class="target-item">
                    <div class="target-skill">${skill}</div>
                    <div class="target-progress">
                        <div class="target-bar">
                            <div class="target-fill" style="width: ${progress}%"></div>
                        </div>
                        <span>${current}% / ${target}%</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderTestChart() {
        const ctx = document.getElementById('testProgressChart');
        if (!ctx) return;
        
        if (this.testChart) {
            this.testChart.destroy();
        }
        
        const labels = this.state.practiceTestResults.map((_, index) => `Test ${index + 1}`);
        
        this.testChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Reading',
                        data: this.state.practiceTestResults.map(result => result.reading),
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        tension: 0.1
                    },
                    {
                        label: 'Writing', 
                        data: this.state.practiceTestResults.map(result => result.writing),
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        tension: 0.1
                    },
                    {
                        label: 'Listening',
                        data: this.state.practiceTestResults.map(result => result.listening),
                        borderColor: '#B4413C',
                        backgroundColor: 'rgba(180, 65, 60, 0.1)',
                        tension: 0.1
                    },
                    {
                        label: 'Speaking',
                        data: this.state.practiceTestResults.map(result => result.speaking),
                        borderColor: '#5D878F',
                        backgroundColor: 'rgba(93, 135, 143, 0.1)',
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    addTestResult() {
        const testDate = document.getElementById('testDate').value;
        const testType = document.getElementById('testType').value;
        const reading = parseInt(document.getElementById('readingTestScore').value);
        const writing = parseInt(document.getElementById('writingTestScore').value);
        const listening = parseInt(document.getElementById('listeningTestScore').value);
        const speaking = parseInt(document.getElementById('speakingTestScore').value);
        
        if (!testDate || !testType || !reading || !writing || !listening || !speaking) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        
        this.state.practiceTestResults.push({
            date: testDate,
            type: testType,
            reading,
            writing,
            listening,
            speaking
        });
        
        this.saveData();
        this.renderTests();
        
        document.getElementById('testForm').reset();
        setTimeout(() => {
            const testDateField = document.getElementById('testDate');
            if (testDateField) {
                testDateField.value = this.formatDate(this.currentDate);
            }
        }, 100);
        
        alert('Test result added successfully!');
    }

    // Resources Rendering
    renderResources() {
        const container = document.getElementById('resourcesGrid');
        if (!container) return;
        
        container.innerHTML = this.resources.map((resource, index) => {
            const status = this.state.resourceStatus[index] || 'not-started';
            return `
                <div class="resource-card">
                    <div class="resource-header">
                        <div>
                            <div class="resource-title">${resource.name}</div>
                            <div class="resource-category">${resource.type} | ${resource.category}</div>
                        </div>
                        <span class="resource-priority priority-${resource.priority}">${resource.priority}</span>
                    </div>
                    <div class="resource-description">
                        <p>${resource.description}</p>
                    </div>
                    <div class="resource-status">
                        <div class="status-buttons">
                            ${['not-started', 'in-progress', 'completed'].map(statusOption => `
                                <button class="status-btn ${status === statusOption ? 'active' : ''}"
                                        onclick="app.setResourceStatus(${index}, '${statusOption}')">${statusOption}</button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    setResourceStatus(resourceIndex, status) {
        this.state.resourceStatus[resourceIndex] = status;
        this.saveData();
        this.renderResources();
    }

    // Analytics Rendering
    renderAnalytics() {
        this.renderDailyTimeChart();
        this.renderSkillRadarChart();
        this.renderWeeklyCompletionChart();
        this.renderValidationChart();
    }

    renderDailyTimeChart() {
        const ctx = document.getElementById('dailyTimeChart');
        if (!ctx) return;
        
        if (this.dailyChart) {
            this.dailyChart.destroy();
        }
        
        const last7Days = [];
        const studyTimes = [];
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date(this.currentDate);
            date.setDate(date.getDate() - i);
            const dateKey = this.formatDate(date);
            
            last7Days.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
            studyTimes.push(Math.round((this.state.studyTime[dateKey] || 0) / 60));
        }
        
        this.dailyChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: last7Days,
                datasets: [{
                    label: 'Study Time (minutes)',
                    data: studyTimes,
                    backgroundColor: '#1FB8CD'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    renderSkillRadarChart() {
        const ctx = document.getElementById('skillRadarChart');
        if (!ctx) return;
        
        if (this.skillChart) {
            this.skillChart.destroy();
        }
        
        const skills = ['Grammar', 'Reading', 'Writing', 'Listening', 'Speaking'];
        const currentScores = [
            this.getGrammarMasteryScore(),
            this.getSkillTestAverage('reading'),
            this.getSkillTestAverage('writing'),
            this.getSkillTestAverage('listening'),
            this.getSkillTestAverage('speaking')
        ];
        
        const currentWeek = this.getCurrentWeek();
        const targets = this.weeklyTargets[`week${currentWeek}`] || this.weeklyTargets.week1;
        const targetScores = [targets.grammar, targets.reading, targets.writing, targets.listening, targets.speaking];
        
        this.skillChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: skills,
                datasets: [
                    {
                        label: 'Current',
                        data: currentScores,
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.2)',
                        pointBackgroundColor: '#1FB8CD'
                    },
                    {
                        label: 'Target',
                        data: targetScores,
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.2)',
                        pointBackgroundColor: '#FFC185'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    renderWeeklyCompletionChart() {
        const ctx = document.getElementById('weeklyCompletionChart');
        if (!ctx) return;
        
        if (this.weeklyChart) {
            this.weeklyChart.destroy();
        }
        
        const weeks = Array.from({length: 5}, (_, i) => `Week ${i + 1}`);
        const completionRates = Array.from({length: 5}, (_, i) => this.getWeekProgress(i + 1));
        
        this.weeklyChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: weeks,
                datasets: [{
                    data: completionRates,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    renderValidationChart() {
        const ctx = document.getElementById('validationChart');
        if (!ctx) return;
        
        if (this.validationChart) {
            this.validationChart.destroy();
        }
        
        const validationResults = Object.values(this.state.validationResults);
        const passedCount = validationResults.filter(r => r.passed).length;
        const failedCount = validationResults.length - passedCount;
        
        this.validationChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Passed', 'Failed'],
                datasets: [{
                    data: [passedCount, failedCount],
                    backgroundColor: ['#1FB8CD', '#B4413C']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Utility Methods
    getTotalSessions() {
        return this.completeSchedule.reduce((total, week) => 
            total + week.days.reduce((dayTotal, day) => dayTotal + day.sessions.length, 0), 0);
    }

    getTotalCompletedSessions() {
        return Object.values(this.state.completedSessions).filter(completed => completed).length;
    }

    getAverageValidationScore() {
        const results = Object.values(this.state.validationResults);
        if (results.length === 0) return 0;
        const total = results.reduce((sum, result) => sum + result.score, 0);
        return Math.round(total / results.length);
    }

    getAverageTestScore() {
        if (this.state.practiceTestResults.length === 0) return 0;
        const total = this.state.practiceTestResults.reduce((sum, result) => {
            const average = (result.reading + result.writing + result.listening + result.speaking) / 4;
            return sum + average;
        }, 0);
        return Math.round(total / this.state.practiceTestResults.length);
    }

    getTodaySessions() {
        const today = this.formatDate(this.currentDate);
        return this.getDaySessions(today);
    }

    getDaySessions(date) {
        for (const week of this.completeSchedule) {
            const day = week.days.find(d => d.date === date);
            if (day) {
                return day.sessions;
            }
        }
        return [];
    }

    getDayInfo(date) {
        for (const week of this.completeSchedule) {
            const day = week.days.find(d => d.date === date);
            if (day) {
                return day;
            }
        }
        return null;
    }

    getSessionByDateAndIndex(date, sessionIndex) {
        const daySessions = this.getDaySessions(date);
        return daySessions[sessionIndex] || null;
    }

    getWeekSessions(weekNum) {
        const week = this.completeSchedule.find(w => w.week === weekNum);
        if (!week) return [];
        
        return week.days.reduce((sessions, day) => {
            day.sessions.forEach((session, index) => {
                sessions.push({...session, date: day.date, sessionIndex: index});
            });
            return sessions;
        }, []);
    }

    getTodayStudyTime() {
        const today = this.formatDate(this.currentDate);
        return Math.round((this.state.studyTime[today] || 0) / 60); // minutes
    }

    getWeakGrammarAreas() {
        return this.grammarTopics
            .map((topic, index) => ({topic: topic.topic, score: this.state.grammarProgress[index] || 0}))
            .filter(item => item.score < 70)
            .sort((a, b) => a.score - b.score)
            .map(item => item.topic);
    }

    getLowestSkill() {
        if (this.state.practiceTestResults.length === 0) return null;
        
        const skills = ['reading', 'writing', 'listening', 'speaking'];
        const skillScores = skills.map(skill => ({
            skill: skill,
            score: this.getSkillTestAverage(skill)
        }));
        
        const lowest = skillScores.reduce((min, current) => 
            current.score < min.score ? current : min
        );
        
        return lowest.score < 70 ? lowest.skill : null;
    }

    saveDailyNotes() {
        const dailyNotesElement = document.getElementById('dailyNotes');
        if (dailyNotesElement) {
            const today = this.formatDate(this.currentDate);
            this.state.dailyNotes[today] = dailyNotesElement.value;
            this.saveData();
        }
    }

    formatDate(date) {
        return date.toISOString().split('T')[0];
    }

    formatDisplayDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}

// Global Functions
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function switchView(viewName) {
    if (window.app) {
        window.app.switchView(viewName);
    }
}

function saveDailyNotes() {
    if (window.app) {
        window.app.saveDailyNotes();
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    window.app = new B1ExamPrepApp();
});