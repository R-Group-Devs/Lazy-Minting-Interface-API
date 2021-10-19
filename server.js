const express = require('express');
const mongoose = require('mongoose')
const { MongoDB_URI } = require('./config')



const app = express();
const PORT = process.env.PORT || 3000;


async function connectDatabase() {
    dbConnected = await mongoose.connect(process.env.MongoDB_URI);
}

connectDatabase()




app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded( { extended:true } ));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`listening on : http://localhost:${PORT}`);
});


app.get('/api', (req, res) => {

    res.send("Welcome to the Magic Mint API");

});

app.get('/', (req, res) => {

    res.send("Welcome to the Magic Mint API");

});
