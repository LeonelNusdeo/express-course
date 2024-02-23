// Es lo mismo que abajo (via NodeJS) solo que no necesito
// que esten adentro de una funcion
const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
	let isActive = true;
	const users = [
		{
			id: 1,
			name: "Ryan",
			lastname: "Perez"
		},
		{
			id: 2,
			name: "Joe",
			lastname: "Smith"
		}
	]

	res.render('index', {
		title: 'Index page',
		isActive,
		users
	})
});

router.get('/about', (req, res) => {
	res.render('about')
});

router.get('/posts', async (req, res) => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/posts'
	);
	// console.log(response);
	// Dentro de todo que recibo (lo vi por Terminal), esta el array "data"
	res.render('posts', {
		posts: response.data
	})
});

router.get('/dashboard', (req, res) => {
	res.render('dashboard')
});

module.exports = router;

// Forma de dividir la aplicacion en archivos via NodeJS
//
// function homeRoutes (app) {
// 	app.all('/about', (req, res) => {
// 		res.send('about page')
// 	});
//
// 	app.get('/dashboard', (req, res) => {
// 		res.send('Dashboard page')
// 	});
// }
//
// module.exports = homeRoutes;