const questions = [
    {
      question: 'What is the capital of Ireland?',
      options: ['London', 'Dublin', 'Belfast', 'Cork'],
      correctIndex: 1
    },
    
    {
        question: 'What is the national symbol of Ireland?',
        options: ['Shamrock', 'Ivy', 'Marigold', 'Peony'],
        correctIndex: 0
      },

      {
        question: 'What is the Irish name for Ireland?',
        options: ['Slain', 'Eire', 'Craic', 'Dail'],
        correctIndex: 1
      },

      {
        question: 'What Instrument can you find on the Guinness logo?',
        options: ['Flute', 'Guitar', 'Harp', 'Drums'],
        correctIndex: 2
      },

      {
        question: 'Which famous Irish writer is know fo the novel "The picture of Dorian Gray"?',
        options: ['Oscar Wilde', 'Jonathan Swift', 'James Joyce', 'Iris Murdoch'],
        correctIndex: 0
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
        nextQuestion()
  }

  function nextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const answerButtons = document.getElementById('answer-button');
    
    questionText.innerHTML ="";
    answerButtons.innerHTML ="";

    incrementQuestionNumber();

    questionText.innerHTML = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add('button-style');
        answerButtons.appendChild(button);

        button.addEventListener('click', function() {checkAnswer(option);

        })
    });
}

  function selectAnswer() {



  }