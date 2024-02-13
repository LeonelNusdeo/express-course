const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.get('/miarchivo', (req, res) => {
	res.sendFile('./javascript.png', {
		root: __dirname
	})
})

app.get('/user', (req, res) => {
	res.json({
		"name": "leonel",
		"lastname": "nusdeo",
		"age": 40,
		"points": [1, 2, 3],
		"address": {
			"city": "Capital Federal",
			"street": "Calle"
		}
	})
})

app.get('/isAlive', (req, res) => {
	res.sendStatus(204)
})

app.listen(3000);
console.log(`Server on port ${3000}`);
