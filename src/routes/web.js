const express = require('express')
const router = express.Router();
const {getHomepage, getABC,postCreateUser,getCreatePage,getUpdatePage} = require('../controllers/homeController')
// khai báo router
router.get('/', getHomepage);
 router.get('/abc', getABC)

 router.get('/create', getCreatePage)

 router.get('/update/:id', getUpdatePage)

 router.post('/create-user', postCreateUser)

module.exports = router;