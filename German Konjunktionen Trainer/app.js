// German Conjunctions Learning App

// Application data
const appData = {
  coordinating: {
    description: "Coordinating Conjunctions (Nebenordnende Konjunktionen) connect two main clauses (Hauptsätze). Verb position stays in 2nd place.",
    conjunctions: [
      {
        word: "und",
        meaning: "and",
        example_de: "Ich lerne Deutsch und sie lernt Englisch.",
        example_en: "I learn German and she learns English.",
        structure: "Hauptsatz + (und) + Hauptsatz",
        tip: "Does not change word order."
      },
      {
        word: "oder",
        meaning: "or",
        example_de: "Kommst du heute oder kommst du morgen?",
        example_en: "Are you coming today or are you coming tomorrow?",
        structure: "Hauptsatz + (oder) + Hauptsatz",
        tip: "Usually no comma."
      },
      {
        word: "aber",
        meaning: "but",
        example_de: "Ich bin müde, aber ich arbeite weiter.",
        example_en: "I am tired, but I keep working.",
        structure: "Hauptsatz + (aber) + Hauptsatz",
        tip: "Needs a comma."
      },
      {
        word: "denn",
        meaning: "because",
        example_de: "Ich bleibe zu Hause, denn ich bin krank.",
        example_en: "I stay at home because I am sick.",
        structure: "Hauptsatz + (denn) + Hauptsatz",
        tip: "Needs main clause both sides."
      },
      {
        word: "sondern",
        meaning: "but rather",
        example_de: "Ich trinke keinen Kaffee, sondern Tee.",
        example_en: "I don't drink coffee, but rather tea.",
        structure: "Hauptsatz + (sondern) + Hauptsatz",
        tip: "Only after negation."
      },
      {
        word: "doch",
        meaning: "but, yet",
        example_de: "Es ist kalt, doch wir gehen raus.",
        example_en: "It's cold, yet we go outside.",
        structure: "Hauptsatz + (doch) + Hauptsatz",
        tip: "Needs a comma."
      }
    ]
  },
  subordinating: {
    description: "Subordinating Conjunctions (Unterordnende Konjunktionen) introduce a Nebensatz and send the verb to the end.",
    conjunctions: [
      {
        word: "weil",
        meaning: "because",
        example_de: "Ich bleibe zu Hause, weil ich krank bin.",
        example_en: "I stay at home because I am sick.",
        structure: "Hauptsatz, weil + Nebensatz [verb at end]",
        tip: "Verb at sentence end!"
      },
      {
        word: "dass",
        meaning: "that",
        example_de: "Ich weiß, dass du Recht hast.",
        example_en: "I know that you are right.",
        structure: "Hauptsatz, dass + Nebensatz [verb at end]",
        tip: "Very common in reported speech."
      },
      {
        word: "wenn",
        meaning: "when, if",
        example_de: "Wenn ich Zeit habe, helfe ich dir.",
        example_en: "When/If I have time, I help you.",
        structure: "Wenn + Nebensatz [verb at end], Hauptsatz.",
        tip: "For repeated/present/future actions"
      },
      {
        word: "als",
        meaning: "when (past, once)",
        example_de: "Als ich klein war, spielte ich Fußball.",
        example_en: "When I was little, I played soccer.",
        structure: "Als + Nebensatz [verb at end], Hauptsatz",
        tip: "Only for one-time past events."
      },
      {
        word: "obwohl",
        meaning: "although",
        example_de: "Obwohl ich müde bin, arbeite ich weiter.",
        example_en: "Although I am tired, I keep working.",
        structure: "Obwohl + Nebensatz [verb at end], Hauptsatz.",
        tip: "Verb at end."
      },
      {
        word: "ob",
        meaning: "whether, if",
        example_de: "Ich frage mich, ob er kommt.",
        example_en: "I wonder whether he comes.",
        structure: "Hauptsatz, ob + Nebensatz [verb at end]",
        tip: "Used for indirect questions."
      },
      {
        word: "nachdem",
        meaning: "after",
        example_de: "Nachdem er gegessen hatte, ging er schlafen.",
        example_en: "After he had eaten, he went to sleep.",
        structure: "Nachdem + Nebensatz [verb at end], Hauptsatz",
        tip: "Requires one tense step back."
      },
      {
        word: "bevor",
        meaning: "before",
        example_de: "Bevor ich gehe, rufe ich dich an.",
        example_en: "Before I go, I call you.",
        structure: "Bevor + Nebensatz [verb at end], Hauptsatz.",
        tip: "Verb at end."
      }
    ]
  },
  twopart: {
    description: "Two-part conjunctions use two parts in different places in a sentence.",
    conjunctions: [
      {
        word: "entweder... oder",
        meaning: "either... or",
        example_de: "Wir gehen entweder ins Kino oder ins Restaurant.",
        example_en: "We either go to the cinema or to the restaurant.",
        structure: "entweder... (Hauptsatz) ... oder ... (Hauptsatz)",
        tip: "Offers alternatives."
      },
      {
        word: "weder... noch",
        meaning: "neither... nor",
        example_de: "Sie isst weder Fisch noch Fleisch.",
        example_en: "She eats neither fish nor meat.",
        structure: "weder... (Hauptsatz) ... noch ... (Hauptsatz)",
        tip: "Both options negated."
      },
      {
        word: "sowohl... als auch",
        meaning: "both... and",
        example_de: "Ich spreche sowohl Deutsch als auch Englisch.",
        example_en: "I speak both German and English.",
        structure: "sowohl... (Hauptsatz) ... als auch ... (Hauptsatz)",
        tip: "Both options included."
      },
      {
        word: "nicht nur... sondern auch",
        meaning: "not only... but also",
        example_de: "Er ist nicht nur intelligent, sondern auch fleißig.",
        example_en: "He is not only intelligent but also hardworking.",
        structure: "nicht nur... (Hauptsatz) ... sondern auch ... (Hauptsatz)",
        tip: "Emphasizes addition."
      },
      {
        word: "zwar... aber",
        meaning: "indeed... but",
        example_de: "Er ist zwar müde, aber er arbeitet weiter.",
        example_en: "He is indeed tired, but he keeps working.",
        structure: "zwar... (Hauptsatz) ... aber ... (Hauptsatz)",
        tip: "Highlight contrast, both parts needed."
      },
      {
        word: "je... desto/umso",
        meaning: "the... the",
        example_de: "Je mehr du lernst, desto besser wirst du.",
        example_en: "The more you study, the better you become.",
        structure: "je + comparative (Nebensatz), desto/umso + comparative (Hauptsatz)",
        tip: "Compares increases."
      }
    ]
  },
  adverbs: {
    description: "Conjunctive Adverbs (Konjunktionaladverbien) connect sentences; verb is always at 2nd position.",
    conjunctions: [
      {
        word: "deshalb",
        meaning: "therefore",
        example_de: "Es regnet. Deshalb bleibe ich zu Hause.",
        example_en: "It's raining. Therefore I stay at home.",
        structure: "Sentence 1. Adverb + Sentence 2 [V in 2nd]",
        tip: "Cause/result connection."
      },
      {
        word: "trotzdem",
        meaning: "nevertheless",
        example_de: "Ich bin müde. Trotzdem gehe ich zur Arbeit.",
        example_en: "I am tired. Nevertheless I go to work.",
        structure: "Sentence 1. Adverb + Sentence 2 [V in 2nd]",
        tip: "Despite situation; next clause."
      },
      {
        word: "außerdem",
        meaning: "furthermore",
        example_de: "Ich mag Kaffee. Außerdem trinke ich gern Tee.",
        example_en: "I like coffee. Furthermore I like to drink tea.",
        structure: "Sentence 1. Adverb + Sentence 2 [V in 2nd]",
        tip: "Adds info."
      },
      {
        word: "dann",
        meaning: "then",
        example_de: "Ich esse zuerst. Dann gehe ich schlafen.",
        example_en: "I eat first. Then I go to sleep.",
        structure: "Sentence 1. Adverb + Sentence 2 [V in 2nd]",
        tip: "Sequence order."
      },
      {
        word: "sonst",
        meaning: "otherwise",
        example_de: "Beeil dich. Sonst kommst du zu spät.",
        example_en: "Hurry up. Otherwise you'll be late.",
        structure: "Sentence 1. Adverb + Sentence 2 [V in 2nd]",
        tip: "Negative consequence."
      }
    ]
  }
};

