// Es lo mismo que abajo (via NodeJS) solo que no necesito
// que esten adentro de una funcion
const express = require('express');

const router = express.Router();

router.all('/about', (req, res) => {
	res.send('about page')
});

router.get('/dashboard', (req, res) => {
	res.send('Dashboard page')
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