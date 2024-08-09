const questions = [
    {
      question: 'What is the capital of Ireland?',
      options: ['London', 'Dublin', 'Belfast', 'Cork'],
      answer: 'Dublin'
    },
    
    {
        question: 'What is the national symbol of Ireland?',
        options: ['Shamrock', 'Ivy', 'Marigold', 'Peony'],
        answer: 'Shamrock'
      },

      {
        question: 'What is the Irish name for Ireland?',
        options: ['Slain', 'Eire', 'Craic', 'Dail'],
        answer: 'Eire'
      },

      {
        question: 'What Instrument can you find on the Guinness logo?',
        options: ['Flute', 'Guitar', 'Harp', 'Drums'],
        answer: 'Harp'
      },

      {
        question: 'Which famous Irish writer is know fo the novel "The picture of Dorian Gray"?',
        options: ['Oscar Wilde', 'Jonathan Swift', 'James Joyce', 'Iris Murdoch'],
        answer: 'Oscar Wilde'
      },
  ];
/* Event Listener to initiate start of Game when clicked on */
  const startButton = document.getElementById('start-button')
  startButton.addEventListener('click', startGame)

  /* Event Listener for next button */
  const nextButton = document.getElementById('next-button')
  nextButton.addEventListener('click', () => {currentQuestionIndex++})

/* landing and quiz container variables */
  const questionContainer = document.getElementById('question-board')
  const landingContainer = document.getElementById('landing')
  

  let currentQuestionIndex = 0;
  let Score = 0;

/* When clicked on start button the question area will show up */
  function startGame() {
    landingContainer.classList.add('hide')
        questionContainer.classList.remove('hide')
        showQuestion()
  }
 /* Show question by displaying the first question of the array */
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question-text')
    questionElement.innerHTML = currentQuestion.question

    /* Display answer buttons */
    const answerButtons = document.getElementById('answer-button')
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('answer-grid');
      answerButtons.appendChild(button);

      /* Event Listener for answer button */
      button.addEventListener('click', function() {selectAnswer(option);      

      });
    });
  }
    

    function selectAnswer(button) {
      if (button.innerText === question.answer) {
        button.classList.add('correct');
      } else {
        button.classList.add('wrong');

      }
      }

