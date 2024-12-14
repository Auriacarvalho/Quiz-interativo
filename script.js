// Definir as perguntas e respostas
const questions = [
  {
      question: "Qual é a capital do Brasil?",
      options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
      correct: 2
  },
  {
      question: "Qual é a maior montanha do mundo?",
      options: ["Monte Everest", "K2", "Monte Fuji", "Kilimanjaro"],
      correct: 0
  },
  {
      question: "Quem escreveu 'Dom Casmurro'?",
      options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Guimarães Rosa"],
      correct: 0
  },
  {
    question: "Quantos estados tem o Brasil?",
    options: ["25", "26", "27", "28"],
    correct: 1
},
{
    question: "Quem foi o primeiro homem a pisar na Lua?",
    options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
    correct: 0
},
{
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    correct: 2
},
{
    question: "Quantos continentes existem no mundo?",
    options: ["4", "5", "6", "7"],
    correct: 3
},
{
    question: "Qual é o país com a maior população do mundo?",
    options: ["Índia", "Estados Unidos", "China", "Rússia"],
    correct: 2
},
{
    question: "Em que ano começou a Segunda Guerra Mundial?",
    options: ["1935", "1939", "1941", "1945"],
    correct: 1
},
{
    question: "Qual é o elemento químico representado pelo símbolo 'O'?",
    options: ["Ouro", "Ósmio", "Oxigênio", "Osmânio"],
    correct: 2
}
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");

// Função para carregar uma pergunta
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      optionsContainer.appendChild(button);
  });
}

// Função para verificar a resposta
function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  // Verificar se a resposta está correta
  if (selectedIndex === currentQuestion.correct) {
      score++;
  }

  // Desabilitar as opções de resposta
  const buttons = optionsContainer.querySelectorAll("button");
  buttons.forEach(button => button.disabled = true);

  // Mostrar o botão "Próxima"
  nextButton.style.display = "block";
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextButton.style.display = "none";
  } else {
      endQuiz();
  }
}

// Função para finalizar o quiz
function endQuiz() {
  questionContainer.style.display = "none";
  optionsContainer.style.display = "none";
  nextButton.style.display = "none";

  scoreElement.textContent = `Pontuação: ${score} de ${questions.length}`;
  scoreContainer.classList.remove("hidden");
}

// Função para reiniciar o quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.classList.add("hidden");
  questionContainer.style.display = "block";
  optionsContainer.style.display = "block";
  loadQuestion();
  nextButton.style.display = "none";
}

// Carregar a primeira pergunta
loadQuestion();

// Configurar o evento do botão "Próxima"
nextButton.addEventListener("click", nextQuestion);
