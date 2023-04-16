// Web-Server code

const express = require('express');
const app = express();

// Set the view engine to EJS

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// render the separate pages (also allowing for absolute urls)

app.get('/', (req, res) => {
	res.render('pages/index');
})

app.get('/cam', (req, res) => {
	res.render('pages/cam');
})

app.get('/courses', (req, res) => {
	res.render('pages/courses');
})

app.get('/chat', (req, res) => {
	res.render('pages/chat');
})
app.get('/Carbonfootprint', (req, res) => {
	res.render('pages/Carbonfootprint');
})
app.get('/donate', (req, res) => {
	res.render('pages/donate');
})
app.get('/game',(req, res) => {
	res.render('pages/game');
})
// Initiate the server on port 8080

app.listen(80)