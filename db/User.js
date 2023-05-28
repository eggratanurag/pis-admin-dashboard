
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{type: String, required: true, unique: true},
    password: {type: String, required: true},
    gallery:{type: Array},
    feeStructure: String,
    booklist: String,
    frontImages: {type: Array},
    staffInfo: {type: Array},
    contactDetails: {
        email: String,
        phone1: String,
        phone2: String,
        address: String,
        facebook: String,
        instagram: String,
        twitter: String,

     }
   
},
);


const User = mongoose.model('User', userSchema);
module.exports = User;