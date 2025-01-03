const express = require('express')
const cors = require('cors')
const path=require('path')

const jwt = require('jsonwebtoken');
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
const bodyParser = require('body-parser')

const app = express()
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');
const Users=mongoose.model('Users',{
  username:String,
  password:String,
  likedProducts:[{type:mongoose.Schema.Types.ObjectId,ref:'Products'}]
});
const Products = mongoose.model('Products', { pname: String, pdesc:String,price: String,category: String,pimage: String });


app.get('/', (req, res) => {
  res.send('Hi  OLX  Developer!')
}) 

app.post('/like-product', (req, res) => {
  let productId=req.body.productId;
  let userId=req.body.userId;
  console.log(req.body);
  Users.updateOne({_id:userId},{$addToSet:{likedProducts:productId}})
  .then(() =>{
    res.send({message:'Liked Success.'})
  })
  .catch(()=>{
    res.send({message:'server err123'})
  })
}) 

app.post('/add-product',upload.single('pimage'), (req, res) => {
  console.log(req.body);
  console.log(req.file.path);
  const pname = req.body.pname;
  const pdesc = req.body.pdesc;
  const price = req.body.price;
  const category = req.body.category;
  const pimage = req.file.path;

  const products=new Products({pname,pdesc,price,category,pimage})
  products.save()
  .then(() =>{
    res.send({message:'saved success'})
  })
  .catch(()=>{
    res.send({message:'server err'})
  })
})

app.get('/get-products',(req,res)=>{
  Products.find()
  .then((result)=>{
    console.log(result,"user data")
    res.send({message:' success',products:result})
  })
  .catch((err)=>{
    res.send({message:'server err.....'})
  })
})

app.post('/liked-products',(req,res)=>{
  Users.findOne({_id:req.body.userId}).populate('likedProducts')
  .then((result)=>{
    console.log(result,"user data")
    res.send({message:' success',products:result.likedProducts})
  })
  .catch((err)=>{
    res.send({message:'server err.....'})
  })
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
    res.send({message:'server err122'})
    console.error("Error Details: ", err);
  })
})

app.post('/Loginn',(req,res)=>{
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  // Check if user exists and password matches
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
      res.send({message:'Find Success.',token:token,userId:result._id})
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