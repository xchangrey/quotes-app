const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(__direname + '/index.html'));

app.listen(3000, function(){
	console.log('hooray! server running on port 3000');
});