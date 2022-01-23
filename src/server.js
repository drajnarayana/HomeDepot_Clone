const express=require("express");
const userController = require("./controllers/user.controller");
const productController=require("./controllers/product.controller");
const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller");
const addressController=require("./controllers/address.controller")
const connect =require("./configs/db")
const path = require("path");

const static_path=path.join(__dirname,"../public")

const app=express()
app.use(express.json())
app.use(express.static(static_path))

app.set("view engine","ejs")
// app.use(express.urlencoded({extender:true}))
app.use(express.static("public"))
//for landing page
app.get("",(req,res)=>{
    res.render("index");
});

//Product Page
// app.use("/products",productController)

// //for register page
// app.use("/register",registerController);

// //for login page
// app.use("/email_login",loginController);

// app.use("/address",addressController)

// app.use("/users",userController)

// //404 Error Page
// app.get("*",(req,res)=>{
//     res.render("errorPage");
// })



app.listen(process.env.PORT || 2345, async () => {
    try {
      await connect();
      console.log(`Listening to the port ${process.env.PORT || 2345}`);
    } catch (error) {
      console.log("Database is not connected");
      console.log(error.message);
    }
  });
  

module.exports=app;