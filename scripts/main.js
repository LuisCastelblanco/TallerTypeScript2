import { Data } from './data.js';
var seriesTbody = document.getElementById('series');
var containerCard = document.getElementById("container-card");
var averageSeasons = 0;
initialize();
function initialize() {
    populateSeriesTable(Data);
    bindTableClickListener();
}
function populateSeriesTable(series) {
    console.log("Populating series...");
    series.forEach(function (serie) {
        var row = generateSerieRow(serie);
        seriesTbody.appendChild(row);
        averageSeasons += serie.seasons;
        console.log("Processed Serie number: ".concat(serie.num));
    });
    displayAverageSeasons(series);
    console.log("Series population complete.");
}
function bindTableClickListener() {
    seriesTbody.addEventListener("click", handleRowClick);
}
function handleRowClick(event) {
    var clickedElement = event.target;
    if (['TH', 'TD'].includes(clickedElement.tagName)) {
        var row = clickedElement.closest('tr');
        var id_1 = parseInt(row.cells[0].textContent);
        var selectedSerie = Data.find(function (serie) { return serie.num === id_1; });
        if (selectedSerie)
            displaySerieDetails(selectedSerie);
    }
}
function generateSerieRow(serie) {
    var row = document.createElement('tr');
    row.innerHTML = "<th>".concat(serie.num, "</th>\n                     <td class=\"text-primary\">").concat(serie.name, "</td>\n                     <td>").concat(serie.channel, "</td>\n                     <td>").concat(serie.seasons, "</td>");
    return row;
}
function displaySerieDetails(serie) {
    containerCard.innerHTML = "\n        <div class=\"card\" style=\"width: 18rem;\">\n            <img class=\"card-img-top\" src=\"".concat(serie.img, "\" alt=\"Serie image\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\" style=\"font-weight: bold;\">").concat(serie.name, "</h5>\n                <p class=\"card-text\">").concat(serie.description, "</p>\n                <a href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.url, "</a>\n            </div>\n        </div>");
}
function displayAverageSeasons(series) {
    averageSeasons /= series.length;
    document.getElementById("average").textContent = "Seasons Average: ".concat(averageSeasons);
}
