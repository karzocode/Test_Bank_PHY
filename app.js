const container = document.getElementById("assignmentsContainer");
const nav = document.getElementById("sectionsNav");

// Use sessionStorage instead of localStorage so answers persist only during session
// Clear on refresh by checking for page reload
if (performance.navigation.type === 1 || performance.getEntriesByType("navigation")[0]?.type === "reload") {
  // Clear sessionStorage on refresh
  assignments.forEach(a => {
    a.questions.forEach(q => {
      sessionStorage.removeItem(`a${a.id}q${q.id}`);
    });
  });
}

// Create navigation buttons
assignments.forEach((a, index) => {
  const btn = document.createElement("button");
  btn.textContent = a.title.toUpperCase();
  if(index === 0) btn.classList.add("active");
  btn.onclick = () => {
    document.getElementById(`a${a.id}`).scrollIntoView({ behavior: 'smooth' });
    // Update active state
    nav.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  };
  nav.appendChild(btn);
});

// Create assignment sections
assignments.forEach(a => {
  const section = document.createElement("section");
  section.className = "assignment";
  section.id = `a${a.id}`;

  section.innerHTML = `
    <div class="assignment-title">${a.title.toUpperCase()}</div>
    <div class="cards"></div>
  `;

  const cards = section.querySelector(".cards");

  a.questions.forEach(q => {
    const saved = sessionStorage.getItem(`a${a.id}q${q.id}`);
    const isAnswered = saved !== null;
    const isCorrect = saved !== null && +saved === q.correct;

    const card = document.createElement("div");
    card.className = "card";
    if(isAnswered) card.classList.add("answered");
    if(isCorrect) card.classList.add("correct-answer");

    card.innerHTML = `
      <div class="card-header">
        <div class="question-label-wrapper">
          <span class="question-label">Q${q.id}</span>
          <div class="progress-indicator">
            <div class="progress-bar" style="width: ${isAnswered ? '100%' : '0%'}"></div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p class="question">${q.text}</p>
        <div class="options">
          ${q.options.map((o,i)=>`
            <button data-i="${i}" class="option-btn">${o}</button>
          `).join("")}
        </div>
      </div>
      <div class="card-footer">
        <div class="actions">
          <button class="translate">Translate</button>
          <button class="explain">Explain</button>
        </div>
        ${isAnswered ? `
          <div class="answer-status">
            <span class="status-icon ${isCorrect ? 'correct-icon' : 'wrong-icon'}">
              ${isCorrect ? '✓' : '✗'}
            </span>
            <span class="status-text">${isCorrect ? 'Correct Answer' : 'Wrong Answer'}</span>
          </div>
        ` : ''}
      </div>
    `;

    const btns = card.querySelectorAll(".options button");
    const questionEl = card.querySelector(".question");
    const progressBar = card.querySelector(".progress-bar");
    const cardFooter = card.querySelector(".card-footer");
    let selectedAnswer = saved !== null ? +saved : null;

    // Function to show answer results
    const showAnswerResult = (selectedIndex) => {
      const isCorrectAnswer = selectedIndex === q.correct;
      
      // Disable all buttons
      btns.forEach(btn => btn.disabled = true);
      
      // Mark selected answer
      btns.forEach(btn => {
        const btnIndex = +btn.dataset.i;
        
        if(btnIndex === selectedIndex) {
          // User's selected answer
          if(isCorrectAnswer) {
            btn.classList.add("correct");
            card.classList.add("correct-answer");
          } else {
            btn.classList.add("wrong");
          }
        }
        
        // Show correct answer if wrong was selected
        if(!isCorrectAnswer && btnIndex === q.correct) {
          btn.classList.add("show-correct");
        }
      });
      
      // Update progress bar
      if(progressBar) {
        progressBar.style.width = '100%';
      }
      
      // Update card classes
      card.classList.add("answered");
      
      // Show answer status
      const statusHTML = `
        <div class="answer-status">
          <span class="status-icon ${isCorrectAnswer ? 'correct-icon' : 'wrong-icon'}">
            ${isCorrectAnswer ? '✓' : '✗'}
          </span>
          <span class="status-text">${isCorrectAnswer ? 'Correct Answer' : 'Wrong Answer'}</span>
        </div>
      `;
      
      // Remove existing status if any and add new one
      const existingStatus = cardFooter.querySelector(".answer-status");
      if(existingStatus) {
        existingStatus.remove();
      }
      cardFooter.insertAdjacentHTML('beforeend', statusHTML);
    };

    // Show saved answer if exists
    if(isAnswered) {
      showAnswerResult(+saved);
    }

    // Handle button clicks
    btns.forEach(b=>{
      b.onclick = ()=>{
        // Don't allow selection if already answered
        if(b.disabled) return;
        
        const selectedIndex = +b.dataset.i;
        selectedAnswer = selectedIndex;
        
        // Save to sessionStorage
        sessionStorage.setItem(`a${a.id}q${q.id}`, selectedIndex);
        
        // Show result immediately
        showAnswerResult(selectedIndex);
      };
    });

    let isTranslated = false;
    card.querySelector(".translate").onclick = ()=>{
      isTranslated = !isTranslated;
      
      if(isTranslated) {
        // Show Arabic text
        questionEl.textContent = q.translate;
        questionEl.dir = "rtl";
        questionEl.classList.add("arabic");
        
        btns.forEach((b,i)=>{
          const originalOption = q.options[i];
          const translatedOption = q.translateOptions?.[i] || q.options[i];
          b.textContent = isTranslated ? translatedOption : originalOption;
          // Check if the option contains Arabic characters
          if(/[\u0600-\u06FF]/.test(translatedOption)) {
            b.dir = "rtl";
            b.classList.add("arabic");
          } else {
            b.dir = "ltr";
            b.classList.remove("arabic");
          }
        });
      } else {
        // Show English text
        questionEl.textContent = q.text;
        questionEl.dir = "ltr";
        questionEl.classList.remove("arabic");
        
        btns.forEach((b,i)=>{
          b.textContent = q.options[i];
          b.dir = "ltr";
          b.classList.remove("arabic");
        });
      }
    };

    card.querySelector(".explain").onclick = ()=>{
      const explainTextEl = document.getElementById("explainText");
      explainTextEl.textContent = q.explain;
      // Check if explanation contains Arabic characters
      if(/[\u0600-\u06FF]/.test(q.explain)) {
        explainTextEl.dir = "rtl";
        explainTextEl.classList.add("arabic");
      } else {
        explainTextEl.dir = "ltr";
        explainTextEl.classList.remove("arabic");
      }
      document.getElementById("explainModal").style.display = "flex";
    };

    cards.appendChild(card);
  });

  container.appendChild(section);
});

// Close modal
document.getElementById("closeModal").onclick = ()=>{
  document.getElementById("explainModal").style.display = "none";
};

// Close modal when clicking outside
document.getElementById("explainModal").onclick = (e)=>{
  if(e.target.id === "explainModal"){
    document.getElementById("explainModal").style.display = "none";
  }
};

// Reset/Review button functionality - Clear all answers
document.querySelector(".btn-review").onclick = ()=>{
  if(confirm("Are you sure you want to clear all answers? This will reset all questions.")){
    // Clear all sessionStorage items related to answers
    assignments.forEach(a => {
      a.questions.forEach(q => {
        sessionStorage.removeItem(`a${a.id}q${q.id}`);
      });
    });
    // Reload page to reset everything
    location.reload();
  }
};

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");

// Load saved theme or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
if(savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeIcon.textContent = "☀️";
} else {
  themeIcon.textContent = "🌙";
}

themeToggle.onclick = () => {
  const isLight = document.body.classList.contains("light-theme");
  
  if(isLight) {
    // Switch to dark
    document.body.classList.remove("light-theme");
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    // Switch to light
    document.body.classList.add("light-theme");
    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
};
