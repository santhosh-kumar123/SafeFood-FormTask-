const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");


mongoose.connect("mongodb://0.0.0.0:27017/SFSformData", err => {
  if (err) console.log(err);
  console.log("Database connected succesfully");
});


const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/signup", (request, response) => {
  const { firstname, lastname, email, password } = request.body;
  let data = { firstname, lastname, email, password };

  User.findOne({ email: email }, async (error, user) => {
    if (user) {
      response.send({ message: "Entered Email already Registered" });
    } else {
      await User({ ...request.body }).save(error => {
        if (error) {
          response.json({ message: "Enter the Valid Input",data });
        } else {
          response.send({
            message: "Sign Up Successfull, Please Signin now.",
            user,
          });
        }
      });
    }
  });
});

app.post("/", (request, response) => {
  const { email, password } = request.body;
  User.findOne({ email: email }, (error, user) => {
    if (user) {
      if (password === user.password) {
        response.send({ message: "login successful", user: user });
      } else {
        response.send({ message: "Please enter the Valid Password" });
      }
    } else {
      response.send({ message: "user not registered, please Sign Up!" });
    }
  });
});

app.listen(5000, () => {
  console.log("Backend started at Port: 5000");
});
