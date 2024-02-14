const express = require('express');

const app = express();

app.get('/hello/:username', (req, res) => {
	console.log(typeof req.params.username);
	res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
	const {x, y} = req.params;
	const result = parseInt(x) + parseInt(y);
	res.send(`Result: ${result}`)
})

app.get('/users/:username/photo', (req, res) => {
	if (req.params.username === 'leonel') {
		return res.sendFile('./javascript.png', {
			root: __dirname
		})
	}
	res.send('el usuario no tiene acceso')
})
// Si NO le pongo el RETURN, siempre va a mostrar "el usuario no tiene acceso"
// sin importar que el endpoint este bien

// https://stackoverflow.com/questions/9267643/if-return-vs-if-else-efficiency
// Podria ser un if (condition) { ... } else { ... }
// Pero por READABILITY se suele usar mas:
// if (condition) { return ... }
// o mayormente se usa if (!condition) { return; } ... happy flow

app.get('/name/:name/age/:age', (req, res) => {
	res.send(`El usuario ${req.params.name} tiene ${req.params.age} años`)
})

app.listen(3000);
console.log(`Server on port ${3000}`);
