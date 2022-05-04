var resultTable = require('../models/result');
module.exports.insert = async function(newResult){
    resultInfo = await resultTable.insert(newResult);
    return resultInfo;
}
module.exports.select = async function (Id_User){
    var resultSelected = await resultTable.select({Id_User:Id_User});
    return resultSelected;
 }