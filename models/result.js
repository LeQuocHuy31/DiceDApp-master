var mongoose = require('mongoose');
var db = require('../database');

var ResultSchema = new mongoose.Schema({
    Id_User: String,
    Time: String,
    Bet: String,
    Choose: String,
    Result: String,
});

var result = mongoose.model('result', ResultSchema);

module.exports.select = async function(query){
    var tableResult = await result.find(query)
    return tableResult;
}

module.exports.insert = async function (newResult){
    const rs1 = new result({
      Id_User : newResult.Id_User,
      Time : newResult.Time,
      Bet : newResult.Bet,
      Choose : newResult.Choose,
      Result : newResult.Result
    });
    var resultData = await rs1.save();
    return resultData;
}