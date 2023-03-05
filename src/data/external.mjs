import Papa from 'papaparse';
import fetch from 'node-fetch';

const playerDataUrl = 'https://github.com/nflverse/nflverse-data/releases/download/players/players.csv';

// console.log("PLAYER CSV URL", playerDataUrl);
let playerData = [];

 export async function fetchPlayerList() {
  const response = await fetch(playerDataUrl);
  const text = await response.text();
  const parsedData = Papa.parse(text, { header: true });
  return parsedData.data;
}

// const data = await fetchPlayerList();

// console.log('PLAYERDATA !!', data);

