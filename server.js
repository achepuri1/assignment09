const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;



app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});


app.get('/say', async (req, res) => {
    try {
        const word = req.query.keyword;
        console.log(word)
        const functionResponse = await axios({
            url: `https://7iibd5ab3b.execute-api.us-east-2.amazonaws.com/dev/api-gateway`,
            method: 'get',
    
            data: {
              keyword:word
            }
        })
        //if(res.status == 200){
            // test for status you want, etc
           // console.log(res.status)
        //}    
        // Don't forget to return something   
        res.send(functionResponse.data)
    }
    catch (err) {
        console.error(err);
    }
});



  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
