var express = require('express');
var router = express.Router();


var single_lazy_mint_controller = require("../controllers/ERC721/singleLazyMintController");
var multiple_lazy_mint_controller = require('../controllers/ERC721/singleLazyMintController');


// SINGLE 721 LAZY MINT
router.get('/single_lazy_mint_controller/all', single_lazy_mint_controller.all);

router.get('/single_lazy_mint_controller/:id', single_lazy_mint_controller.get_claims_by_claimer);

router.post('/single_lazy_mint_controller/create', single_lazy_mint_controller.create);

router.post('/single_lazy_mint_controller/delete/:id', single_lazy_mint_controller.delete_one_by_tokenID);

router.post('/single_lazy_mint_controller/update/:id', single_lazy_mint_controller.update_one_by_tokenID);

// MULTIPLE 721 LAZY MINT
router.get('/multiple_lazy_mint_controller/all', multiple_lazy_mint_controller.all);

router.get('/multiple_lazy_mint_controller/:id', multiple_lazy_mint_controller.get_one_by_tokenID);

router.post('/multiple_lazy_mint_controller/create', multiple_lazy_mint_controller.create);

router.post('/multiple_lazy_mint_controller/delete/:id', multiple_lazy_mint_controller.delete_one_by_tokenID);

router.post('/multiple_lazy_mint_controller/update/:id', multiple_lazy_mint_controller.update_one_by_tokenID);




module.exports = router;