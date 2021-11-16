mongoose = require('mongoose')
const { Schema } = mongoose;


single721LazyMint = new Schema ({
    tokenID: String,
    creator: String,
    contract:String,
    claimer: String,
    isMinted: Boolean
})


module.exports = mongoose.model('single721LazyMint', single721LazyMint)