// Es lo mismo que abajo (via NodeJS) solo que no necesito
// que esten adentro de una funcion
const express = require('express');

const router = express.Router();

router.get('/username', (req, res) => {
	res.send('Username route')
});

router.get('/profile', (req, res) => {
	console.log(req.body);
	res.send('profile page')
});

module.exports = router;

// Forma de dividir la aplicacion en archivos via NodeJS
//
// function userRoutes (app) {
// 	app.get('/username', (req, res) => {
// 		res.send('Username route')
// 	});
//
// 	app.get('/profile', (req, res) => {
// 		console.log(req.body);
// 		res.send('profile page')
// 	});
// }
//
// module.exports = userRoutes;