/**
 * app.js - Lógica Integral de la Plataforma de Estudio y Evaluación
 * Formulación y Evaluación de Proyectos (Gabriel Baca Urbina)
 * Soporta: Lecturas por capítulo, Cuestionarios específicos,
 * Banco Maestro de 148 Preguntas con argumentación analítica,
 * Simulador Global de Examen, Laboratorio con Canvas y Flashcards 3D.
 */

// Estado global de la aplicación
const AppState = {
  currentView: 'dashboard',      // 'dashboard', 'master-bank', 'chapter', 'global-quiz', 'tools', 'flashcards'
  currentChapterId: 'cap1',
  currentTab: 'reading',         // 'reading' o 'quiz'
  
  // Estado del cuestionario por capítulo
  activeQuiz: {
    chapterId: null,
    questions: [],
    currentIndex: 0,
    userAnswers: {},             // { [qIndex]: selectedOptionIndex }
    isSubmitted: false,
    score: 0,
    isGlobal: false,
    timerSeconds: 0,
    timerInterval: null
  },

  // Estado del Banco Maestro de Preguntas
  masterBank: {
    currentFilter: 'all',        // 'all', '1', '2', '3', '4', '5', '6'
    currentSearch: '',
    userAnswers: JSON.parse(localStorage.getItem('study_master_answers') || '{}'),
    revealedAnswers: {},
    areAllRevealed: false
  },

  // Preferencias y progreso del usuario
  preferences: {
    theme: localStorage.getItem('study_theme') || 'dark',
    sound: localStorage.getItem('study_sound') !== 'false',
    fontSize: parseInt(localStorage.getItem('study_font_size')) || 16
  },
  progress: JSON.parse(localStorage.getItem('study_progress') || '{}')
};

// Web Audio API sintetizador de sonidos educativos sutiles
const SoundManager = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playTone(freq, type, duration, gainLevel = 0.08) {
    if (!AppState.preferences.sound) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Ignorar fallas de audio en navegadores que bloqueen autoplay
    }
  },
  playCorrect() {
    this.playTone(587.33, 'sine', 0.12, 0.08); // D5
    setTimeout(() => this.playTone(880, 'sine', 0.25, 0.08), 120); // A5
  },
  playIncorrect() {
    this.playTone(220, 'triangle', 0.2, 0.1);
  },
  playWin() {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.3, 0.09), idx * 110);
    });
  }
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  renderDashboard();
  renderFlashcards();
  renderMasterBankUI();
  initBreakEvenCalculator();
  initSampleCalculator();
  initTMARCalculator();
  updateGlobalMetrics();
});

// Configuración de temas
function initTheme() {
  if (AppState.preferences.theme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon('sun');
  } else {
    document.body.classList.remove('light-theme');
    updateThemeIcon('moon');
  }
  document.documentElement.style.fontSize = `${AppState.preferences.fontSize}px`;
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  AppState.preferences.theme = isLight ? 'light' : 'dark';
  localStorage.setItem('study_theme', AppState.preferences.theme);
  updateThemeIcon(isLight ? 'sun' : 'moon');
}

function updateThemeIcon(type) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = type === 'sun' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
}

// Event Listeners principales
function setupEventListeners() {
  // Toggle navegación móvil
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('app-sidebar');
  if (mobileBtn && sidebar) {
    mobileBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Cierre de menú móvil al hacer click fuera
  document.addEventListener('click', (e) => {
    if (sidebar && sidebar.classList.contains('open')) {
      if (!sidebar.contains(e.target) && e.target !== mobileBtn) {
        sidebar.classList.remove('open');
      }
    }
  });

  // Toggle de Tema
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Toggle de Sonido
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      AppState.preferences.sound = !AppState.preferences.sound;
      localStorage.setItem('study_sound', AppState.preferences.sound);
      soundBtn.innerHTML = AppState.preferences.sound 
        ? '<i class="fas fa-volume-up"></i>' 
        : '<i class="fas fa-volume-mute"></i>';
      SoundManager.playCorrect();
    });
  }

  // Navegación Sidebar
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      const chapterId = item.dataset.chapter;
      
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      if (view === 'dashboard') {
        navigateTo('dashboard');
      } else if (view === 'master-bank') {
        navigateTo('master-bank');
        renderMasterBankUI();
      } else if (view === 'chapter') {
        loadChapter(chapterId, 'reading');
      } else if (view === 'global-quiz') {
        startGlobalQuiz();
      } else if (view === 'tools') {
        navigateTo('tools');
      } else if (view === 'flashcards') {
        navigateTo('flashcards');
      }

      if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    });
  });

  // Ajuste de tamaño de fuente
  document.querySelectorAll('.btn-font-size').forEach(btn => {
    btn.addEventListener('click', () => {
      const delta = parseInt(btn.dataset.delta);
      if (delta === 0) AppState.preferences.fontSize = 16;
      else AppState.preferences.fontSize = Math.min(20, Math.max(14, AppState.preferences.fontSize + delta));
      
      document.documentElement.style.fontSize = `${AppState.preferences.fontSize}px`;
      localStorage.setItem('study_font_size', AppState.preferences.fontSize);
    });
  });
}

