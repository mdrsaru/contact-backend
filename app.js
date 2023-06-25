let express = require ('express')
let mongoose = require("mongoose");
const cors = require('cors');

let contactRoute = require('./routes/contactRoute');
const constants = require("./config/constants");

let app = express()
app.use(express.json())
app.use(cors({   
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
const options = {
  autoIndex:true,
}
mongoose.connect("mongodb://127.0.0.1:27017/ContactApp",options)
var db = mongoose.connection;

db.once("open", () => {
  console.log("Mogodb is connected sucessfully");
});

const port = constants.port;

app.use('/',contactRoute)

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = app;