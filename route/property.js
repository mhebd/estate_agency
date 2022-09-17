const express = require('express');
const multer = require('multer');
const path = require('path');

const { private, limited } = require('../middleware/auth');
const {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
  propertyByAgentId,
} = require('../controler/property');
const handlePropertyImages = require('../util/handlePropertyImages');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/properties'));
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
  .post(
    private,
    limited('admin'),
    upload.fields([{ name: 'images', maxCount: 5 }]),
    handlePropertyImages,
    createOne
  );

router
  .route('/:id')
  .get(findOne)
  .put(
    private,
    limited('admin'),
    upload.fields([{ name: 'images', maxCount: 5 }]),
    handlePropertyImages,
    updateOne
  )
  .delete(private, limited('admin'), deleteOne);

router.route('/agents-property/:agentId').get(propertyByAgentId);

module.exports = router;
