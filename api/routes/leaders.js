var express = require('express');
var router = express.Router();
var LeaderController = require('../controllers/leaders');
/* GET users listing. */
router.get('/',LeaderController.getLeader);
router.get('/:id',LeaderController.getSpecificLeader);
router.post('/',LeaderController.addLeader);
router.delete('/:id',LeaderController.deleteLeader);
router.put('/:id',LeaderController.editLeader);


module.exports = router;
