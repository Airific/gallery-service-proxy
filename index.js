const express = require('express');
const path = require('path');
const port = 3005;
const app = express();

app.use('/:id', express.static(path.join(__dirname, './public')));


app.listen(port, () => {
  console.log("listening to port 3005");
});

