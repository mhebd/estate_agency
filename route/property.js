const express = require('express');
const { private, limited } = require('../middleware/auth');
const { findAll, findOne, createOne, updateOne, deleteOne } = require('../controler/property');
const router = express.Router();

router.route('/').get(findAll).post(private, limited, createOne);
router.route('/:id').get(findOne).put(private, limited, updateOne).delete(private, limited, deleteOne);

module.exports = router;