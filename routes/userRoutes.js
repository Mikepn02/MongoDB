const express = require('express')
const userController = require('../crud/controllers/userController')
const authController = require('./../crud/controllers/authContoller')
const router = express.Router();
const app = express()


router.post('/signup',authController.signup)
router.get('/getAll',userController.getAllInfo)
// router.post('/create',crudcontroller.createInfo)
router.post('/info2',userController.createInfo)

// .route('/:id')
router.get('/info/:id',userController.getInfo)
router.patch('/update/:id',userController.updateInfo)
router.delete('/delete/:id ',userController.deleteInfo)
router.post('/submit',userController.submitInfo)

module.exports = router