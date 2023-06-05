import "./StageCard";
import { SelectedStage } from "./StageView";
import { GetListStage, SaveStage } from "../firebase/dbConnect";

let _currentStageID = "";
let _stageCardContainer = "";
let _stageView = "";

export async function LoadStages() {
  GetListStage(PrintStageContainer);
}

function PrintStageContainer(listStages) {
  let innerHtmlStageCard = "";
  _stageCardContainer = document.querySelector(".StageCardContainer");
  _stageView = document.querySelector(".StageView");

  //Crea los Stages en el DOM
  listStages.forEach((data) => {
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

  AddEventOnClick_ListStageCard();
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

/** Evento Click del StageCard
 * 
 * @param {Element} stageCard - Elemento del DOM del StageCard
 */
function OnClick_StageCard(stageCard) {
  _currentStageID = stageCard.getAttribute("stageId");
  const stageName = stageCard.getAttribute("name");

  _stageCardContainer.classList.add("hidden");
  _stageView.classList.remove("hidden");

  SelectedStage(_currentStageID);

  //El false inicial toca cambiarlo por primero verificar que ya esta el stage completado o no
  SaveStage(false, _currentStageID);
}
