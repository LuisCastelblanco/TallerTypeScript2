import { Data } from './data.js';
var seriesTbody = document.getElementById('series');
var averageElement = document.getElementById("average");
loadSeries(Data);
function loadSeries(seriesData) {
    var totalSeasons = 0;
    console.log("Loading series...");
    seriesData.forEach(function (seriesItem) {
        totalSeasons += appendSeriesToTable(seriesItem);
        console.log("Series ".concat(seriesItem.num, " loaded"));
    });
    var avgSeasons = calculateAverage(totalSeasons, seriesData.length);
    averageElement.innerHTML = "Seasons Average: ".concat(avgSeasons);
    console.log("Loading complete");
}
function appendSeriesToTable(seriesItem) {
    var trElement = document.createElement('tr');
    trElement.innerHTML = "\n        <th>".concat(seriesItem.num, "</th>\n        <td class=\"text-primary\">").concat(seriesItem.name, "</td>\n        <td>").concat(seriesItem.channel, "</td>\n        <td>").concat(seriesItem.seasons, "</td>\n    ");
    seriesTbody.appendChild(trElement);
    return seriesItem.seasons;
}
function calculateAverage(total, count) {
    return total / count;
}
