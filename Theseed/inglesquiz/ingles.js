import React, {
useRef,
useState,
useEffect } from
"https://cdn.skypack.dev/react";
import { render } from "https://cdn.skypack.dev/react-dom";

import gsap from "https://cdn.skypack.dev/gsap";

const questions = [
{
  id: 0,
  text: "Pregunta 1",
  answers: ["Opción A","Opción B","Opción C"],
  correct: 1,
  selection: null },

{
  id: 1,
  text:
  "Pregunta 2",
  answers: ["Opción A","Opción B","Opción C"],
  correct: 0,
  selection: null },

{
  id: 2,
  text: "Pregunta 3",
  answers: ["Opción A","Opción B","Opción C"],
  correct: 2,
  selection: null },

{
  id: 3,
  text: "Pregunta 4",
  answers: ["Opción A","Opción B","Opción C"],
  correct: 0,
  selection: null },

{
  id: 4,
  text: "Pregunta 5",
  answers: ["Opción A","Opción B","Opción C"],
  correct: 1,
  selection: null },

{
  id: 5,
  text: "Pregunta 6",
  answers: ["Opción A","Opción B","Opción C"],
  correct: 0,
  selection: null },

{
  id: 6,
  text:
  "Pregunta 7",
  answers: ["Opción A","Opción B","Opción C"],
  correct: 1,
  selection: null },

{
  id: 7,
  text: "Pregunta 8",
  answers: ["Opción A","Opción B","Opción C"],
  correct: 2,
  selection: null },

{
  id: 8,
  text:
  "Pregunta 9",
  answers: ["Opción A","Opción B","Opción C","Opción D"],
  correct: 2,
  selection: null },

{
  id: 9,
  text: "Pregunta 10",
  answers: ["Opción A","Opción B","Opción C","Opción D"],
  correct: 3,
  selection: null },

{
  id: 10,
  text: "Pregunta 11",
  answers: ["Opción A","Opción B","Opción C","Opción D"],
  correct: 3,
  selection: null },

{
  id: 11,
  text: "Pregunta 12",
  answers: ["Opción A","Opción B","Opción C","Opción D"],
  correct: 1,
  selection: null },
  
{
  id: 12,
  text: "Pregunta 13",
  answers: ["Opción A","Opción B","Opción C","Opción D"],
  correct: 1,
  selection: null }
];



function useCounter(initialState) {
  const [value, setValue] = useState(initialState);
  const reset = () => setValue(0);

  const add = () => setValue(value => value += 1);

  return { value, add, reset };
}

function Question({
  data,
  buttonText,
  hasButton = true,
  onQuestionButtonClick,
  showAnswer = false,
  markSelection = null })
{
  const [answer, setAnswer] = useState(null);
  const parseValue = value => value ? parseInt(value.split("-")[1]) : null;
  const questionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
    questionRef.current.querySelector(".question-text"),
    {
      x: 40,
      opacity: 0 },

    {
      x: 0,
      opacity: 1,
      duration: 0.4 });


    gsap.fromTo(
    questionRef.current.querySelectorAll("li"),
    {
      opacity: 0,
      x: 40 },

    {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1 });


  }, [data]);

  return /*#__PURE__*/(
    React.createElement("div", { className: "question", ref: questionRef }, /*#__PURE__*/
    React.createElement("div", { className: "question-inner" }, /*#__PURE__*/
    React.createElement("h2", { className: "question-text" }, data.text), /*#__PURE__*/
    React.createElement("ul", { className: "question-answers" },
    data.answers.map((text, index) => {
      const value = `q${data.id}-${index}`;
      return /*#__PURE__*/(
        React.createElement("li", {
          className:
          index === data.correct && showAnswer ? "is-true" : "",

          "data-selected": markSelection === index ? true : null }, /*#__PURE__*/

        React.createElement("input", {
          type: "radio",
          name: `q_${data.id}`,
          value: value,
          id: value,
          onChange: e => setAnswer(e.target.value),
          checked:
          !showAnswer ? answer === value : markSelection === index }), /*#__PURE__*/


        React.createElement("label", { className: "question-answer", htmlFor: value },
        text)));



    }))),


    hasButton && /*#__PURE__*/
    React.createElement("button", {
      className: "question-button",
      onClick: () => onQuestionButtonClick(parseValue(answer), data) },

    buttonText)));




}

