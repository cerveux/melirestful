const express = require('express');
const app = express();
const axios = require('axios');
const { response } = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3001;;

app.use(bodyParser.urlencoded({extended: true}));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get("/api/:search", (req, res) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${req.params.search}&limit=4`;
    axios.get(url)
    .then(response => {
        res.json(response.data.results)
    })
    .catch((error)=>{
        console.log(error);
    });
  })
  .get("/item/:id", (req, res) => {
    const item = `https://api.mercadolibre.com/items?ids=${req.params.id}`;    
    axios.get(item)
    .then(response => {
        res.json(response.data[0].body)
    })
    .catch((error)=>{
        console.log(error);
    });

  })
  .get("/item/:item/description", (req, res) => {
    const descripcion = `https://api.mercadolibre.com/items/${req.params.item}/description`;
    axios.get(descripcion)
    .then(response => {
        
        res.json(response.data.plain_text)
    })
    .catch((error)=>{
        console.log(error);
    });
  })
  .get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
  

app.listen(PORT, ()=>console.log(`funka en el puerto ${PORT}`));