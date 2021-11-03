mongoose = require('mongoose')
const { Schema } = mongoose;


single721LazyMint = new Schema ({
    tokenID: String,
    creator: String,
    claimer: String
})


module.exports = mongoose.model('single721LazyMint', single721LazyMint)