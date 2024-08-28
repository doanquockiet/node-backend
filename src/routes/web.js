const express = require('express')
const router = express.Router();
const {getHomepage, getABC} = require('../controllers/homeController')
// khai báo router
router.get('/', getHomepage);
 router.get('/abc', getABC)

module.exports = router;