// Game data for drag and drop
const gameData = {
  coordinating: {
    items: ['und', 'oder', 'aber', 'denn'],
    answers: { und: 'hauptsatz', oder: 'hauptsatz', aber: 'hauptsatz', denn: 'hauptsatz' }
  },
  subordinating: {
    items: ['weil', 'dass', 'wenn', 'obwohl'],
    answers: { weil: 'nebensatz', dass: 'nebensatz', wenn: 'nebensatz', obwohl: 'nebensatz' }
  },
  twopart: {
    items: ['entweder...oder', 'sowohl...als auch', 'weder...noch'],
    answers: { 'entweder...oder': 'hauptsatz', 'sowohl...als auch': 'hauptsatz', 'weder...noch': 'hauptsatz' }
  },
  adverbs: {
    items: ['deshalb', 'trotzdem', 'außerdem', 'dann'],
    answers: { deshalb: 'hauptsatz', trotzdem: 'hauptsatz', außerdem: 'hauptsatz', dann: 'hauptsatz' }
  }
};

// Quiz data
const quizData = {
  coordinating: [
    {
      question: "Which conjunction connects two main clauses without changing word order?",
      options: ['weil', 'und', 'dass', 'obwohl'],
      correct: 1,
      explanation: "'und' is a coordinating conjunction that doesn't change word order."
    },
    {
      question: "Complete: Ich bin müde, ___ ich arbeite weiter.",
      options: ['weil', 'aber', 'dass', 'wenn'],
      correct: 1,
      explanation: "'aber' (but) shows contrast and needs a comma."
    }
  ],
  subordinating: [
    {
      question: "Where does the verb go with subordinating conjunctions?",
      options: ['Second position', 'First position', 'At the end', 'Anywhere'],
      correct: 2,
      explanation: "Subordinating conjunctions send the verb to the END of the clause."
    },
    {
      question: "Complete: Ich lerne Deutsch, ___ es wichtig ist.",
      options: ['aber', 'und', 'weil', 'oder'],
      correct: 2,
      explanation: "'weil' (because) introduces a subordinate clause with verb at end."
    }
  ],
  twopart: [
    {
      question: "What makes two-part conjunctions special?",
      options: ['They change word order', 'They use two parts', 'They need commas', 'They are always negative'],
      correct: 1,
      explanation: "Two-part conjunctions have parts in different positions in the sentence."
    }
  ],
  adverbs: [
    {
      question: "With conjunctive adverbs, where is the verb positioned?",
      options: ['At the end', 'First position', 'Second position', 'Third position'],
      correct: 2,
      explanation: "Conjunctive adverbs keep normal word order with verb in 2nd position."
    }
  ]
};

