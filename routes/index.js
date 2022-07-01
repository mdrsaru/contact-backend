var express = require("express");
const bodyParser = require("body-parser");
var router = express.Router();
let Todo = require('../models/todo')

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

router.get("/add", function (req, res) {
  res.render("addTodo");
});

router.get('/sendData',function(req,res){
  res.render("showData",{name:"Test todo1",deadline:"2022-04-19"})
})
router.get("/todos", function (req, res) {

  Todo.find((err, docs) => {
    if (err) {
      //console.log(err, 'err')
    }
    else {
      //console.log(docs, 'docs')
      res.render("showData",{datas:docs})
    }
  })
});

router.post("/add", (req, res) => {
  //console.log(req.body);

  let todo = new Todo({
    name: req.body.name,
    deadline: req.body.deadline,
    points: req.body.points
  })

  var promise = todo.save();
  promise.then((todo) => {
    //console.log("Todo saved");
    res.send("todo saved")
  })
});

router.get("/getById", function (req, res) {

  Todo.findById({ _id: req.body.id }, (err, docs) => {
    const str = 'The quick brown fox, jumps over the lazy dog.';


    const words = str.split(',');
    //console.log(words);
    var date = new Date(docs.deadline);
    // //console.log(date.toLocalDateString())
    let data = date.toISOString().split('T');
    //console.log(data[0])
    const data1 = date.toDateString();
    const data2 = date.toLocaleDateString()
    const data3 = date.toUTCString()
    //console.log(data1,data2,data3)
    if (err) {
      //console.log(err, 'err')
    }
    else {
      // //console.log(docs,'docs')
      res.send(docs)

    }
  })
});


router.get('/getOne', function (req, res) {
  Todo.findOne({ name: req.body.name }, (err, docs) => {
    //console.log(docs)

    if (err) {
      //console.log(err)
    }
    else {
      //console.log(docs, 'docs')
      res.send(docs)
    }
  })
})
router.get('/editTodo/:id',(req,res)=>{
  //console.log(req.params.id)
  Todo.findOne({ _id: req.params.id }, (err, docs) => {
    //console.log(docs)

    if (err) {
      //console.log(err)
    }
    else {
      //console.log(docs, 'docs')
      // res.render('editTodo',{docs:docs})

    }
  })
})
router.post('/edit', (req, res) => {
  //console.log('edit',req.body)
  Todo.findOneAndUpdate(
    { id: req.body.id },
    { $set: { deadline: req.body.deadline } },
    function (err, docs) {
      if (err) {
        //console.log(err)
      }
      else {
        //console.log(docs);
        res.send(docs)
      }
    })
})
router.get('/delete/:id', (req, res) => {
  //console.log('delete',req.params)
  Todo.deleteOne({ id: req.params.id }, function (err, docs) {
    if (err) {
      //console.log(err)
    }
    else {
      //console.log(docs);
      res.redirect('/todos')
    }
  })
})

router.get('/delete', (req, res) => {
  //console.log('delete')
  Todo.deleteMany({ name: req.body.name }, function (err, docs) {
    if (err) {
      //console.log(err)
    }
    else {
      //console.log(docs);
      res.send(docs)
    }
  })
})


module.exports = router;
