const summaryListContainer = document.getElementById("SummaryList");

LoadDataJson("./data/data.json", ShowSummaryList);

async function LoadDataJson(urlJson, callBack) {
  const response = await fetch(urlJson);
  const json = await response.json();
  callBack(json);
}

function ShowSummaryList(summaryData) {
  console.log(summaryData);
  let innerHtml = "";
  const maxScore = 100;

  summaryData.forEach((summary) => {
    innerHtml += `
    <div class="rounded-xl flex py-5 px-6 items-center ${summary.bgColor}">
        <img src="${summary.icon}" alt="${summary.category}" />
        <p class="ml-3 text-lg ${summary.textColor}">${summary.category}</p>
        <p class="ml-auto font-bold text-dark-gray-blue">
            ${summary.score}
            <span class="text-dark-gray-blue/70"> / ${maxScore}</span>
        </p>
    </div>
    `;
  });

  summaryListContainer.innerHTML = innerHtml;
}
