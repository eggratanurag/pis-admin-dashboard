const asyncHandler = require("express-async-handler");
const User = require("../db/User.js");

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() });

  if (user && password) {
    if (req.session.userId) {
      if (req.session.userId === user.id) {
        console.log("authenticated");
        res.status(200).json("authenticated");
      }
    } else {
      if (user && (await user.password) === password) {
        console.log("just logged in");
        req.session.userId = user.id;
        res.status(200).json(user.id);
      } else {
        
        res.status(403).json("Invalid Email or Password");
      }
    }
  } else {
    res.status(401).json("email doesnt exist");
  }
});

module.exports = { authUser };
