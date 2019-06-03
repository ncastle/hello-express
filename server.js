const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (request, response) => {
  response.send('Hello, Burlington Code Academy. First day stuffs');
});

app.get('/hello/:friend', (request, response) => {
  response.send('Hello, ' + request.params.friend + '!');
});

app.listen(port, () => console.log(`Listening on port ${port}!`));