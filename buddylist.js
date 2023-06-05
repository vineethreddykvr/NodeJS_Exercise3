const express = require('express');
const app = express();
const port = 3000;

const buddyList = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

app.get('/buddy-list', (req, res) => {
  res.json(buddyList);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
