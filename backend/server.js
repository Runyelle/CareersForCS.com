require('./config/db');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser') // MIGHT NOT NEED IN FUTURE
const router = require('./routes/router')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const corsOptions = {
    origin: 'http://localhost:5175/', // or whatever port your friend's frontend is running on
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // optional but recommended
  };
  
app.use(cors(corsOptions));

app.use('/', router)

const port = 7000;
const server = app.listen(port, () => {
    console.log('Hello server ' + port)
})

console.log('Helloooooo')