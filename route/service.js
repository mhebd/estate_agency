const express = require('express');
const { private, limited } = require('../middleware/auth');
const { findAll, createOne, updateOne, deleteOne } = require('../controler/service');
const router = express.Router();

router.route('/').get(findAll).post(private, limited, createOne);
router.route('/:id').put(private, limited, updateOne).delete(private, limited, deleteOne);

module.exports = router;