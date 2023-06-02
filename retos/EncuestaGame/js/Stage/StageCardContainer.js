import "./StageCard";
import { SelectedStage } from "./StageView";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

let _currentStageID = "";
let _stageCardContainer = "";
let _stageView = "";

let db;
let dbCollection;
let auth;
let user;

export function LoadStages() {
  db = getFirestore();
  auth = getAuth();
  user = auth.currentUser;
  dbCollection = collection(db, "Stages");

  // console.log(auth);
  // console.log(user);

  getDocs(dbCollection).then((res) => {
    const listStage = res.docs.map((stage) => ({
      id: stage.id,
      ...stage.data(),
    }));
    printStageContainer(listStage);
    AddEventOnClick_ListStageCard();
  });
}

function printStageContainer(stages) {
  console.log("Entrada");
  let innerHtmlStageCard = "";
  _stageCardContainer = document.querySelector(".StageCardContainer");
  _stageView = document.querySelector(".StageView");

  //Crea los Stages en el DOM
  stages.forEach((data) => {
    innerHtmlStageCard += `
        <stage-card 
        stageId="${data.id}" 
        name="${data.name}" 
        info="${data.info}" 
        level="${data.level}" 
        imgBackground="${data.imgBackground}">
        </stage-card>`;
  });
  // console.log(innerHtmlStageCard)
  _stageCardContainer.innerHTML = innerHtmlStageCard;
}

function AddEventOnClick_ListStageCard() {
  const listStageCard = document.querySelectorAll("stage-card");

  listStageCard.forEach(function (stageCard) {
    //Se agrega el evento click al StageCard
    stageCard.addEventListener("click", function () {
      OnClick_StageCard(stageCard);
    });
  });
}

/**
 * Evento Click del StageCard
 * @param {Element} stageCard - Elemento del DOM del StageCard
 */
function OnClick_StageCard(stageCard) {
  _currentStageID = stageCard.getAttribute("stageId");
  const stageName = stageCard.getAttribute("name");

  _stageCardContainer.classList.add("hidden");
  _stageView.classList.remove("hidden");

  SelectedStage(_currentStageID);
  SaveStage(false);
}

/**
 * Se guarda el Stage al usuario
 * @param {boolean} stageComplete - Se indica si el Stage ya fue completado en su totalidad
 */
export async function SaveStage(stageComplete) {
  await setDoc(doc(db, `Users/${user.uid}/Stages`, _currentStageID), {
    Complete: stageComplete,
  });
}

/**
 * Se guarda la pregunta del Stage actual al usuario
 * @param {string} id - id de la pregunta
 * @param {boolean} stateComplete - Se indica si la pregunta ya fue completa correctamente.
 */
export async function SaveQuestion(id, stateComplete) {
  await setDoc(
    doc(
      db,
      `Users/${user.uid}/Stages/${_currentStageID}/listQuestions`,
      id.toString()
    ),
    {
      Complete: stateComplete,
    }
  );
}
