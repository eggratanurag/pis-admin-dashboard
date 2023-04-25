const User = require("../db/User.js");

const sessionChecker = async (req, res, next) => {
  // const { email, password } = req.body;
  // console.log(`Session Checker: ${req.session.userId}`.green);

  try {
    // console.log("from middleware",req.files)
    console.log("session", req.session);
    if (req.session.userId) {
      const user = await User.findOne({ _id: req.session.userId });
      if (req.session.userId === user.id) {
    
        next();
      }
    }else {
        res.status(402).json("not logged in")
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = sessionChecker;
