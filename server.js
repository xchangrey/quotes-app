const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

var db

MongoClient.connect('mongodb://xchangrey:Xchan%401091!@ds137661.mlab.com:37661/quotes-app', {useNewUrlParser: true},(err, client) => {
if(err) return console.log(err)
db = client.db('quotes-app');
app.listen(process.env.PORT || 3000, function(){
	console.log('hooray! server running on port 3000');
});
});

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => res.sendFile(__dirname+"/index.html"));

app.post('/quotes', (req, res) => console.log(req.body));
