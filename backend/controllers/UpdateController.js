const asyncHandler = require("express-async-handler");
const User = require("../db/User.js");
const express = require("express");
const sessionChecker = require("../middleware/authMiddleware.js");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const { extractPublicId } = require("cloudinary-build-url");


// Configuration

async function imgUploader(img, type) {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  const res = cloudinary.uploader.upload(img);
  res.catch((err) => console.log(err));

  const publicId = (await res).public_id;

  const url = await cloudinary.url(publicId, {
    secure: true,
    width: type === "ldImage" ? 1200 : 800,
    height: type === "ldImage" ? 675 : 800,
    crop: "fill",
    fetch_format: "auto",
    quality: "auto",
  });


  // async function deleteTempFolder() {
  //   try {
  //     const { del } = await import('del');
  //     await del(['../../tmp']);
  //     console.log('Temporary folder deleted successfully!');
  //   } catch (error) {
  //     console.error('Error deleting temporary folder:', error);
  //   }
  // }

  // if (url) {
  //   console.log("url exists")
  //   deleteTempFolder();
  //   // Delete the temporary folder and its contents automatically

  // }
  return url;
}
async function pdfUploader(pdf) {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  const res = cloudinary.uploader.upload(pdf);
  res.catch((err) => console.log(err));

  const publicId = (await res).public_id;

  const url = cloudinary.url(publicId, {
    secure: true,
    transformation: [
      { width: 300, height: 300 },
      { radius: "max" },
      { background: "black" },
    ],
  });
  // if (url) {
  //   console.log("url exists")
  //   // Delete the temporary folder and its contents automatically
  //   import('del')
  //   .then(del => {
  //     // Call the del() function to delete files or directories
  //     return del(['../../tmp']);
  //   })
  //   .then(paths => {
  //     console.log('Temporary folder deleted:', paths);
  //   })
  //   .catch(err => {
  //     console.error('Error deleting temporary folder:', err);
  //   });
  // }

  return url;
}

// router.post("/fee-structure", sessionChecker, async (req, res) => {
//   const user = await User.findById(req.session.userId);
//   res.status(200).json({
//     gallery: user.gallery,
//     feeStructure: user.feeStructure,
//     booklist: user.booklist,
//     frontImages: user.frontImages,
//     staffInfo: user.staffInfo,
//   });
// });

router.put("/gallery", sessionChecker, async (req, res) => {
  try {
    const image = await req.files.image;
    const imgUrl = await imgUploader(image.tempFilePath, "gallery");
    console.log(imgUrl);
    const result = await User.updateOne(
      { _id: req.session.userId },
      { $push: { gallery: { $each: [imgUrl], $slice: -8 } } },
    );
    if (result) {
      const user = await User.findById(req.session.userId);
      res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

router.put("/landing-page-image", sessionChecker, async (req, res) => {
  try {
    const image = await req.files.image;
    const imgUrl = await imgUploader(image.tempFilePath, "ldImage");
    console.log(imgUrl);
    const result = await User.updateOne(
      { _id: req.session.userId },
      { $push: { frontImages: { $each: [imgUrl], $slice: -4 } } },
    );
    if (result) {
      const user = await User.findById(req.session.userId);
      res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

router.put("/fee-structure", sessionChecker, async (req, res) => {
  try {
    const pdf = await req.files.pdf;
    const imgUrl = await pdfUploader(pdf.tempFilePath);
    const result = await User.updateOne(
      { _id: req.session.userId },
      { $set: { feeStructure: imgUrl } },
    );
    if (result) {
      const user = await User.findById(req.session.userId);
      res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json("something went wrong");
  }
});
router.put("/booklist", sessionChecker, async (req, res) => {
  try {
    const pdf = await req.files.pdf;
    const imgUrl = await pdfUploader(pdf.tempFilePath);
    const result = await User.updateOne(
      { _id: req.session.userId },
      { $set: { booklist: imgUrl } },
    );
    if (result) {
      const user = await User.findById(req.session.userId);
      res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json("something went wrong");
  }
});

router.put("/contact", sessionChecker, async (req, res) => {
  const contactData = req.body;

  try {
    const result = await User.updateOne(
      { _id: req.session.userId },
      { $set: { contactDetails: contactData } },
    );
    if (result) {
      const user = await User.findById(req.session.userId);
      res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json("something went wrong");
  }
});

router.put("/staff-member", sessionChecker, async (req, res) => {
  try {
    const memberPhoto = req.files?.photo;
    const memberData = JSON.parse(req.body.data);
    let imgUrl;
    if (memberPhoto) {
      imgUrl = await imgUploader(memberPhoto.tempFilePath, "gallery");
    } else {
      imgUrl =
        "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png";
    }
    memberData.image = imgUrl;
    memberData.id = Date.now() + Math.random();

    const result = await User.updateOne(
      { _id: req.session.userId },
      { $push: { staffInfo: { $each: [memberData], $position: 0 } } },
    );
    if (result) {
      const user = await User.findById(req.session.userId);
      res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

router.put("/staff-member/edit", sessionChecker, async (req, res) => {
  try {
    let memberData;
    if (req.files) {
      const memberPhoto = req.files?.photo;
      memberData = JSON.parse(req.body.data);
      let imgUrl;
      imgUrl = await imgUploader(memberPhoto.tempFilePath, "gallery");
      memberData.image = imgUrl;
    } else {
      memberData = req.body;
    }

    console.log(memberData);
    console.log(req.body);

    const result = await User.updateOne(
      { _id: req.session.userId, "staffInfo.id": memberData.id },
      { $set: { "staffInfo.$": memberData } },
    );
    if (result) {
      const user = await User.findById(req.session.userId);
      res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

router.put("/staff-member/delete", sessionChecker, async (req, res) => {
  try {
    const memberId = req.body.id;
    const result = await User.updateOne(
      { _id: req.session.userId },
      { $pull: { staffInfo: { id: memberId } } },
    );
    if (result) {
      const user = await User.findById(req.session.userId);
      res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

module.exports = router;
