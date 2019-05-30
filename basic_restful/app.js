const Logger = require('./logger');
const logger = new Logger();

const http = require("http");
const server = http.createServer();

const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

const port = process.env.PORT || 3000;


movies = [
	{
		id: 0, 
		name: "Princess Bride",
		director: "Steven Spielberg",
		release: 1980,
		added: "2019-05-29"
	},
	{
		id: 1,
		name: "Iron Man",
		director: "Jon Favereaux",
		release: 2008,
		added: "2019-05-29"
	},
	{
		id: 2,
		name: "Excalibur",
		director: "Jad Giliani",
		release: 2025,
		added: "2019-05-20"
	}
];


app.get('/', (req, res) => {
	res.send('Welcome to Aman\'s Movies!'); //TODO: Update this with an HTML file send.
});

app.get('/movies', (req, res) => {
	res.send(movies);
});

app.get('/movie::id', (req, res) => { //localhost:3000/movie:3
	req.params.id = parseInt(req.params.id);
	if(req.params.id >= movies.length) {
		res.status(400).send('Movie not found');
	}
	else {
		console.log('req.params.id is of type: ' + typeof(req.params.id));
		res.send(movies[req.params.id]);
	}
});

app.post('/movies', (req, res) => {
	result = validateMovie(req.body);
	if(result.error){
		res.status(400).send(result.error);
		return;
	}
	newMovie = {
		id: movies.length,
		name: req.body.name,
		director: req.body.director,
		release: parseInt(req.body.release),
		added: req.body.added
	};
	movies.push(newMovie);
	console.log(movies[movies.length-1]);
	res.send(newMovie);
	
});

function validateMovie(movie){
	const schema = {
		name: Joi.string().required(),
		director: Joi.string().required(),
		release: Joi.number().required(),
		added: Joi.string().required()
	}

	const result = Joi.validate(movie, schema);
	return result;
		
}


app.listen(3000, () => {
	console.log('Listening on port ' + port);
});

//logger.on('asdf', function(arg){
//	console.log('hello aman');
//});

//logger.log('asdf', {});