// Application state
let appStarted = false; // Track if app has been started to prevent splash screen from reappearing
let currentSection = 'coordinating';
let gameState = {
  currentGame: null,
  userAnswers: {},
  score: 0
};
let quizState = {
  currentQuiz: null,
  currentQuestion: 0,
  userAnswers: [],
  score: 0
};

// DOM Elements
let progressText;

// Ensure all modals are hidden on startup
function ensureModalsHidden() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.classList.add('hidden');
  });
}

// Initialize the app
function init() {
  progressText = document.getElementById('progress-text');
  
  // Ensure all modals are hidden on startup
  ensureModalsHidden();
  
  // Ensure proper initial state: splash visible, main app hidden
  const splashScreen = document.getElementById('splash-screen');
  const mainApp = document.getElementById('main-app');
  
  // Make sure splash screen is visible (remove any hidden class)
  if (splashScreen) {
    splashScreen.classList.remove('hidden');
    splashScreen.style.display = 'flex'; // Ensure it's displayed
  }
  
  // Make sure main app is hidden initially
  if (mainApp) {
    mainApp.classList.add('hidden');
  }
  
  setupNavigation();
  setupEventListeners();
  
  // Do NOT call loadSection here - that should only happen after startApp()
}

// Setup navigation
function setupNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Navigation should NEVER start the app or show splash screen
      // Navigation only works within the main app after it's started
      if (!appStarted) {
        // If app hasn't started, navigation clicks should be ignored
        return;
      }
      
      const section = tab.getAttribute('data-section');
      if (section === 'memory-tips') {
        showSection('memory-tips-section');
        updateNavigation('memory-tips');
        updateProgress('Reading memory tips & common mistakes');
      } else {
        loadSection(section);
      }
    });
  });
}

