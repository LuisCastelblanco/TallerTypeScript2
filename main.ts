import { serie } from './serie.js';
import { Data } from './data.js';

const seriesTbody = document.getElementById('series') as HTMLElement;
const averageElement = document.getElementById("average") as HTMLElement;

loadSeries(Data);

function loadSeries(seriesData: serie[]): void {
    let totalSeasons: number = 0;

    console.log("Loading series...");

    seriesData.forEach((seriesItem) => {
        totalSeasons += appendSeriesToTable(seriesItem);
        console.log(`Series ${seriesItem.num} loaded`);
    });

    const avgSeasons = calculateAverage(totalSeasons, seriesData.length);
    averageElement.innerHTML = `Seasons Average: ${avgSeasons}`;

    console.log("Loading complete");
}

function appendSeriesToTable(seriesItem: serie): number {
    const trElement = document.createElement('tr');

    trElement.innerHTML = `
        <th>${seriesItem.num}</th>
        <td class="text-primary">${seriesItem.name}</td>
        <td>${seriesItem.channel}</td>
        <td>${seriesItem.seasons}</td>
    `;

    seriesTbody.appendChild(trElement);

    return seriesItem.seasons;
}

function calculateAverage(total: number, count: number): number {
    return total / count;
}
