import "./StageCard";
import { SelectedStage } from "./StageView";
import {
  GetListStage,
  SaveStage,
  GetUserListStage,
} from "../firebase/dbConnect";

let _currentStageID = "";
let _stageCardContainer = "";
let _stageView = "";
let _currentStageCard;
const _stageCardCompleteStyleName = "complete";

export async function LoadStages() {
  GetListStage(PrintStageContainer);
}

function PrintStageContainer(listStages) {
  let innerHtmlStageCard = "";
  const userListStage = GetUserListStage();

  console.log(userListStage);

  _stageCardContainer = document.querySelector(".StageCardContainer");
  _stageView = document.querySelector(".StageView");

  //Crea los Stages en el DOM
  listStages.forEach((data) => {
    const userStage = userListStage.find((stage) => stage.id === data.id);
    let styleStageComplete = "Nocomplete";

    if (userStage && userStage.Complete) {
      console.log(`userStage => ${userStage.Complete}`);
      styleStageComplete = _stageCardCompleteStyleName;
    }

    innerHtmlStageCard += `
        <stage-card class="${styleStageComplete}"
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

/** Agrega el evento Click al StageCard que no este completado aun */
function AddEventOnClick_ListStageCard() {
  const listStageCard = document.querySelectorAll("stage-card");

  listStageCard.forEach(function (stageCard) {
    //Se agrega el evento click al StageCard
    if (stageCard.className !== _stageCardCompleteStyleName) {
      stageCard.addEventListener("click", function () {
        OnClick_StageCard(stageCard);
      });
    }
  });
}

/** Evento Click del StageCard
 *
 * @param {Element} stageCard - Elemento del DOM del StageCard
 */
function OnClick_StageCard(stageCard) {
  //TO-DO:Puede haber una mejor solución para este punto
  console.log(stageCard.className !== _stageCardCompleteStyleName);
  if (stageCard.className !== _stageCardCompleteStyleName) {
    _currentStageCard = stageCard;
    _currentStageID = stageCard.getAttribute("stageId");
    const stageName = stageCard.getAttribute("name");

    _stageCardContainer.classList.add("hidden");
    _stageView.classList.remove("hidden");

    SelectedStage(_currentStageID);

    //El false inicial toca cambiarlo por primero verificar que ya esta el stage completado o no
    SaveStage(false, _currentStageID);
  }
}

export function StageCardComplete() {
  _currentStageCard.classList.add(_stageCardCompleteStyleName);
  // _currentStageCard.removeEventListener("click");
}
