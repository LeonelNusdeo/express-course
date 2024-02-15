const express = require('express');

const app = express();

app.all('/info', (req, res) => {
	res.send('server info')
})

// http://localhost:3000/search?q=javascript%20books
// Terminal: { q: 'javascript books' }

// http://localhost:3000/search?user=leonel&user=marcos&user=pedro
// Terminal: { user: [ 'leonel', 'marcos', 'pedro' ] }
// crea un ARRAY con los distintos valores, si el nombre de la variable es repetida
app.get('/search', (req, res) => {
	console.log(req.query);
	if (req.query.q === 'javascript books') {
		res.send('lista de libros de javascript')
	} else {
		res.send('pagina normal')
	}
})

// http://localhost:3000/hello/leonel?user=leonel&age=40
// Terminal: { user: 'leonel', age: '40' }
app.get('/hello/:username', (req, res) => {
	console.log(req.query);
	console.log(req.query.user);
	console.log(req.query.age);
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
