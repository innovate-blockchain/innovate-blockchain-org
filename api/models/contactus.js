const mongoose = require('mongoose'),
    validator = require('validator'),
    Schema = mongoose.Schema;

const ContactUsSchema = new Schema({
        email :{
            type:String,
            trim:true,
            lowercase:true,
            required:'Email address is required',
            validate:{
                validator:validator.isEmail,
                message:'{VALUE} is not a valid email'
            }
        },
        phone_number: {
            type:String,
            validate: {
                validator: validate_phone_us,
                message: '{VALUE} is not a valid phone number'
            },
            required: 'Phone Number is required'
        },
        address: {
            type: String,
            required: 'Address is required'
        },
        message: {
            type: String,
            required: [true, 'Message is required']
        }
    },
    {
        timestamps: true
    });

function validate_phone_us(v) {
    return validator.isMobilePhone(v, 'en-US')
}

module.exports = mongoose.model('ContactUs',ContactUsSchema);