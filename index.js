const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is Node.js project API!');
});

//Normally I just put port 3000 for every project.
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Node.js project API running on http://localhost:${PORT}`);
});