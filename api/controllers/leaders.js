const Leader = require('../models/leaders');

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