// Navegación de Vistas
function navigateTo(viewName) {
  AppState.currentView = viewName;
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Sincronizar clase activa en sidebar
  document.querySelectorAll('.nav-item').forEach(el => {
    if (el.dataset.view === viewName && (!el.dataset.chapter || el.dataset.chapter === AppState.currentChapterId)) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  const titleEl = document.getElementById('current-view-title');
  if (titleEl) {
    const titles = {
      dashboard: "Plataforma de Estudio y Preparación de Proyectos",
      'master-bank': "Banco Maestro de Reactivos (148 Preguntas con Fundamentación)",
      chapter: STUDY_DATA.chapters.find(c => c.id === AppState.currentChapterId)?.title || "Capítulo",
      'global-quiz': "Simulador de Examen Global (Gabriel Baca Urbina)",
      tools: "Laboratorio Financiero e Ingeniería (Calculadoras)",
      flashcards: "Tarjetas Mnemotécnicas y Conceptos Clave"
    };
    titleEl.textContent = titles[viewName] || "Evaluación de Proyectos";
  }
}

// Renderizado del Dashboard Principal
function renderDashboard() {
  const container = document.getElementById('dashboard-chapters-list');
  if (!container) return;

  container.innerHTML = STUDY_DATA.chapters.map(chap => {
    const chapProgress = AppState.progress[chap.id] || { read: false, bestScore: 0, totalQuestions: chap.quiz.length };
    const scoreText = chapProgress.bestScore ? `${chapProgress.bestScore}/${chap.quiz.length} (${Math.round((chapProgress.bestScore/chap.quiz.length)*100)}%)` : 'No intentado';
    
    return `
      <div class="chapter-box" style="--chap-color: ${chap.color};">
        <div class="chapter-header">
          <span class="chapter-num-badge">Módulo ${chap.number}</span>
          <span class="nav-badge" style="background: ${chap.accent}; color: ${chap.color};">
            <i class="fas ${chap.icon}"></i> ${chap.badge}
          </span>
        </div>
        <h3>${chap.title}</h3>
        <p>${chap.description}</p>
        <div class="chapter-stats">
          <span><i class="fas fa-book-open"></i> ${chap.reading.sections.length} Lecturas</span>
          <span><i class="fas fa-check-circle"></i> ${scoreText}</span>
        </div>
        <div class="chapter-btn-group">
          <button class="btn-card" onclick="loadChapter('${chap.id}', 'reading')">
            <i class="fas fa-book-reader"></i> Ver Lecturas
          </button>
          <button class="btn-card primary" onclick="loadChapter('${chap.id}', 'quiz')">
            <i class="fas fa-pencil-alt"></i> Cuestionario (${chap.quiz.length})
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Carga y Visualización de un Capítulo Específico
function loadChapter(chapterId, tab = 'reading') {
  AppState.currentChapterId = chapterId;
  AppState.currentTab = tab;
  navigateTo('chapter');

  const chapter = STUDY_DATA.chapters.find(c => c.id === chapterId);
  if (!chapter) return;

  // Render cabecera del capítulo
  const heroEl = document.getElementById('chapter-hero-content');
  if (heroEl) {
    heroEl.innerHTML = `
      <span class="chapter-badge-tag" style="background: ${chapter.accent}; color: ${chapter.color};">
        Módulo ${chapter.number} &bull; ${chapter.badge}
      </span>
      <h2 class="chapter-main-title">${chapter.title}</h2>
      <p class="chapter-sub-summary">${chapter.reading.summary}</p>
    `;
  }

  // Sincronizar botones de pestañas
  const tabReading = document.getElementById('tab-reading-btn');
  const tabQuiz = document.getElementById('tab-quiz-btn');
  const panelReading = document.getElementById('panel-reading');
  const panelQuiz = document.getElementById('panel-quiz');

  if (tab === 'reading') {
    tabReading.classList.add('active');
    tabQuiz.classList.remove('active');
    panelReading.style.display = 'block';
    panelQuiz.style.display = 'none';
    renderReadingSections(chapter);
  } else {
    tabReading.classList.remove('active');
    tabQuiz.classList.add('active');
    panelReading.style.display = 'none';
    panelQuiz.style.display = 'block';
    startChapterQuiz(chapter);
  }

  // Listeners de tabs
  tabReading.onclick = () => loadChapter(chapterId, 'reading');
  tabQuiz.onclick = () => loadChapter(chapterId, 'quiz');
}

// Renderizado de las secciones de Lectura
function renderReadingSections(chapter) {
  const tocList = document.getElementById('reading-toc-list');
  const contentArticle = document.getElementById('reading-article-content');
  
  if (!tocList || !contentArticle) return;

  // Render Table of Contents (TOC)
  tocList.innerHTML = chapter.reading.sections.map((sec, idx) => `
    <li>
      <a href="#${sec.id}" class="toc-link ${idx === 0 ? 'active' : ''}">
        ${sec.title}
      </a>
    </li>
  `).join('');

  // Render Artículos de Lectura
  contentArticle.innerHTML = chapter.reading.sections.map(sec => `
    <section id="${sec.id}" class="reading-section-block">
      <h3>${sec.title}</h3>
      <div class="reading-body">
        ${sec.content}
      </div>
    </section>
  `).join('');

  // Marcar como leído
  if (!AppState.progress[chapter.id]) AppState.progress[chapter.id] = {};
  AppState.progress[chapter.id].read = true;
  saveProgress();
  updateGlobalMetrics();

  // Scrollspy para TOC
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.toc-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.reading-section-block').forEach(s => observer.observe(s));
}

// ==========================================================================
// Cuestionarios por Capítulo
// ==========================================================================

function startChapterQuiz(chapter) {
  AppState.activeQuiz = {
    chapterId: chapter.id,
    questions: [...chapter.quiz],
    currentIndex: 0,
    userAnswers: {},
    isSubmitted: false,
    score: 0,
    isGlobal: false
  };

  renderQuizUI();
}

function renderQuizUI() {
  const quiz = AppState.activeQuiz;
  const qContainer = document.getElementById('chapter-quiz-view');
  if (!qContainer) return;

  const currentQ = quiz.questions[quiz.currentIndex];
  if (!currentQ) return;

  const total = quiz.questions.length;
  const progressPercent = ((quiz.currentIndex + 1) / total) * 100;
  const isAnswered = quiz.userAnswers.hasOwnProperty(quiz.currentIndex);
  const selectedIndex = quiz.userAnswers[quiz.currentIndex];

  const promptText = currentQ.question || currentQ.enunciado;
  const optList = currentQ.options || currentQ.opciones || [];
  const correctIndex = (currentQ.correct !== undefined) ? currentQ.correct : currentQ.correcta;
  const explainText = currentQ.explanation || currentQ.fundamentacion || currentQ.resumen;

  qContainer.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header-bar">
        <div class="quiz-progress-info">
          <span class="quiz-badge">Pregunta ${quiz.currentIndex + 1} de ${total}</span>
          <span class="progress-text">Aciertos: ${quiz.score} / ${total}</span>
        </div>
        <button class="btn-card" onclick="startChapterQuiz(STUDY_DATA.chapters.find(c => c.id === '${quiz.chapterId}'))">
          <i class="fas fa-redo"></i> Reiniciar
        </button>
      </div>

      <div class="quiz-track-bar">
        <div class="quiz-track-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="question-box">
        <h3 class="question-prompt">${promptText}</h3>
        <ul class="options-list">
          ${optList.map((opt, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx);
            let stateClass = '';
            if (isAnswered) {
              if (optIdx === correctIndex) stateClass = 'correct';
              else if (optIdx === selectedIndex) stateClass = 'incorrect';
            } else if (selectedIndex === optIdx) {
              stateClass = 'selected';
            }

            return `
              <li>
                <button class="option-btn ${stateClass}" 
                        onclick="handleOptionSelect(${optIdx})"
                        ${isAnswered ? 'disabled' : ''}>
                  <span class="option-letter">${letter}</span>
                  <span class="option-text">${opt}</span>
                </button>
              </li>
            `;
          }).join('')}
        </ul>

        <!-- Explicación Pedagógica -->
        <div id="feedback-panel" class="feedback-box ${isAnswered ? (selectedIndex === correctIndex ? 'correct' : 'incorrect') : ''}" 
             style="display: ${isAnswered ? 'block' : 'none'};">
          <div class="feedback-title">
            <i class="fas ${selectedIndex === correctIndex ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            ${selectedIndex === correctIndex ? '¡Correcto!' : 'Respuesta Incorrecta'}
          </div>
          <div class="feedback-explanation mathjax-container">
            <strong>Explicación:</strong> ${explainText}
          </div>
        </div>
      </div>

      <div class="quiz-actions-footer">
        <button class="btn-quiz btn-quiz-secondary" 
                onclick="changeQuestion(-1)" 
                ${quiz.currentIndex === 0 ? 'disabled' : ''}>
          <i class="fas fa-arrow-left"></i> Anterior
        </button>

        ${quiz.currentIndex === total - 1 && isAnswered ? `
          <button class="btn-quiz btn-quiz-primary" onclick="finishQuiz()">
            Ver Calificación <i class="fas fa-trophy"></i>
          </button>
        ` : `
          <button class="btn-quiz btn-quiz-primary" 
                  onclick="changeQuestion(1)"
                  ${!isAnswered ? 'disabled' : ''}>
            Siguiente <i class="fas fa-arrow-right"></i>
          </button>
        `}
      </div>
    </div>
  `;

  // Render LaTeX si existe MathJax
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([qContainer]).catch(() => {});
  }
}

function handleOptionSelect(optionIdx) {
  const quiz = AppState.activeQuiz;
  if (quiz.userAnswers.hasOwnProperty(quiz.currentIndex)) return;

  const currentQ = quiz.questions[quiz.currentIndex];
  const correctIndex = (currentQ.correct !== undefined) ? currentQ.correct : currentQ.correcta;
  quiz.userAnswers[quiz.currentIndex] = optionIdx;

  if (optionIdx === correctIndex) {
    quiz.score++;
    SoundManager.playCorrect();
  } else {
    SoundManager.playIncorrect();
  }

  renderQuizUI();
}

function changeQuestion(delta) {
  const quiz = AppState.activeQuiz;
  quiz.currentIndex = Math.max(0, Math.min(quiz.questions.length - 1, quiz.currentIndex + delta));
  renderQuizUI();
}

function finishQuiz() {
  const quiz = AppState.activeQuiz;
  quiz.isSubmitted = true;
  const total = quiz.questions.length;
  const percentage = Math.round((quiz.score / total) * 100);

  // Actualizar récord en LocalStorage
  if (!AppState.progress[quiz.chapterId]) AppState.progress[quiz.chapterId] = {};
  const currentBest = AppState.progress[quiz.chapterId].bestScore || 0;
  if (quiz.score > currentBest) {
    AppState.progress[quiz.chapterId].bestScore = quiz.score;
  }
  saveProgress();
  updateGlobalMetrics();

  if (percentage >= 80) {
    SoundManager.playWin();
    triggerConfetti();
  }

  const qContainer = document.getElementById('chapter-quiz-view');
  qContainer.innerHTML = `
    <div class="quiz-container quiz-result-card">
      <div class="result-badge-icon">
        <i class="fas ${percentage >= 70 ? 'fa-award' : 'fa-graduation-cap'}"></i>
      </div>
      <div class="result-percentage">${percentage}%</div>
      <h3 style="margin-bottom: 8px;">${percentage >= 80 ? '¡Excelente Dominio Conceptual!' : (percentage >= 60 ? '¡Buen Trabajo! Casi Listo' : 'Se Requiere Repasar las Lecturas')}</h3>
      <p class="result-msg">
        Has respondido correctamente <strong>${quiz.score}</strong> de un total de <strong>${total}</strong> preguntas del cuestionario.
      </p>

      <div class="result-stats-row">
        <div class="result-stat-box">
          <h5 style="color: var(--accent-emerald);">${quiz.score}</h5>
          <span>Aciertos</span>
        </div>
        <div class="result-stat-box">
          <h5 style="color: var(--accent-rose);">${total - quiz.score}</h5>
          <span>Errores</span>
        </div>
        <div class="result-stat-box">
          <h5 style="color: var(--accent-cyan);">${percentage}%</h5>
          <span>Eficacia</span>
        </div>
      </div>

      <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
        <button class="btn-quiz btn-quiz-primary" onclick="startChapterQuiz(STUDY_DATA.chapters.find(c => c.id === '${quiz.chapterId}'))">
          <i class="fas fa-redo"></i> Reintentar Cuestionario
        </button>
        <button class="btn-quiz btn-quiz-secondary" onclick="loadChapter('${quiz.chapterId}', 'reading')">
          <i class="fas fa-book-reader"></i> Volver a la Lectura
        </button>
        <button class="btn-quiz btn-quiz-secondary" onclick="navigateTo('dashboard')">
          <i class="fas fa-home"></i> Ir al Tablero
        </button>
      </div>
    </div>
  `;
}

// ==========================================================================
// BANCO MAESTRO DE PREGUNTAS (148 REACTIVOS)
// ==========================================================================

function renderMasterBankUI() {
  const container = document.getElementById('master-questions-container');
  const emptyState = document.getElementById('master-empty-state');
  if (!container) return;

  const questions = STUDY_DATA.masterQuestions || [];
  const filter = AppState.masterBank.currentFilter;
  const search = AppState.masterBank.currentSearch.toLowerCase();

  const filtered = questions.filter(q => {
    const matchMod = (filter === 'all') || (q.modulo.toString() === filter);
    const enunciado = (q.enunciado || q.question || '').toLowerCase();
    const fundam = (q.fundamentacion || q.explanation || '').toLowerCase();
    const opts = (q.opciones || q.options || []).join(' ').toLowerCase();
    const matchSearch = (search === '') || enunciado.includes(search) || fundam.includes(search) || opts.includes(search);
    return matchMod && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    updateMasterStats();
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  container.innerHTML = filtered.map(q => {
    const isAnswered = AppState.masterBank.userAnswers.hasOwnProperty(q.id);
    const selectedOpt = AppState.masterBank.userAnswers[q.id];
    const isRevealed = AppState.masterBank.revealedAnswers[q.id] || AppState.masterBank.areAllRevealed;
    const correctIdx = (q.correcta !== undefined) ? q.correcta : q.correct;
    const isCorrect = isAnswered && selectedOpt === correctIdx;

    const enunciado = q.enunciado || q.question;
    const opciones = q.opciones || q.options || [];
    const resumen = q.resumen || opciones[correctIdx];
    const fundam = q.fundamentacion || q.explanation;

    return `
      <div class="master-question-card" id="mq-card-${q.id}">
        <div class="mq-header">
          <span class="mq-module-badge">${q.moduloNombre}</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="mq-num">Reactivo #${q.id}</span>
            ${isAnswered ? `
              <span class="nav-badge" style="background: ${isCorrect ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)'}; color: ${isCorrect ? '#34d399' : '#fb7185'};">
                ${isCorrect ? '✓ Correcto' : '✗ Incorrecto'}
              </span>
            ` : ''}
          </div>
        </div>

        <h3 class="mq-title">${enunciado}</h3>

        <ul class="options-list">
          ${opciones.map((opt, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx);
            let stateClass = '';
            if (isAnswered || isRevealed) {
              if (optIdx === correctIdx) stateClass = 'correct';
              else if (selectedOpt === optIdx && !isCorrect) stateClass = 'incorrect';
            } else if (selectedOpt === optIdx) {
              stateClass = 'selected';
            }

            return `
              <li>
                <button class="option-btn ${stateClass}" 
                        onclick="selectMasterOption(${q.id}, ${optIdx})"
                        ${isAnswered || isRevealed ? 'disabled' : ''}>
                  <span class="option-letter">${letter}</span>
                  <span class="option-text">${opt}</span>
                </button>
              </li>
            `;
          }).join('')}
        </ul>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--border-subtle);">
          <button class="btn-card" onclick="toggleMasterArgument(${q.id})" style="font-size: 0.82rem;">
            <i class="fas ${isRevealed ? 'fa-eye-slash' : 'fa-info-circle'}"></i>
            <span>${isRevealed ? 'Ocultar Argumentación' : 'Ver Argumentación Técnica'}</span>
          </button>

          ${isAnswered ? `
            <button class="btn-card" onclick="clearMasterAnswer(${q.id})" style="font-size: 0.82rem; color: var(--text-dim);">
              <i class="fas fa-undo"></i> Reintentar
            </button>
          ` : ''}
        </div>

        <!-- Argumentación Desplegable -->
        <div class="argument-details-box" id="mq-arg-${q.id}" style="display: ${isRevealed ? 'block' : 'none'};">
          <div class="arg-correct-label">
            <i class="fas fa-check-circle"></i>
            <span>Respuesta Correcta: ${resumen}</span>
          </div>
          <div class="arg-text mathjax-container">
            <strong>Fundamentación Técnica y Financiera:</strong><br>
            ${fundam}
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateMasterStats();

  // Renderizar fórmulas MathJax
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([container]).catch(() => {});
  }
}

function selectMasterOption(qId, optIdx) {
  if (AppState.masterBank.userAnswers.hasOwnProperty(qId)) return;

  const questions = STUDY_DATA.masterQuestions || [];
  const q = questions.find(item => item.id === qId);
  if (!q) return;

  const correctIdx = (q.correcta !== undefined) ? q.correcta : q.correct;
  AppState.masterBank.userAnswers[qId] = optIdx;
  AppState.masterBank.revealedAnswers[qId] = true;

  localStorage.setItem('study_master_answers', JSON.stringify(AppState.masterBank.userAnswers));

  const isCorrect = optIdx === correctIdx;
  if (isCorrect) {
    SoundManager.playCorrect();
    showToast('¡Respuesta Correcta!', 'check-circle', '#34d399');
  } else {
    SoundManager.playIncorrect();
    showToast('Respuesta Incorrecta. Revisa el fundamento.', 'times-circle', '#fb7185');
  }

  renderMasterBankUI();
}

function toggleMasterArgument(qId) {
  AppState.masterBank.revealedAnswers[qId] = !AppState.masterBank.revealedAnswers[qId];
  const argEl = document.getElementById(`mq-arg-${qId}`);
  if (argEl) {
    argEl.style.display = AppState.masterBank.revealedAnswers[qId] ? 'block' : 'none';
  }
}

function clearMasterAnswer(qId) {
  delete AppState.masterBank.userAnswers[qId];
  AppState.masterBank.revealedAnswers[qId] = false;
  localStorage.setItem('study_master_answers', JSON.stringify(AppState.masterBank.userAnswers));
  renderMasterBankUI();
}

function promptPasswordMaster() {
  if (AppState.masterBank.areAllRevealed) {
    AppState.masterBank.areAllRevealed = false;
    document.getElementById('txt-master-toggle-all').textContent = 'Revelar Respuestas';
    showToast('Respuestas ocultadas', 'eye-slash', '#94a3b8');
    renderMasterBankUI();
    return;
  }

  const pass = prompt('Ingresa la contraseña para revelar todas las respuestas (o presiona Aceptar para continuar):', 'profesor123');
  if (pass === 'profesor123' || pass === '') {
    AppState.masterBank.areAllRevealed = true;
    document.getElementById('txt-master-toggle-all').textContent = 'Ocultar Respuestas';
    showToast('Todas las respuestas han sido reveladas', 'check-circle', '#34d399');
    renderMasterBankUI();
  } else if (pass !== null) {
    showToast('Contraseña incorrecta', 'exclamation-circle', '#f59e0b');
  }
}

function resetMasterQuiz() {
  if (confirm('¿Deseas reiniciar las respuestas del Banco Maestro?')) {
    AppState.masterBank.userAnswers = {};
    AppState.masterBank.revealedAnswers = {};
    AppState.masterBank.areAllRevealed = false;
    localStorage.removeItem('study_master_answers');
    document.getElementById('txt-master-toggle-all').textContent = 'Revelar Respuestas';
    renderMasterBankUI();
    showToast('Banco de preguntas reiniciado a cero', 'redo', '#38bdf8');
  }
}

function filterMasterModule(mod) {
  AppState.masterBank.currentFilter = mod;
  document.querySelectorAll('#master-filter-pills .pill-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mod === mod);
  });
  renderMasterBankUI();
}

function handleMasterSearch(query) {
  AppState.masterBank.currentSearch = query.trim();
  renderMasterBankUI();
}

function resetMasterFilters() {
  const searchInput = document.getElementById('master-search-input');
  if (searchInput) searchInput.value = '';
  AppState.masterBank.currentSearch = '';
  filterMasterModule('all');
}

function updateMasterStats() {
  const questions = STUDY_DATA.masterQuestions || [];
  const total = questions.length;
  let correct = 0;
  let wrong = 0;
  let answered = 0;

  questions.forEach(q => {
    if (AppState.masterBank.userAnswers.hasOwnProperty(q.id)) {
      answered++;
      const userSel = AppState.masterBank.userAnswers[q.id];
      const correctIdx = (q.correcta !== undefined) ? q.correcta : q.correct;
      if (userSel === correctIdx) correct++;
      else wrong++;
    }
  });

  const percent = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const progressPercent = total > 0 ? Math.round((answered / total) * 100) : 0;

  const totalEl = document.getElementById('master-stat-total');
  const answeredEl = document.getElementById('master-stat-answered');
  const correctEl = document.getElementById('master-stat-correct');
  const wrongEl = document.getElementById('master-stat-wrong');
  const percentEl = document.getElementById('master-stat-percent');
  const barEl = document.getElementById('master-progress-fill');

  if (totalEl) totalEl.textContent = total;
  if (answeredEl) answeredEl.textContent = answered;
  if (correctEl) correctEl.textContent = correct;
  if (wrongEl) wrongEl.textContent = wrong;
  if (percentEl) percentEl.textContent = `${percent}%`;
  if (barEl) barEl.style.width = `${progressPercent}%`;
}

// ==========================================================================
// SIMULADOR GLOBAL DE EXAMEN (Muestra 20 de los 148 reactivos)
// ==========================================================================

function startGlobalQuiz() {
  navigateTo('global-quiz');

  const pool = STUDY_DATA.masterQuestions || [];
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 20);

  AppState.activeQuiz = {
    chapterId: 'global',
    questions: selected,
    currentIndex: 0,
    userAnswers: {},
    isSubmitted: false,
    score: 0,
    isGlobal: true,
    timerSeconds: 20 * 60 // 20 minutos
  };

  renderGlobalQuizUI();
  startGlobalTimer();
}

function renderGlobalQuizUI() {
  const container = document.getElementById('global-quiz-container');
  if (!container) return;

  const quiz = AppState.activeQuiz;
  const currentQ = quiz.questions[quiz.currentIndex];
  if (!currentQ) return;

  const total = quiz.questions.length;
  const progressPercent = ((quiz.currentIndex + 1) / total) * 100;
  const isAnswered = quiz.userAnswers.hasOwnProperty(quiz.currentIndex);
  const selectedIndex = quiz.userAnswers[quiz.currentIndex];

  const promptText = currentQ.question || currentQ.enunciado;
  const optList = currentQ.options || currentQ.opciones || [];
  const correctIndex = (currentQ.correct !== undefined) ? currentQ.correct : currentQ.correcta;
  const explainText = currentQ.explanation || currentQ.fundamentacion || currentQ.resumen;

  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header-bar">
        <div class="quiz-progress-info">
          <span class="quiz-badge" style="background: rgba(236, 72, 153, 0.2); color: var(--accent-pink);">
            Examen Global: Pregunta ${quiz.currentIndex + 1} / ${total}
          </span>
          <span class="progress-text" id="global-timer-display"><i class="fas fa-clock"></i> 20:00</span>
        </div>
        <div>
          <button class="btn-card" onclick="cancelGlobalQuiz()">Salir del Examen</button>
        </div>
      </div>

      <div class="quiz-track-bar">
        <div class="quiz-track-fill" style="width: ${progressPercent}%; background: var(--grad-accent);"></div>
      </div>

      <div class="question-box">
        <div style="font-size: 0.8rem; color: var(--accent-cyan); margin-bottom: 6px;">${currentQ.moduloNombre}</div>
        <h3 class="question-prompt">${promptText}</h3>
        <ul class="options-list">
          ${optList.map((opt, optIdx) => {
            const letter = String.fromCharCode(65 + optIdx);
            let stateClass = '';
            if (isAnswered) {
              if (optIdx === correctIndex) stateClass = 'correct';
              else if (optIdx === selectedIndex) stateClass = 'incorrect';
            } else if (selectedIndex === optIdx) {
              stateClass = 'selected';
            }

            return `
              <li>
                <button class="option-btn ${stateClass}" 
                        onclick="handleGlobalOptionSelect(${optIdx})"
                        ${isAnswered ? 'disabled' : ''}>
                  <span class="option-letter">${letter}</span>
                  <span class="option-text">${opt}</span>
                </button>
              </li>
            `;
          }).join('')}
        </ul>

        <div class="feedback-box ${isAnswered ? (selectedIndex === correctIndex ? 'correct' : 'incorrect') : ''}" 
             style="display: ${isAnswered ? 'block' : 'none'};">
          <div class="feedback-title">
            <i class="fas ${selectedIndex === correctIndex ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            ${selectedIndex === correctIndex ? '¡Correcto!' : 'Respuesta Incorrecta'}
          </div>
          <div class="feedback-explanation mathjax-container">
            <strong>Explicación:</strong> ${explainText}
          </div>
        </div>
      </div>

      <div class="quiz-actions-footer">
        <button class="btn-quiz btn-quiz-secondary" 
                onclick="changeGlobalQuestion(-1)" 
                ${quiz.currentIndex === 0 ? 'disabled' : ''}>
          <i class="fas fa-arrow-left"></i> Anterior
        </button>

        ${quiz.currentIndex === total - 1 && isAnswered ? `
          <button class="btn-quiz btn-quiz-primary" onclick="finishGlobalQuiz()">
            Finalizar y Evaluar <i class="fas fa-certificate"></i>
          </button>
        ` : `
          <button class="btn-quiz btn-quiz-primary" 
                  onclick="changeGlobalQuestion(1)"
                  ${!isAnswered ? 'disabled' : ''}>
            Siguiente <i class="fas fa-arrow-right"></i>
          </button>
        `}
      </div>
    </div>
  `;

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([container]).catch(() => {});
  }
}

function handleGlobalOptionSelect(optIdx) {
  const quiz = AppState.activeQuiz;
  if (quiz.userAnswers.hasOwnProperty(quiz.currentIndex)) return;

  const currentQ = quiz.questions[quiz.currentIndex];
  const correctIndex = (currentQ.correct !== undefined) ? currentQ.correct : currentQ.correcta;
  quiz.userAnswers[quiz.currentIndex] = optIdx;

  if (optIdx === correctIndex) {
    quiz.score++;
    SoundManager.playCorrect();
  } else {
    SoundManager.playIncorrect();
  }

  renderGlobalQuizUI();
}

function changeGlobalQuestion(delta) {
  const quiz = AppState.activeQuiz;
  quiz.currentIndex = Math.max(0, Math.min(quiz.questions.length - 1, quiz.currentIndex + delta));
  renderGlobalQuizUI();
}

function startGlobalTimer() {
  if (AppState.activeQuiz.timerInterval) clearInterval(AppState.activeQuiz.timerInterval);
  AppState.activeQuiz.timerInterval = setInterval(() => {
    if (AppState.activeQuiz.timerSeconds <= 0) {
      clearInterval(AppState.activeQuiz.timerInterval);
      finishGlobalQuiz();
      return;
    }
    AppState.activeQuiz.timerSeconds--;
    const mins = Math.floor(AppState.activeQuiz.timerSeconds / 60);
    const secs = AppState.activeQuiz.timerSeconds % 60;
    const display = document.getElementById('global-timer-display');
    if (display) {
      display.innerHTML = `<i class="fas fa-clock"></i> ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  }, 1000);
}

function cancelGlobalQuiz() {
  if (AppState.activeQuiz.timerInterval) clearInterval(AppState.activeQuiz.timerInterval);
  navigateTo('dashboard');
}

function finishGlobalQuiz() {
  if (AppState.activeQuiz.timerInterval) clearInterval(AppState.activeQuiz.timerInterval);
  const quiz = AppState.activeQuiz;
  const total = quiz.questions.length;
  const percentage = Math.round((quiz.score / total) * 100);

  if (percentage >= 80) {
    SoundManager.playWin();
    triggerConfetti();
  }

  const container = document.getElementById('global-quiz-container');
  container.innerHTML = `
    <div class="quiz-container quiz-result-card">
      <div class="result-badge-icon" style="background: var(--grad-accent);">
        <i class="fas fa-certificate"></i>
      </div>
      <div class="result-percentage">${percentage}%</div>
      <h3>Certificado de Evaluación: Gabriel Baca Urbina</h3>
      <p class="result-msg">
        Examen Global de 20 Reactivos Aleatorios completado en los módulos de Mercado, Técnico, Económico, Fundamentos e Impacto Social.
      </p>

      <div class="result-stats-row">
        <div class="result-stat-box">
          <h5 style="color: var(--accent-emerald);">${quiz.score}</h5>
          <span>Aciertos</span>
        </div>
        <div class="result-stat-box">
          <h5 style="color: var(--accent-rose);">${total - quiz.score}</h5>
          <span>Errores</span>
        </div>
        <div class="result-stat-box">
          <h5 style="color: var(--accent-pink);">${percentage}%</h5>
          <span>Calificación Final</span>
        </div>
      </div>

      <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
        <button class="btn-quiz btn-quiz-primary" onclick="startGlobalQuiz()">
          <i class="fas fa-redo"></i> Intentar Nuevo Examen
        </button>
        <button class="btn-quiz btn-quiz-secondary" onclick="navigateTo('master-bank')">
          <i class="fas fa-tasks"></i> Ir al Banco Maestro (148Q)
        </button>
        <button class="btn-quiz btn-quiz-secondary" onclick="navigateTo('dashboard')">
          <i class="fas fa-home"></i> Volver al Tablero
        </button>
      </div>
    </div>
  `;
}

// ==========================================================================
// Laboratorio de Herramientas Interactivas y Calculadoras
// ==========================================================================

function initBreakEvenCalculator() {
  const cfInput = document.getElementById('be-cf');
  const pInput = document.getElementById('be-p');
  const cvInput = document.getElementById('be-cv');

  if (!cfInput || !pInput || !cvInput) return;

  const update = () => {
    const cf = parseFloat(cfInput.value) || 0;
    const p = parseFloat(pInput.value) || 0;
    const cv = parseFloat(cvInput.value) || 0;

    const margin = p - cv;
    const q = margin > 0 ? (cf / margin) : 0;
    const sales = q * p;

    const marginEl = document.getElementById('be-margin-result');
    const qEl = document.getElementById('be-q-result');
    const salesEl = document.getElementById('be-sales-result');

    if (marginEl) marginEl.textContent = '$' + margin.toFixed(2);
    if (qEl) qEl.textContent = Math.round(q).toLocaleString() + ' uds';
    if (salesEl) salesEl.textContent = '$' + Math.round(sales).toLocaleString();

    drawBreakEvenChart(cf, p, cv, q);
  };

  cfInput.addEventListener('input', update);
  pInput.addEventListener('input', update);
  cvInput.addEventListener('input', update);
  update();
}

function drawBreakEvenChart(cf, p, cv, beQ) {
  const canvas = document.getElementById('be-canvas');
  if (!canvas || !canvas.parentElement) return;
  const ctx = canvas.getContext('2d');
  
  canvas.width = canvas.parentElement.clientWidth || 300;
  canvas.height = 240;

  const width = canvas.width;
  const height = canvas.height;
  const padding = 45;

  ctx.clearRect(0, 0, width, height);

  const maxQ = Math.max(beQ * 2, 1000);
  const maxCost = (cf + cv * maxQ) * 1.15;

  const scaleX = (q) => padding + (q / maxQ) * (width - padding * 2);
  const scaleY = (val) => height - padding - (val / maxCost) * (height - padding * 2);

  // Ejes
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, height - padding);
  ctx.lineTo(width - padding / 2, height - padding);
  ctx.moveTo(padding, height - padding);
  ctx.lineTo(padding, padding / 2);
  ctx.stroke();

  // Línea Costos Fijos (Horizontal)
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(scaleX(0), scaleY(cf));
  ctx.lineTo(scaleX(maxQ), scaleY(cf));
  ctx.stroke();
  ctx.setLineDash([]);

  // Línea Costos Totales (CF + CV * Q)
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(scaleX(0), scaleY(cf));
  ctx.lineTo(scaleX(maxQ), scaleY(cf + cv * maxQ));
  ctx.stroke();

  // Línea Ingresos Totales (P * Q)
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(scaleX(0), scaleY(0));
  ctx.lineTo(scaleX(maxQ), scaleY(p * maxQ));
  ctx.stroke();

  // Punto de Equilibrio
  if (beQ > 0 && beQ < maxQ) {
    const ptX = scaleX(beQ);
    const ptY = scaleY(p * beQ);

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(ptX, ptY, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px Inter';
    ctx.fillText(`PE: ${Math.round(beQ)} uds`, ptX - 35, ptY - 14);
  }

  // Leyenda
  ctx.font = '10px Inter';
  ctx.fillStyle = '#10b981';
  ctx.fillText('Ingresos', width - 80, scaleY(p * maxQ) - 4);
  ctx.fillStyle = '#ef4444';
  ctx.fillText('Costos', width - 80, scaleY(cf + cv * maxQ) + 14);
}

function initSampleCalculator() {
  const zSelect = document.getElementById('sample-z');
  const sigmaInput = document.getElementById('sample-sigma');
  const errorInput = document.getElementById('sample-e');

  if (!zSelect || !sigmaInput || !errorInput) return;

  const update = () => {
    const z = parseFloat(zSelect.value) || 1.96;
    const sigma = parseFloat(sigmaInput.value) || 0.52;
    const e = parseFloat(errorInput.value) || 0.05;

    if (e > 0) {
      const n = (Math.pow(sigma, 2) * Math.pow(z, 2)) / Math.pow(e, 2);
      const resEl = document.getElementById('sample-n-result');
      if (resEl) resEl.textContent = Math.ceil(n).toLocaleString() + ' encuestas';
    }
  };

  zSelect.addEventListener('change', update);
  sigmaInput.addEventListener('input', update);
  errorInput.addEventListener('input', update);
  update();
}

function initTMARCalculator() {
  const iInput = document.getElementById('tmar-i');
  const fInput = document.getElementById('tmar-f');

  if (!iInput || !fInput) return;

  const update = () => {
    const i = (parseFloat(iInput.value) || 0) / 100;
    const f = (parseFloat(fInput.value) || 0) / 100;

    const tmar = i + f + (i * f);
    const resEl = document.getElementById('tmar-result');
    if (resEl) resEl.textContent = (tmar * 100).toFixed(2) + '%';
  };

  iInput.addEventListener('input', update);
  fInput.addEventListener('input', update);
  update();
}

// ==========================================================================
// Flashcards Interactivas
// ==========================================================================

function renderFlashcards() {
  const container = document.getElementById('flashcards-container');
  if (!container) return;

  container.innerHTML = (STUDY_DATA.flashcards || []).map(card => `
    <div class="flashcard" onclick="this.classList.toggle('flipped')">
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <span class="card-tag">${card.chapter}</span>
          <h4>${card.term}</h4>
          <span class="flashcard-hint"><i class="fas fa-hand-pointer"></i> Haz clic para ver definición</span>
        </div>
        <div class="flashcard-back">
          <p>${card.def}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Toast Notificaciones
function showToast(message, iconName = 'check-circle', iconColor = '#34d399') {
  const toast = document.getElementById('app-toast');
  const toastText = document.getElementById('toast-text');
  const toastIcon = document.getElementById('toast-icon');

  if (!toast || !toastText) return;

  toastText.textContent = message;
  if (toastIcon) {
    toastIcon.className = `fas fa-${iconName}`;
    toastIcon.style.color = iconColor;
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Guardado y Actualización de Métricas Globales
function saveProgress() {
  localStorage.setItem('study_progress', JSON.stringify(AppState.progress));
}

function updateGlobalMetrics() {
  let totalRead = 0;
  let totalScore = 0;
  const totalMaster = (STUDY_DATA.masterQuestions || []).length;

  (STUDY_DATA.chapters || []).forEach(chap => {
    const p = AppState.progress[chap.id];
    if (p && p.read) totalRead++;
    if (p && p.bestScore) totalScore += p.bestScore;
  });

  // Sumar también respondidas correctas en Master Bank
  let masterCorrect = 0;
  const masterAnswers = AppState.masterBank.userAnswers || {};
  (STUDY_DATA.masterQuestions || []).forEach(q => {
    const correctIdx = (q.correcta !== undefined) ? q.correcta : q.correct;
    if (masterAnswers[q.id] === correctIdx) masterCorrect++;
  });

  const percentGlobal = totalMaster > 0 ? Math.round((masterCorrect / totalMaster) * 100) : 0;

  const metricRead = document.getElementById('metric-read-count');
  const metricScore = document.getElementById('metric-avg-score');
  const metricQCount = document.getElementById('metric-q-count');
  const progressFill = document.getElementById('sidebar-progress-fill');
  const progressText = document.getElementById('sidebar-progress-text');

  if (metricRead) metricRead.textContent = `${totalRead} / ${STUDY_DATA.chapters.length}`;
  if (metricScore) metricScore.textContent = `${percentGlobal}%`;
  if (metricQCount) metricQCount.textContent = `${masterCorrect} / ${totalMaster}`;
  if (progressFill) progressFill.style.width = `${percentGlobal}%`;
  if (progressText) progressText.textContent = `${percentGlobal}% Dominado`;
}

// Efecto de Confeti Celebratorio en Canvas
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    size: Math.random() * 8 + 4,
    color: ['#38bdf8', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899'][Math.floor(Math.random() * 5)],
    speedY: Math.random() * 4 + 2,
    speedX: (Math.random() - 0.5) * 3,
    rotation: Math.random() * 360
  }));

  let frames = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += 2;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    frames++;
    if (frames < 140) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  animate();
}

// Exportar funciones globales para acceso desde atributos onclick del DOM
window.loadChapter = loadChapter;
window.startChapterQuiz = startChapterQuiz;
window.handleOptionSelect = handleOptionSelect;
window.changeQuestion = changeQuestion;
window.finishQuiz = finishQuiz;
window.startGlobalQuiz = startGlobalQuiz;
window.handleGlobalOptionSelect = handleGlobalOptionSelect;
window.changeGlobalQuestion = changeGlobalQuestion;
window.cancelGlobalQuiz = cancelGlobalQuiz;
window.finishGlobalQuiz = finishGlobalQuiz;
window.selectMasterOption = selectMasterOption;
window.toggleMasterArgument = toggleMasterArgument;
window.clearMasterAnswer = clearMasterAnswer;
window.promptPasswordMaster = promptPasswordMaster;
window.resetMasterQuiz = resetMasterQuiz;
window.filterMasterModule = filterMasterModule;
window.handleMasterSearch = handleMasterSearch;
window.resetMasterFilters = resetMasterFilters;
window.navigateTo = navigateTo;
