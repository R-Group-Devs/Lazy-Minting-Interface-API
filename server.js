const express = require('express');
const mongoose = require('mongoose')
const { MongoDB_URI } = require('./config')
var lazyMint = require('./routes/ERC721LazyMint');
const PORT = process.env.PORT || 3000;



const app = express();
app.use(express.urlencoded( { extended:true } ));
app.use(express.json());

async function connectDatabase() {
    dbConnected = await mongoose.connect(process.env.MongoDB_URI);
    app.use('/api/721', lazyMint);
}

connectDatabase()

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(PORT, () => {
    console.log(`listening on : http://localhost:${PORT}`);
});


app.get('/api', (req, res) => {

    res.send("Welcome to the Magic Mint API");

});


app.get('/', (req, res) => {

    res.send("Welcome to the Magic Mint API");

});
