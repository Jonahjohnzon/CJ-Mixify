const router = require('express').Router()
const {userData, loginIn} = require('../Controller/controller')

router.post('/createuser', userData)
router.post('/login', loginIn)
module.exports = router