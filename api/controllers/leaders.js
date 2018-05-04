const Leader = require('../models/leaders');
const multer = require('multer');
const fs = require('fs');
var upload = multer({ dest: 'uploads/' });

exports.getLeader = function (req,res,next) {
    Leader.find().exec(function (err,leaders) {
        return res.status(200).send(leaders);
    });
};

exports.getSpecificLeader = function (req,res,next) {
    Leader.findById(req.params.id,function (err,leader) {
        if(err) res.status(401).send({'success':false});
        res.status(200).send(leader);
    });
};


exports.addLeader = function (req,res,next) {
  var leader = new Leader({
      name:req.body.name,
      roles: req.body.roles
  });
  leader.save(function (err,leader) {
      if(err){
          console.error('Inside error');
          return res.status(401).send({'success':false});
      }
      return res.status(200).send({'success':true,'data':leader});
  })
};

exports.editLeader = function (req,res,next) {
    Leader.findById(req.params.id,function (err,leader) {
        if(err) return res.status(401).send({'success':false});
        leader.name = req.body.name;
        leader.roles = req.body.roles;
        leader.save(function (err) {
           if(err) return res.status(401).send(err);
           return res.status(200).send({'sucess':true,'updated':leader});
        });
    });
};

exports.deleteLeader = function (req,res,next) {
    Leader.remove({
        _id: req.params.id
    },function (err,leader) {
        if(err){
            return res.status(401).send({"success":false});
        }
       return res.status(200).send({"success":true});
    });
};

exports.addImage = function (req,res,next) {
    if (!req.file.fieldname =='avatar') {
        return res.send({
            success: false
        });

    } else {
        Leader.findById(req.params.id,function (err,leader) {
            if(err) return res.status(401).send({'success':false});
            //Check if any file attr exists
            if ('profile_picture' in leader){
                //Check if file exists
                if(fs.existsSync(leader.profile_picture)){
                    //Delete if found
                    fs.unlink(leader.profile_picture);
                }
            }
            leader.profile_picture = req.file.path;
            leader.save(function (err) {
                if(err) return res.status(401).send(err);
                return res.status(200).send({'sucess':true,'updated':leader});
            });
        });
    }
};