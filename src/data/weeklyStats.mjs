import fetch from "node-fetch";
import Papa from "papaparse";

async function getPlayerStats(season, player, week) {
  const baseUrl = "https://github.com/nflverse/nflverse-data/releases/download/player_stats/player_stats.";
  const fileType = "csv";
  const url = `${baseUrl}${fileType}`;

  // Fetch the data from the URL
  const response = await fetch(url);
  const data = await response.text();

  // Parse the CSV data
  const result = Papa.parse(data, {
    header: true,
    dynamicTyping: true,
  });

  // Filter the data to include only the specified season
  const stats = result.data.filter((row) => row.season === season);

  const playerStats = result.data.filter(row => row.player_display_name === player && row.week === week && row.season === season);


  // console.log('stats', stats);
  return playerStats;
}


// Test the function
(async () => {
  const stats = await getPlayerStats(2021, "Justin Herbert", 4);
  console.log(stats);
})();
