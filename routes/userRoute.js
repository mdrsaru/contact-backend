var express = require("express");
const bodyParser = require("body-parser");
const userController = require("../controller/userController")();
var router = express.Router();
let authenticate = require('../middleware/authentication')
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


router.post('/login',userController.login)
router.get('/users',authenticate,userController.getAll)
router.post('/register',userController.create)


module.exports = router;