const asyncHandler = require("express-async-handler");
const User = require("../db/User.js");

const PublicData = asyncHandler(async (req, res) => {
    const [user] = await User.find();
    // console.log(user)
    res.status(200).json({
        gallery: user.gallery,
        feeStructure: user.feeStructure,
        booklist: user.booklist,
        frontImages: user.frontImages,
        staffInfo: user.staffInfo,
        contactDetails: user.contactDetails,
      });

  })


module.exports =  PublicData ;