'use strict';

const express = require('express');

// Constants
const PORT = 4000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('A New Beginning In Cloud');
});

app.listen(PORT, HOST);
console.log(`Server running on http://${HOST}:${PORT}`);