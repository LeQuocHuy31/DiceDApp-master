var banguser = require('../models/user');
module.exports.insert = async function(newUser){
    userInfo = await banguser.insert(newUser);
    return userInfo;
}
module.exports.login = async function (email,password){
    var dskh = await banguser.select({Email:email,Password:password});
    if (dskh.length>0)
         return dskh[0];
    return "";
}