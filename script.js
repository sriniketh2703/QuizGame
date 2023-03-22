"use strict";

const questionDOM = document.querySelector(".question");
const options_container = document.querySelector(".options-container");
const score = document.querySelector(".score");

const questions = [
  {
    ques: "What is the Biggest planet in our Solar System?",
    answer: [
      { text: "Neptune" },
      { text: "Earth" },
      { text: "Jupiter" },
      { text: "Saturn" },
    ],
    rightAnswer: "Jupiter",
  },
  {
    ques: "In which year Pluto was declared as dwarf planet?",
    answer: [
      { text: "2003" },
      { text: "2006" },
      { text: "1997" },
      { text: "1987" },
    ],
    rightAnswer: "2006",
  },
  {
    ques: "Halley's comet visits the Earth after every?",
    answer: [
      { text: "76 years" },
      { text: "80 years" },
      { text: "28 years" },
      { text: "98 years" },
    ],
    rightAnswer: "76 years",
  },
  {
    ques: "Which planet is named after the Roman god of war??",
    answer: [
      { text: "Saturn" },
      { text: "Venus" },
      { text: "Mars" },
      { text: "Mercury" },
    ],
    rightAnswer: "Mars",
  },
  {
    ques: "Which is the Biggest star in the Universe?",
    answer: [
      { text: "Mira A" },
      { text: "UY Scuti" },
      { text: "Betelguese" },
      { text: "Stephenson 2-18" },
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
