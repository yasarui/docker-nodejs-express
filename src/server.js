const express = require('express');

//Init app
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.status(200).send('sdsdsdsdsdsdsds');
})

app.listen(port, ()=> {
  console.log(`Server is up and running on port ${port}`);
});