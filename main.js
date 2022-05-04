
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const user = require("./controllers/usercontroller");
const result = require("./controllers/resultcontroller");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Login
app.post("/dangnhap", async (req,res)=>{
  console.log(req.body);
	email = req.body.Email;	
	password = req.body.Password;
  User = await user.login(email,password);
  if (User){
    console.log(User);
    res.send(User);
  }
});

//Register
app.post("/dangky", async (req,res)=>{
  console.log(req.body);
  id = req.body.Id;
  name = req.body.Name;
	email = req.body.Email;	
	password = req.body.Password;
  User = await user.insert({Id:id,Name:name,Email:email,Password:password});
});

//Save Betting Result
app.post("/luuketqua", async (req,res)=>{
  console.log(req.body);
  id_User = req.body.Id_User;
  time = req.body.Time;
  bet = req.body.Bet;
  choose = req.body.Choose;
  rs = req.body.Result;
  rsInfo = await result.insert({Id_User:id_User,Time:time,Bet:bet,Choose:choose,Result:rs});
});

//Get Betting Result by Id_User
app.get("/layketqua/:idUser", async (req,res)=>{
  var id_User = req.params.idUser;
  var resultList = await result.select(id_User);
  res.send(resultList);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));