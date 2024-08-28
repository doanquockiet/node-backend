const express = require('express')
const router = express.Router();
// khai báo router
router.get('/', (req, res) => {
    res.send('Hello World! with doan quoc kiet')
  })
  
  router.get('/abc', (req, res) => {
      res.render('example.ejs')
    })

module.exports = router;