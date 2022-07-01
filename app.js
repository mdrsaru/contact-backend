let http = require("http");
let express = require ('express')
let mongoose = require("mongoose");
let ejs = require('ejs');

// let index = require('./routes/index');
let userRoute = require ('./routes/userRoute')

let todoRoute = require('./routes/todoRoute')

let app = express()
const port = 8081;

const options = {
  autoIndex:true,
}
mongoose.connect("mongodb://127.0.0.1:27017/TodoApp",options)
var db = mongoose.connection;

db.once("open", () => {
  console.log("Mogodb is connected sucessfully");
});

app.use('/',todoRoute)
app.use('/user', userRoute)

app.use(express.static(__dirname + '/public'));

app.set('views',__dirname+'/view')
app.engine('ejs',ejs.renderFile);
app.set('view engine','ejs')


// app.set('views', __dirname + '/views')
// app.engine('ejs', ejs.renderFile);
// app.set('view engine', 'ejs');


app.listen(port, () => {
  //console.log(`Listening to port ${port}`);
});

module.exports = app;