// Setup event listeners
function setupEventListeners() {
  // Modal close events
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Start the app (hide splash screen) - CALLED ONLY ONCE
function startApp() {
  // Set flag to prevent splash screen from ever reappearing
  appStarted = true;
  
  // Hide splash screen and show main app - PERMANENT switch
  const splashScreen = document.getElementById('splash-screen');
  const mainApp = document.getElementById('main-app');
  
  if (splashScreen) {
    splashScreen.style.display = 'none'; // Use style.display for permanent hiding
  }
  
  if (mainApp) {
    mainApp.classList.remove('hidden');
  }
  
  // Now that main app is shown, initialize the first section
  loadSection('coordinating');
  updateProgress('Welcome to German Conjunctions Master!');
}

// Load a specific section (only works after app is started)
function loadSection(section) {
  // This function should NEVER start the app
  // It only works within the main app context after startApp() has been called
  if (!appStarted) {
    // If app hasn't started, section loading should not work
    return;
  }
  
  currentSection = section;
  showSection(section + '-section');
  updateNavigation(section);
  
  if (appData[section]) {
    renderCards(section);
    updateProgress(`Learning ${section} conjunctions`);
  }
}

// Show specific section (only works within main app)
function showSection(sectionId) {
  // This function should NEVER start the app
  // It only works within the main app context after startApp() has been called
  if (!appStarted) {
    // If app hasn't started, section showing should not work
    return;
  }
  
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
}

// Update navigation active state
function updateNavigation(section) {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  const activeTab = document.querySelector(`[data-section="${section}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
}

// Render learning cards for a section
function renderCards(section) {
  const container = document.getElementById(section + '-cards');
  if (!container || !appData[section]) return;
  
  container.innerHTML = '';
  
  appData[section].conjunctions.forEach((item, index) => {
    const card = createLearningCard(item, section, index);
    container.appendChild(card);
  });
}

// Create a learning card
function createLearningCard(item, section, index) {
  const card = document.createElement('div');
  card.className = 'learning-card';
  card.setAttribute('data-type', section);
  
  card.innerHTML = `
    <div class="card-front">
      <div class="card-header">
        <div class="card-word">${item.word}</div>
        <div class="card-type">${section}</div>
      </div>
      <div class="card-structure">
        <strong>Structure:</strong> ${item.structure}
      </div>
      <div class="card-examples">
        <div class="example-german">${item.example_de}</div>
        <div class="example-english">${item.example_en}</div>
      </div>
      <div class="card-tip">
        💡 ${item.tip}
      </div>
    </div>
    <div class="card-back">
      <div class="card-meaning">${item.meaning}</div>
      <div class="card-examples">
        <div class="example-german">${item.example_de}</div>
        <div class="example-english">${item.example_en}</div>
      </div>
      <div class="card-structure">
        <strong>Structure:</strong> ${item.structure}
      </div>
      <div class="card-tip">
        💡 ${item.tip}
      </div>
    </div>
  `;
  
  // Add flip functionality
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
  
  return card;
}

// Start practice game
function startGame(section) {
  if (!gameData[section]) return;
  
  // Only allow games if app has been started
  if (!appStarted) {
    return;
  }
  
  // Close any open modals first
  closeModal();
  
  gameState.currentGame = section;
  gameState.userAnswers = {};
  gameState.score = 0;
  
  const modal = document.getElementById('game-modal');
  const title = document.getElementById('game-title');
  const dragItems = document.getElementById('drag-items');
  const feedback = document.getElementById('game-feedback');
  
  title.textContent = `Practice Game: ${section.charAt(0).toUpperCase() + section.slice(1)} Conjunctions`;
  
  // Clear previous items
  dragItems.innerHTML = '';
  feedback.classList.add('hidden');
  
  // Add drag items
  gameData[section].items.forEach(item => {
    const dragItem = document.createElement('div');
    dragItem.className = 'drag-item';
    dragItem.textContent = item;
    dragItem.draggable = true;
    dragItem.setAttribute('data-item', item);
    
    // Add drag events
    dragItem.addEventListener('dragstart', handleDragStart);
    dragItem.addEventListener('dragend', handleDragEnd);
    
    dragItems.appendChild(dragItem);
  });
  
  // Setup drop zones
  const dropZones = document.querySelectorAll('.drop-zone');
  dropZones.forEach(zone => {
    // Clear any previous items
    const existingItems = zone.querySelectorAll('.drag-item');
    existingItems.forEach(item => item.remove());
    
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('drop', handleDrop);
    zone.addEventListener('dragenter', handleDragEnter);
    zone.addEventListener('dragleave', handleDragLeave);
  });
  
  modal.classList.remove('hidden');
}

// Drag and drop handlers
function handleDragStart(e) {
  e.target.classList.add('dragging');
  e.dataTransfer.setData('text/plain', e.target.getAttribute('data-item'));
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    e.currentTarget.classList.remove('drag-over');
  }
}

function handleDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  
  const item = e.dataTransfer.getData('text/plain');
  const zoneType = e.currentTarget.getAttribute('data-type');
  
  // Find and move the dragged element
  const draggedElement = document.querySelector(`[data-item="${item}"]`);
  if (draggedElement) {
    e.currentTarget.appendChild(draggedElement);
    gameState.userAnswers[item] = zoneType;
  }
}

// Check game answers
function checkGameAnswers() {
  if (!gameState.currentGame) return;
  
  const correctAnswers = gameData[gameState.currentGame].answers;
  let score = 0;
  let total = Object.keys(correctAnswers).length;
  
  // Calculate score
  for (const [item, correctAnswer] of Object.entries(correctAnswers)) {
    if (gameState.userAnswers[item] === correctAnswer) {
      score++;
    }
  }
  
  gameState.score = score;
  
  // Show feedback
  const feedback = document.getElementById('game-feedback');
  feedback.classList.remove('hidden');
  
  if (score === total) {
    feedback.className = 'game-feedback success';
    feedback.innerHTML = `🎉 Perfect! You got all ${total} correct!`;
  } else if (score >= total * 0.7) {
    feedback.className = 'game-feedback success';
    feedback.innerHTML = `👏 Great job! You got ${score} out of ${total} correct.`;
  } else {
    feedback.className = 'game-feedback error';
    feedback.innerHTML = `📚 Keep practicing! You got ${score} out of ${total} correct.`;
  }
  
  updateProgress(`Game completed: ${score}/${total} correct`);
}

// Reset game
function resetGame() {
  if (!gameState.currentGame) return;
  
  gameState.userAnswers = {};
  const feedback = document.getElementById('game-feedback');
  feedback.classList.add('hidden');
  
  // Move all items back to source
  const dragItems = document.getElementById('drag-items');
  const allDragItems = document.querySelectorAll('.drag-item');
  
  allDragItems.forEach(item => {
    dragItems.appendChild(item);
  });
  
  // Remove drag-over classes
  document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.classList.remove('drag-over');
  });
}

// Start quiz
function startQuiz(section) {
  if (!quizData[section]) return;
  
  // Only allow quizzes if app has been started
  if (!appStarted) {
    return;
  }
  
  // Close any open modals first
  closeModal();
  
  quizState.currentQuiz = section;
  quizState.currentQuestion = 0;
  quizState.userAnswers = [];
  quizState.score = 0;
  
  const modal = document.getElementById('quiz-modal');
  const title = document.getElementById('quiz-title');
  
  title.textContent = `Quick Quiz: ${section.charAt(0).toUpperCase() + section.slice(1)} Conjunctions`;
  
  renderQuizQuestion();
  modal.classList.remove('hidden');
}

// Render quiz question
function renderQuizQuestion() {
  const quizArea = document.getElementById('quiz-area');
  const questions = quizData[quizState.currentQuiz];
  const currentQ = questions[quizState.currentQuestion];
  
  if (!currentQ) {
    showQuizResults();
    return;
  }
  
  quizArea.innerHTML = `
    <div class="quiz-question">
      <h4>Question ${quizState.currentQuestion + 1} of ${questions.length}</h4>
      <p>${currentQ.question}</p>
      
      <div class="quiz-options">
        ${currentQ.options.map((option, index) => `
          <div class="quiz-option" data-option="${index}">${option}</div>
        `).join('')}
      </div>
      
      <div class="quiz-controls">
        <button class="btn btn--primary" onclick="submitQuizAnswer()">Submit Answer</button>
      </div>
    </div>
  `;
  
  // Add click handlers for options
  document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
    });
  });
}

// Submit quiz answer
function submitQuizAnswer() {
  const selected = document.querySelector('.quiz-option.selected');
  if (!selected) return;
  
  const answerIndex = parseInt(selected.getAttribute('data-option'));
  const questions = quizData[quizState.currentQuiz];
  const currentQ = questions[quizState.currentQuestion];
  
  quizState.userAnswers.push(answerIndex);
  
  // Show correct answer
  document.querySelectorAll('.quiz-option').forEach((option, index) => {
    if (index === currentQ.correct) {
      option.classList.add('correct');
    } else if (option.classList.contains('selected') && index !== currentQ.correct) {
      option.classList.add('incorrect');
    }
  });
  
  // Update score
  if (answerIndex === currentQ.correct) {
    quizState.score++;
  }
  
  // Show explanation and next button
  const controls = document.querySelector('.quiz-controls');
  controls.innerHTML = `
    <p><strong>Explanation:</strong> ${currentQ.explanation}</p>
    <button class="btn btn--primary" onclick="nextQuestion()">Next Question</button>
  `;
}

// Next question
function nextQuestion() {
  quizState.currentQuestion++;
  renderQuizQuestion();
}

// Show quiz results
function showQuizResults() {
  const quizArea = document.getElementById('quiz-area');
  const totalQuestions = quizData[quizState.currentQuiz].length;
  const percentage = Math.round((quizState.score / totalQuestions) * 100);
  
  let resultClass = 'poor';
  let message = 'Keep studying!';
  
  if (percentage >= 80) {
    resultClass = 'good';
    message = 'Excellent work!';
  } else if (percentage >= 60) {
    resultClass = 'okay';
    message = 'Good job!';
  }
  
  quizArea.innerHTML = `
    <div class="quiz-result ${resultClass}">
      <h3>${message}</h3>
      <p>You scored ${quizState.score} out of ${totalQuestions} (${percentage}%)</p>
      <div class="quiz-controls">
        <button class="btn btn--secondary" onclick="startQuiz('${quizState.currentQuiz}')">Try Again</button>
        <button class="btn btn--primary" onclick="closeModal()">Continue Learning</button>
      </div>
    </div>
  `;
  
  updateProgress(`Quiz completed: ${quizState.score}/${totalQuestions} correct (${percentage}%)`);
}

// Close modal
function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
  
  // Clear any game or quiz state when closing
  resetGameState();
  resetQuizState();
}

// Reset game state
function resetGameState() {
  const feedback = document.getElementById('game-feedback');
  if (feedback) {
    feedback.classList.add('hidden');
  }
}

// Reset quiz state 
function resetQuizState() {
  // Clear any quiz UI state if needed
  const quizArea = document.getElementById('quiz-area');
  if (quizArea) {
    // Reset quiz area content when modal closes
    quizArea.innerHTML = '';
  }
}

// Update progress text
function updateProgress(text) {
  // Only update progress if app has been started
  if (progressText && appStarted) {
    progressText.textContent = text;
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export functions for HTML onclick handlers
window.startApp = startApp;
window.startGame = startGame;
window.startQuiz = startQuiz;
window.closeModal = closeModal;
window.resetGame = resetGame;
window.checkGameAnswers = checkGameAnswers;
window.submitQuizAnswer = submitQuizAnswer;
window.nextQuestion = nextQuestion;