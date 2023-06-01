import "./StageCard";
import { SelectedStage } from "./StageView";
import { getFirestore, getDocs, collection } from "firebase/firestore";
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
  dbCollection = collection(db, "Stages");
  auth = getAuth();
  user = auth.currentUser;

  console.log(auth);
  console.log(user);

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
    stageCard.addEventListener("click", function () {
      OnClick_StageCard(stageCard);
    });
  });
}

function OnClick_StageCard(element) {
  const stageId = element.getAttribute("stageId");
  const stageName = element.getAttribute("name");

  _currentStageID = stageId;
  _stageCardContainer.classList.add("hidden");
  _stageView.classList.remove("hidden");
  SelectedStage(_currentStageID);
}
