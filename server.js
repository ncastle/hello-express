const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (request, response) => {
  response.send('Hello, Burlington Code Academy. This is day one stuffs');
});

app.listen(port, () => console.log(`Listening on port ${port}!`));