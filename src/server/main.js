import express from "express";
import ViteExpress from "vite-express";
import axios from "axios";

const app = express();

app.get("/hello", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
});
app.get('/api/getList', (req,res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

app.get('/api/records', async (req, res) => {
  try {
    const response = await axios.get('https://api.discogs.com/users/ghostly64/collection/folders/0/releases', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'User-Agent': 'PostmanDiscogs/1.0', 
        'Authorization': 'OAuth oauth_consumer_key="bwcIEfydSSfolgDTrYVs",oauth_token="oBskqeOIwChEGfMterEcgJbqDeehUwHJtIBclcBO",oauth_signature_method="PLAINTEXT",oauth_timestamp="1714405046",oauth_nonce="3ab2ecbd-7acc-4441-9389-29688543862f",oauth_version="1.0",oauth_signature="HLVDfYNOfRrUfsuELZgOxPyIXPPCNyJE%26nUhFDkdvUDelDsvSHhFKQgwHdosAoPrNfKhoNnqv"'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Discogs' });
  }
});
  // // Discogs API endpoint
  // app.get('/api/discogs/:endpoint', async (req, res) => {
  //   const endpoint = req.params.endpoint;
  //   const query = req.query;
  //   try {
  //       const response = await axios.get(`https://api.discogs.com/${endpoint}`, {
  //           params: query,
  //           headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded', 
  //             'User-Agent': 'PostmanDiscogs/1.0', 
  //             'Authorization': 'OAuth oauth_consumer_key="bwcIEfydSSfolgDTrYVs",oauth_token="oBskqeOIwChEGfMterEcgJbqDeehUwHJtIBclcBO",oauth_signature_method="PLAINTEXT",oauth_timestamp="1714405046",oauth_nonce="3ab2ecbd-7acc-4441-9389-29688543862f",oauth_version="1.0",oauth_signature="HLVDfYNOfRrUfsuELZgOxPyIXPPCNyJE%26nUhFDkdvUDelDsvSHhFKQgwHdosAoPrNfKhoNnqv"'
        
  //           }
  //       });
  //       console.log(response.data)
  //       res.json(response.data);
  //   } catch (error) {
  //       res.status(500).json({ error: error.message });
  //   }
  // });
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
