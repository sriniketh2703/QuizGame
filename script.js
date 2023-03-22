"use strict";

const questionDOM = document.querySelector(".question");
const options_container = document.querySelector(".options-container");
const score = document.querySelector(".score");

const questions = [
  {
    ques: "What is the Biggest planet in our Solar System?",
    answer: [
      { text: "Neptune", correct: false },
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
    ],
    rightAnswer: "Jupiter",
  },
  {
    ques: "In which year Pluto was declared as dwarf planet?",
    answer: [
      { text: "2003", correct: false },
      { text: "2006", correct: true },
      { text: "1997", correct: false },
      { text: "1987", correct: false },
    ],
    rightAnswer: "2006",
  },
  {
    ques: "Halley's comet visits the Earth after every?",
    answer: [
      { text: "76 years", correct: true },
      { text: "80 years", correct: false },
      { text: "28 years", correct: false },
      { text: "98 years", correct: false },
    ],
    rightAnswer: "76 years",
  },
  {
    ques: "Which planet is named after the Roman god of war??",
    answer: [
      { text: "Saturn", correct: false },
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Mercury", correct: false },
    ],
    rightAnswer: "Mars",
  },
  {
    ques: "Which is the Biggest star in the Universe?",
    answer: [
      { text: "Mira A", correct: false },
      { text: "UY Scuti", correct: false },
      { text: "Betelguese", correct: false },
      { text: "Stephenson 2-18", correct: true },
    ],
    rightAnswer: "Stephenson 2-18",
  },
];

let shuffleQuestions, currentIndex;
shuffleQuestions = questions.sort(() => Math.random() - 0.5);
currentIndex = 0;
let scoreCard = 0;

questionDOM.textContent = shuffleQuestions[currentIndex].ques;

shuffleQuestions[currentIndex].answer.forEach((element) => {
  let option = document.createElement("div");
  option.classList.add("option");
  option.innerText = element.text;
  options_container.appendChild(option);
  option.addEventListener("click", (e) => {
    checkAnswer(e);
    setNextQuestion();
  });
});

const setNextQuestion = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    questionDOM.innerText = shuffleQuestions[currentIndex].ques;
    setNextOptions();
  } else {
    score.classList.add("big");
  }
};

const setNextOptions = () => {
  [...options_container.children].forEach((element, i) => {
    element.innerText = shuffleQuestions[currentIndex].answer[i].text;
  });
};

const checkAnswer = (option) => {
  if (option.target.innerText === shuffleQuestions[currentIndex].rightAnswer) {
    scoreCard++;
    score.innerText = `Score: ${scoreCard} / 5`;
  }
};
