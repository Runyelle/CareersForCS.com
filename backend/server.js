require('./config/db');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser') // MIGHT NOT NEED IN FUTURE
const router = require('./routes/router')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));



const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200

}
app.use(cors(corsOptions));
app.use('/', router)

const port = 7000;
const server = app.listen(port, () => {
    console.log('Hello server ' + port)
})

console.log('Helloooooo')