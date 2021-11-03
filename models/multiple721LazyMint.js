mongoose = require('mongoose')
const { Schema } = mongoose;


multiple721LazyMint = new Schema ({
    tokenID: String,
    creator: String,
    claimer: String
})


module.exports = mongoose.model('multiple721LazyMint', multiple721LazyMint)