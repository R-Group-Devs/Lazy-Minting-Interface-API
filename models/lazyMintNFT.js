mongoose = require('mongoose')

const { Schema } = mongoose;

lazyMintedNFT = new Schema ({

    tokenID: String,
    signature: String

})


module.exports = mongoose.model('lazyMintedNFT', lazyMintedNFT)