const express = require('express');
const multer = require('multer');
const path = require('path');
const { private, limited } = require('../middleware/auth');
const {
  findAll,
  createOne,
  updateOne,
  deleteOne,
  findOne,
} = require('../controler/testimonial');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/testimonials'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router
  .route('/')
  .get(findAll)
  .post(private, limited('admin'), upload.single('avatar'), createOne);

router
  .route('/:id')
  .get(findOne)
  .put(private, limited('admin'), upload.single('avatar'), updateOne)
  .delete(private, limited('admin'), deleteOne);

module.exports = router;
