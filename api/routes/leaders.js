var express = require('express');
var router = express.Router();
var LeaderController = require('../controllers/leaders');
var multer  = require('multer');
var upload = multer({ dest: 'profile_pictures/' ,
                filename: function (req, file, cb) {
                    var itemId = req.params.id;
                    cb(null, itemId);
    }});
/* GET users listing. */
router.get('/',LeaderController.getLeader);
router.get('/:id',LeaderController.getSpecificLeader);
router.post('/',LeaderController.addLeader);
router.delete('/:id',LeaderController.deleteLeader);
router.put('/:id',LeaderController.editLeader);
router.put('/:id/profile_picture',upload.single('avatar'),LeaderController.addImage);

module.exports = router;
