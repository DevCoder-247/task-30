const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


//Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes

app.get('/', (req, res) => {
    res.send("The api is working");
})
app.post('/api/submit', (req, res) => {
    console.log("Received data:", req.body);
    res.json(req.body);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server.`);
})