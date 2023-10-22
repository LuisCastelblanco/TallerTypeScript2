import {serie} from './serie.js';
import {Data} from './data.js';

const seriesTbody = document.getElementById('series') as HTMLElement;
const containerCard = document.getElementById("container-card") as HTMLElement;
let averageSeasons = 0;

initialize();

function initialize() {
    populateSeriesTable(Data);
    bindTableClickListener();
}

function populateSeriesTable(series: serie[]): void {
    console.log("Populating series...");
    series.forEach(serie => {
        const row = generateSerieRow(serie);
        seriesTbody.appendChild(row);
        averageSeasons += serie.seasons;
        console.log(`Processed Serie number: ${serie.num}`);
    });
    displayAverageSeasons(series);
    console.log("Series population complete.");
}

function bindTableClickListener(): void {
    seriesTbody.addEventListener("click", handleRowClick);
}

function handleRowClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;
    if (['TH', 'TD'].includes(clickedElement.tagName)) {
        const row = clickedElement.closest('tr') as HTMLTableRowElement;
        const id = parseInt(row.cells[0].textContent!);
        const selectedSerie = Data.find(serie => serie.num === id);
        if (selectedSerie) displaySerieDetails(selectedSerie);
    }
}

function generateSerieRow(serie: serie): HTMLTableRowElement {
    const row = document.createElement('tr');
    row.innerHTML = `<th>${serie.num}</th>
                     <td class="text-primary">${serie.name}</td>
                     <td>${serie.channel}</td>
                     <td>${serie.seasons}</td>`;
    return row;
}

function displaySerieDetails(serie: serie): void {
    containerCard.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${serie.img}" alt="Serie image">
            <div class="card-body">
                <h5 class="card-title" style="font-weight: bold;">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.url}" target="_blank">${serie.url}</a>
            </div>
        </div>`;
}

function displayAverageSeasons(series: serie[]): void {
    averageSeasons /= series.length;
    document.getElementById("average")!.textContent = `Seasons Average: ${averageSeasons}`;
}
