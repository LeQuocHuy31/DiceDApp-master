var mongoose = require('mongoose');
var db = require('../database');

var UserSchema = new mongoose.Schema({
    Id: String,
    Name: String,
    Email: String,
    Password: String,
});

var user = mongoose.model('user', UserSchema);

module.exports.select = async function(query){
    var banguser = await user.find(query)
    return banguser;
}

module.exports.findUser = async function(query){
    var user = await user.findOne(query)
    return user;
}
module.exports.insert = async function (newuser){
    const us = new user({
        Id:newuser.Id,
        Name:newuser.Name,
        Email:newuser.Email,
        Password:newuser.Password,
    });
    var userData = await us.save();
    return userData;
}