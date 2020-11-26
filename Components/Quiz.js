import anime from 'animejs';

const Quiz = {
  
  count: 0,

  questions: [
    {
      number: 0, 
      question: "What does laser stand for?", 
      answer: [
      { correct: false, content: "Long amplitude singular energy reaction" },
      { correct: true, content: "light amplification by stimulated emission of radiation" },
      { correct: false, content: "Low available slow emission of radiation" },
      { correct: false, content: "Low available slow emission of radiation" },
      ]
    },

    {
      number: 1, 
      question: "How many mirrors are found in a basic laser?", 
      answer: [
      { correct: false, content: "One" },
      { correct: true, content: "Two" },
      { correct: false, content: "Three" },
      { correct: false, content: "Four" },
      ]
    },

    {
      number: 2, 
      question: "Which particles absorb the released protons?", 
      answer: [
      { correct: true, content: "Electrons" },
      { correct: false, content: "Neutrons" },
      { correct: false, content: "Protons" },
      { correct: false, content: "Atoms" },
      ]
    },

    {
      number: 3, 
      question: "When photons are all the same wavelength, they are known as being...", 
      answer: [
      { correct: false, content: "Equilateral" },
      { correct: false, content: "Simultaneous" },
      { correct: true, content: "Coherent" },
      { correct: false, content: "In motion" },
      ]
    },

    {
      number: 4, 
      question: "Which of the following are lasers not used in?", 
      answer: [
      { correct: false, content: "Surgery" },
      { correct: false, content: "Spectroscopy" },
      { correct: false, content: "Nuclear Fusion" },
      { correct: true, content: "Gardening" },
      ]
    }

  ],

  init: () => {
    const questionName = document.querySelector("#question");
    const answerBox = document.querySelector(".question-content");
    let currentQuestion = Quiz.questions[`${Quiz.count}`];
    const questionNumber = document.querySelector(".question-number");
    let num = 0;
    questionNumber.innerText = `Question ${currentQuestion.number + 1}`;

    // change question based on quiz.count value
    questionName.innerText = currentQuestion.question;

    currentQuestion.answer.forEach(el => {
      const answerWrapper = document.createElement("div");
      answerWrapper.className = "answer-wrapper";
      const answerBtn = document.createElement("a");
      const border = document.createElement("div");
      border.classList.add("answer-border");
      answerBtn.innerText = el.content;
      answerBtn.classList.add("is-primary", "is-family-primary", "is-outlined", "answer", "is-justify-content-flex-start", "pl-3", "is-size-6");  
      border.appendChild(answerBtn);
      num++;
      const label = document.createElement("label");
      label.classList.add("is-family-primary")
      label.innerText = `${num}.`;
      answerWrapper.appendChild(label);
      answerWrapper.appendChild(border);
      
      answerBtn.addEventListener("click", () => {
        if(el.correct === true && Quiz.count <= 3) {
          answerBtn.classList.add("correct-answer", "has-tooltip-right", "has-tooltip-active", "has-tooltip-success");

          anime({
            targets: answerBtn,
            begin: () => {
              
            },
            complete: () => {

            }
          })
          answerBtn.setAttribute("data-tooltip", "That's correct!");
          answerBtn.style.zIndex = '3';
          answerBox.dim = document.createElement("div");
          answerBox.dim.classList.add("dim");
          answerBox.appendChild(answerBox.dim);
          const nextQuestion = document.createElement("button");
          nextQuestion.classList.add("button", "is-family-primary", "is-size-6", "mt-6" ,"next-btn");
          nextQuestion.style.zIndex = '3';
          nextQuestion.innerText = 'Next Question';
          nextQuestion.addEventListener("click", () => {
            Quiz.count++;
            console.log(currentQuestion.number); 
            answerBox.innerHTML = null;
            Quiz.init();
          });

          answerBox.appendChild(nextQuestion);
        } else if (el.correct === true && Quiz.count === 4){
          const celebration = document.querySelector(".particles-celebration");
          const overlay = document.querySelector(".celebration-overlay");
          questionName.style.display = 'none';
          questionNumber.style.display = 'none';
          answerBox.innerHTML = null;
          answerBox.innerHTML = '<h2>Congratulations!</h2><p>You have completed the quiz</p><p>If you haven\'t already, check out the "build a laser" page!</p>'
/*           const exBtn = document.createElement("button");
          exBtn.classList.add("button");
          exBtn.innerText = '🧪 Experiment'
          exBtn.setAttribute("href", "./experiment.html")
          answerBox.appendChild(exBtn); */
          celebration.classList.add("is-active-celebration");
          overlay.classList.add("is-active-celebration");




        } else {
          answerBtn.classList.add("wrong-answer", "has-tooltip-right", "has-tooltip-active", "has-tooltip-danger");
          answerBtn.setAttribute("data-tooltip", "Not quite, try another answer!");
        }
      })
      
      answerBox.appendChild(answerWrapper);

    })
  }

}

export { Quiz } 