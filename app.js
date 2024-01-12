const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Wait for Abhishek! His best is yet to come and World will see his patience & commitment!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
