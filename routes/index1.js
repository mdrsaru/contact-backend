const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router()
let Todo = require('../models/todo');

router.use(
  bodyParser.urlencoded({
    extended: true
  })
)


router.get('/hello', (req, res) => {
  res.render('hello')
})

router.get('/addTodo', (req, res) => {
  res.render('addTodo')
})

router.get('/fetch', (req, res) => {
  // res.send('This is from fetch route')
  console.log('This is from fetch route')
  User.find((err, docs) => {
    if (!err) {
      console.log(docs);
      res.send(JSON.stringify({ docs }));
    } else {
      res.send("Error");
    }
  });
})


router.post('/add', (req, res) => {
  console.log(req.body)

  const id = req.body.id;
  console.log(id)
  console.log('This is from fetch route 1')
  // res.send({
  //   id,
  //   name:req.body.name,
  //   address:req.body.address,
  //   detail:req.body.detail,
  // })

  // var todo = new Todo({
  //   task: req.body.name,
  //   id: req.body.id,
  // });
  // console.log(todo)

})

// var promise = Todo.save({
//   task: req.body.name,
//   id: req.body.id,
// });
// promise.then((todo) => {
//   console.log("Todo saved");
//   res.send(todo)
//   // res.redirect("/");
// });


router.get("/getById", function (req, res) {
  Todo.findById(req.body.id, (err, docs) => {
    if (err) {
      console.log(err, 'err')
    }
    else {
      console.log(docs, 'docs')
      res.send(docs)
    }
  })
});

router.get('/editForm/:id', (req, res) => {
  console.log(req.params)
  Todo.findById({ _id: req.params.id }, (err, docs) => {
    console.log(docs)

    if (err) {
      console.log(err)
    }
    else {
      console.log(docs, 'docs')
      res.render('editForm',{data:docs})

    }
  })
})

router.post("/edit", (req, res) => {
  console.log("edittask", req.body.id);

  console.log("edit click");
  console.log(req.body);
  Todo.findOneAndUpdate(
    { _id: req.body.id },
    { $set: { name: req.body.name, deadline: req.body.deadline ,points:req.body.points} },
    function (err, task) {
      res.redirect('/todos')
    }
  );
});

router.get("/delete/:id", (req, res) => {
  Todo.findOneAndRemove({ _id: req.params.id }, function (err, task) {
    console.log(err);
    // res.send(task)
    res.redirect("/todos")
  });
});

router.delete("/delete", (req, res) => {
  console.log("delete");
  TaskId = req.body.id;
  console.log("ac", TaskId);
  Todo.findOneAndRemove({ _id: TaskId }, function (err, task) {
    console.log(err);
    console.log(task);
    console.log("deleteTask");
    res.send(task)
  });
});
module.exports = router;