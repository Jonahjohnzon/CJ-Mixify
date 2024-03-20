const router = require('express').Router()
const {userData, loginIn, findFavor, addFavor} = require('../Controller/controller')

router.post('/createuser', userData)
router.post('/login', loginIn)
router.get('/getfavourite/:id', findFavor)
router.post('/add/:id', addFavor)
module.exports = router