const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serves files from /public

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
