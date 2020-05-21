const express = require('express');

const app = express();

//test server running
app.get('/', (req, res) => res.send('Api Running'));

//default port 5000
const PORT = process.env.PORT || 5000;

//console log status server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
