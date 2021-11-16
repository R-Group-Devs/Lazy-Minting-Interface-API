
var single721LazyMint = require('../../models/single721LazyMint');

exports.all = async (req, res) => {

    const mints = await single721LazyMint.find();

    if(mints){
        res.send(mints)
    }else{
        res.status(400).send(new Error('No data found'));
    }
    
}

exports.get_claims_by_claimer = async (req, res) => {

    const claims = await single721LazyMint.find({ claimer: req.query.claimerAddress })

    if(claims){
        res.send(claims)
    }else{
        res.status(400).send(new Error('Address cannot claim'));

    }

}

exports.create = async (req, res) => {

    const newMint = new single721LazyMint({
        tokenID: req.body.tokenID,
        creator: req.body.creator,
        contract: req.body.contract,
        claimer: req.body.claimer,
        isMinted: req.body.isMinted
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

    //upon claiming

    const claims = await single721LazyMint.find({ tokenID: req.body.tokenID })
    if(claims.length){

        token = claims[0]
        if(!token.isMinted){
            const update = await single721LazyMint.findOneAndUpdate({tokenID: req.body.tokenID}, {isMinted: true})
            res.send(update)
        }

    }else{
        res.status(400).send(new Error('No data found'));
    }

}

