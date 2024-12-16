const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')

const app = express()
 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 
const port = 3000
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/');
const Users = mongoose.model('Users', { username: String, password:String });

app.get('/', (req, res) => {
  res.send('Hi  OLX  Developer!')
})

app.post('/signup',(req,res)=>{
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  const user = new Users({ username:username,password:password });
  user.save().then(() =>{
    res.send({message:'saved success.'})
  })
  .catch(()=>{
    res.send({message:'server err'})
  })
})

app.post('/Loginn',(req,res)=>{
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  Users.findOne({username:username})

.then((result) =>{
  console.log(result,"user data")
  if(!result){
    res.send({message:'user not found. '})
  }
  else{
    if(result.password==password){
      const token=jwt.sign({
        data: result
      }, 'MYKEY', { expiresIn: '1h'});
      res.send({message:'Find Success.',token:token})
    }
    if(result.password!=password){
      res.send({message:'password Incorrect'})
    }
  }
  })
  .catch(()=>{
    res.send({message:'server err'})
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})