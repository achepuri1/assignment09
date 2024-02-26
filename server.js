const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

const myFunction = require('./my-function');


app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});


app.get('/say', async (req, res) => {
    try {
        const keyword = req.query.keyword;
        const functionResponse = await axios.get(`http://localhost:${PORT}/function?keyword=${keyword}`);
        res.send(functionResponse.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
