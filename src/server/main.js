import express from "express";
import ViteExpress from "vite-express";
import axios from "axios";
import 'dotenv/config'
import crypto from 'node:crypto'
const app = express();


app.get('/api/records', async (req, res) => {
  try {
    const response = await axios.get('https://api.discogs.com/users/ghostly64/collection/folders/7261507/releases', {
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
  'Cross-Origin-Resource-Policy': 'cross-origin',
  'User-Agent': 'PostmanDiscogs/1.0',
  'Authorization': `OAuth oauth_consumer_key="${process.env.OAUTH_CONSUMER_KEY}",oauth_token="${process.env.OAUTH_TOKEN}",oauth_signature_method="PLAINTEXT",oauth_timestamp="${Math.floor(Date.now() / 1000)}",oauth_nonce="${crypto.randomBytes(16).toString('hex')}",oauth_version="1.0",oauth_signature="${process.env.OAUTH_SIGNATURE}"`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Discogs' });
  }
});

app.get(`/api/records/:id`, async (req, res) => {
  try {
    const response = await axios.get(`https://api.discogs.com/releases/${req.params.id}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Cross-Origin-Resource-Policy': 'cross-origin',
        'User-Agent': 'PostmanDiscogs/1.0', 
        'Authorization': 'OAuth oauth_consumer_key="bwcIEfydSSfolgDTrYVs",oauth_token="oBskqeOIwChEGfMterEcgJbqDeehUwHJtIBclcBO",oauth_signature_method="PLAINTEXT",oauth_timestamp="1714405046",oauth_nonce="3ab2ecbd-7acc-4441-9389-29688543862f",oauth_version="1.0",oauth_signature="HLVDfYNOfRrUfsuELZgOxPyIXPPCNyJE%26nUhFDkdvUDelDsvSHhFKQgwHdosAoPrNfKhoNnqv"'
      }
    });
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Discogs' });
  }
});
app.get(`/api/lastfm`, async(req,res) => {
   // Loads recently played tracks
   const {data: recentTracksData} = await axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cosmos_ghost&api_key=feac3c66b49820bcd0d4f40b4338b913&format=json`
  );
  const response = {
    recentTracks: recentTracksData?.recenttracks?.track
  };
  return response.data;
})
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
