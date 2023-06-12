const express = require('express')
const router = express.Router()

const {getData, postData, updateData, deleteData, getDataById} = require('../Controllers/httpController')


router.route('/').get(getData).post(postData)
router.route('/:id').put(updateData).delete(deleteData).get(getDataById)

module.exports = router