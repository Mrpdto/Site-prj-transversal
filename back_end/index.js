const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const playerRouter = require('./routes/start'); 

app.use(express.json());


app.use(cors());

app.use(express.static('public'));

app.use('/', playerRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Game Backend API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


