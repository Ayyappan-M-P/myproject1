const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/login-tut", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  


const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true
  }
});

const collection = mongoose.model("data", loginSchema);

module.exports = collection;

/*const mongoose = require("mongoose");
const connect=mongoose.connect("mongodb://localhost:27017/login-tut");
connect.then(()=>{
    console.log("Database connect succcessfully");
})
.catch(()=>{
    console.log("Database cannot connect successfully");
});
const loginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});
const collection=new mongoose.model("login",loginSchema);
module.exports=collection;*/