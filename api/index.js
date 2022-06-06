const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json('application/json'));
const port = 4000

const stake = require("./route/stake")



// cors policy
const cors = require('cors')
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const mongoose = require('mongoose')
mongoose
    .connect('mongodb+srv://bulbul:uXtkQ4jw4AvLdeOb@cluster0.wyeg4.mongodb.net/staking-farming?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Connected to the Database successfully');
    }).catch((err) => {
        console.log("error", err);
    })


app.use("/", stake)


app.listen(port, () => {
    console.log(`**********************************************\nChating app listening at http://localhost:${port}\n\n**********************************************\n`)
})