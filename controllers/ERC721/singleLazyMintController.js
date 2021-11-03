
var single721LazyMint = require('../../models/single721LazyMint');

exports.all = async (req, res) => {


    const mints = await single721LazyMint.find();

    if(mints){
        res.send(mints)
    }else{
        res.status(400).send(new Error('No data found'));
    }

}

exports.get_one_by_tokenID = async (req, res) => {

    const token = await single721LazyMint.find({ tokenID: req.body.tokenID })
    
    if(token){
        res.send(token)
    }else{
        res.status(400).send(new Error('Cannot find token'));

    }

}
exports.create = async (req, res) => {

    const newMint = new single721LazyMint({
        tokenID: req.body.tokenID,
        creator: req.body.creator,
        claimer: req.body.claimer
    })

    const saved = await newMint.save();

    if(saved){
        res.send("200 OK")
    }else{
        res.status(400).send(new Error('Unable to Create data'));
    }
    

}

exports.delete_one_by_tokenID = async (req, res) => {

    
}
exports.update_one_by_tokenID = async (req, res) => {

    
}

