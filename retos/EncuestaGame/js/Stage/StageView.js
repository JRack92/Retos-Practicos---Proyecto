import { getFirestore, getDoc, doc } from "firebase/firestore";
import { SaveQuestion, SaveStage } from "./StageCardContainer";

let _stageCardContainer = "";
let _stageView = "";

let _stageID;
let _stageData;

let _currentIndexQuestion = 0;

export function SelectedStage(stageID) {
  _stageID = stageID;

  const fireStoreDB = getFirestore();
  const fireStoreDoc = doc(fireStoreDB, "Stages", _stageID);

  getDoc(fireStoreDoc).then((res) => {
    _stageData = { id: res.id, ...res.data() };
    print_StageView();
  });
}

function print_StageView() {
  if (!_stageCardContainer)
    _stageCardContainer = document.querySelector(".StageCardContainer");

  if (!_stageView) _stageView = document.querySelector(".StageView");

  let innerHtml_ListQuestion = "";
  // console.log(`_currentIndexQuestion => ${_currentIndexQuestion}`);
  const currentQuestion = _stageData.listQuestions[_currentIndexQuestion];
  const answerCorrect = GetAnswerCorrect(currentQuestion.answers);
  const radioName = `AnswerQuestion${currentQuestion.number}`;
  const id_FormQuestion = `FormQuestion_${currentQuestion.number}`;

  currentQuestion.answers.forEach((answer) => {
    innerHtml_ListQuestion += Print_QuestionRadio(answer, radioName);
  });

  const innerHtml = `
    <button class="close-btn">X</button>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FJ-w0tf3d_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="StageView_question">
      <h3>${currentQuestion.title}</h3>
      <p>${currentQuestion.description}</p>
        <form id="${id_FormQuestion}">
            ${innerHtml_ListQuestion}
            <input class="submitBtn" type="submit" value="Continuar">
        </form>
      <div class="ResultAlert hidden">
        <p>Repuesta Incorrecta</p>
      </div>
    </div>
    `;

  _stageView.innerHTML = innerHtml;

  const closeBtn = document.querySelector(".StageView .close-btn");
  closeBtn.addEventListener("click", function () {
    HiddenStageView();
  });

  const formElement = document.getElementById(id_FormQuestion);
  formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const answerSelected = formElement.querySelector(
      `input[name="${radioName}"]:checked`
    ).value;

    const result = ValidationAnswerSelected(answerCorrect, answerSelected);
    const resultAlertElement = document.querySelector(
      ".StageView_question .ResultAlert"
    );

    if (resultAlertElement)
      resultAlertElement.classList.toggle("hidden", result);

    SaveQuestion(_currentIndexQuestion, result);

    if (result) LoadNextQuestion();
  });
}

function LoadNextQuestion() {
  _currentIndexQuestion++;

  if (_currentIndexQuestion < _stageData.listQuestions.length) {
    // console.log("Siguiente pregunta");
    print_StageView();
  } else {
    // console.log("Stage terminado");
    SaveStage(true);
    HiddenStageView();
    _currentIndexQuestion = 0;
  }
}

function ValidationAnswerSelected(answerCorrect, answerSelected) {
  return answerCorrect.number.toString() === answerSelected;
}

function HiddenStageView() {
  _stageView.classList.add("hidden");
  _stageCardContainer.classList.remove("hidden");
  _stageView.innerHTML = "";
}

function Print_QuestionRadio(answer, radioName) {
  return `
    <label>
        <input type="radio" name="${radioName}" value="${answer.number}">
        ${answer.text}
    </label>`;
}

function GetAnswerCorrect(answers) {
  return answers.find(function (answer) {
    return answer.correct === true;
  });
}
