const ContactUs = require('../models/contactus');

exports.addContactUsForm = function (req,res,next) {
    var contactus = new ContactUs({
        email:req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address,
        message: req.body.message
    });
    contactus.save(function (err,leader) {
        if(err){
            return res.status(401).send({'success':false,'message':err.message});
        }
        return res.status(200).send({'success':true,'data':contactus});
    })
};
exports.getAllForms = function (req,res,next) {
    ContactUs.find().exec(function (err,forms) {
        return res.status(200).send(forms);
    });
};