function Results({ wrong, correct, empty }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "result" }, /*#__PURE__*/
    React.createElement("div", { className: "result-item is-correct" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, correct), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), /*#__PURE__*/
    React.createElement("path", { d: "M22 4L12 14.01 9 11.01" })), "CORRECTO")), /*#__PURE__*/




    React.createElement("div", { className: "result-item is-wrong" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, wrong), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /*#__PURE__*/
    React.createElement("path", { d: "M15 9L9 15" }), /*#__PURE__*/
    React.createElement("path", { d: "M9 9L15 15" })), "INCORRECTO")), /*#__PURE__*/




    React.createElement("div", { className: "result-item is-empty" }, /*#__PURE__*/
    React.createElement("span", { className: "result-count" }, empty), /*#__PURE__*/
    React.createElement("span", { className: "result-text" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      className: "css-i6dzq1",
      viewBox: "0 0 24 24" }, /*#__PURE__*/

    React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /*#__PURE__*/
    React.createElement("path", { d: "M8 12L16 12" })), "SIN CONTESTAR"))));






}

function QuestionCorrection({ wrong, correct, empty }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "correction" },
    questions.map(question => {
      return /*#__PURE__*/(
        React.createElement(Question, {
          hasButton: false,
          markSelection: question.selection,
          showAnswer: true,
          data: question }));


    })));


}

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameSize, setGameSize] = useState({});
  const totalQuestion = questions.length - 1;
  const gameRef = useRef(null);
  const gameOverlayRef = useRef(null);

  const question = useCounter(0);
  const correct = useCounter(0);
  const wrong = useCounter(0);
  const empty = useCounter(0);

  const handleNewQuestionClick = (selectedValue, currQuestion) => {
    if (totalQuestion >= question.value) {
      if (selectedValue === currQuestion.correct) {
        correct.add();
      } else if (
      selectedValue !== null &&
      selectedValue !== currQuestion.correct)
      {
        wrong.add();
      } else {
        empty.add();
      }
      questions[currQuestion.id].selection = selectedValue;
      question.add();
    }
  };

  const resetSelection = () => {
    questions.forEach(q => q.selection = null);
  };

  const handleRestartClick = () => {
    setGameFinished(false);
    setGameStarted(false);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
  };

  const indicatorBg = index => {
    if (question.value > index) {
      return "#fff";
    } else if (question.value === index) {
      return "#7c9885";
    } else {
      return "rgba(255,255,255,.2)";
    }
  };

  useEffect(() => {
    if (gameStarted) {
      document.body.classList.add("game-started");
    } else {
      document.body.classList.remove("game-started");
    }
  }, [gameStarted]);

  useEffect(() => {
    if (question.value > totalQuestion) {
      gameRef.current.scrollTop = 0;
    }
  }, [question.value]);

  return /*#__PURE__*/(
    React.createElement("div", {
      className: "game",
      ref: gameRef,
      "data-game-started": gameStarted ? true : null,
      "data-game-finished": question.value > totalQuestion ? true : null }, /*#__PURE__*/

    React.createElement("div", { className: "intro" }, /*#__PURE__*/
    React.createElement("div", { className: "intro-inner" }, /*#__PURE__*/
    React.createElement("h1", { className: "intro-title" }, "Inglés"),
    !gameStarted && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("p", { className: "intro-desc" },
    `INGRESA para ver las preguntas: https://bit.ly/48iq2pI `),
    

    React.createElement("button", {
      className: "intro-button",
      onClick: () => setGameStarted(true) }, "Empezar")),





    gameStarted && /*#__PURE__*/
    React.createElement("div", { className: "indicator" },
    questions.map((q, index) => {
      return /*#__PURE__*/(
        React.createElement("span", {
          className: "indicator-item",
          style: {
            backgroundColor: indicatorBg(index) } }));



    })), /*#__PURE__*/


    React.createElement(Results, {
      wrong: wrong.value,
      correct: correct.value,
      empty: empty.value }), /*#__PURE__*/

    React.createElement("button", {
      className: "restart-button",
      onClick: () => handleRestartClick() }, "Reiniciar"))), /*#__PURE__*/





    React.createElement("div", { className: "game-area" },
    questions[question.value] && /*#__PURE__*/
    React.createElement(Question, {
      data: questions[question.value],
      buttonText:
      question.value !== totalQuestion ? "Siguiente" : "Terminar Quiz",

      onQuestionButtonClick: handleNewQuestionClick }),



    !questions[question.value] && /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(QuestionCorrection, { data: questions })))));





}

render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));