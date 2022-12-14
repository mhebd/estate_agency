const express = require('express');
const { private, limited } = require('../middleware/auth');
const { findAll, createOne, updateOne, deleteOne, findOne } = require('../controler/service');
const router = express.Router();

router.route('/')
	.get(findAll)
	.post(private, limited('admin'), createOne);

router.route('/:id')
	.get(findOne)
	.put(private, limited('admin'), updateOne)
	.delete(private, limited('admin'), deleteOne);

module.exports = router;
