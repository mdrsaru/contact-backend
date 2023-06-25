var express = require("express");
const bodyParser = require("body-parser");
var router = express.Router();
const ContactController = require("../controller/contactController")();

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


router.get('/contacts',ContactController.getAll)
router.post('/contact',ContactController.create)
router.put('/contact',ContactController.update)
router.delete('/contact/:id',ContactController.deleteContact)


module.exports = router;