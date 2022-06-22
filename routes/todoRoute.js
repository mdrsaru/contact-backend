var express = require("express");
const bodyParser = require("body-parser");
var router = express.Router();
const TodoController = require("../controller/todoController")();

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


router.get('/todos',TodoController.getAll)
router.get('/createForm',TodoController.createForm)
router.post('/addTodo',TodoController.create)
router.post('/updateTodo',TodoController.update)


module.exports = router;