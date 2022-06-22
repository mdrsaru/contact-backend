let http = require("http");
let express = require ('express')
let mongoose = require("mongoose");
let ejs = require('ejs');

// let index = require('./routes/index');
let index1 = require ('./routes/index1')

let todoRoute = require('./routes/todoRoute')

let app = express()
const port = 8081;


mongoose.connect("mongodb://127.0.0.1:27017/Todo-app");
var db = mongoose.connection;

db.once("open", () => {
  console.log("Mogodb is connected sucessfully");
});

app.use('/',todoRoute)
app.use('/user', index1)

app.use(express.static(__dirname + '/public'));

app.set('views',__dirname+'/view')
app.engine('ejs',ejs.renderFile);
app.set('view engine','ejs')


// app.set('views', __dirname + '/views')
// app.engine('ejs', ejs.renderFile);
// app.set('view engine', 'ejs');


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = app;