const express = require('express');
const router = express.Router();

const SummonerController = require('../controllers/summoner.controller');
const MatchesController = require('../controllers/matches.controller');
const MatchController = require('../controllers/match.controller')


module.exports = function(){
    router.get('/getSummoner',SummonerController.searchSummoner);
    router.get('/getMatches', MatchesController.searchMatches );
    router.get('/getMatch',MatchController.searchMatch);
    return router;
}