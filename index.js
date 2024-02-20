const express = require('express');
const morgan = require('morgan');

const app = express();

// Settings
app.set('case sensitive routing', true);
app.set('appName', 'Express Course');
app.set('port', 4000);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/username', (req, res) => {
	res.send('Username route')
})

app.get('/profile', (req, res) => {
	console.log(req.body);
	res.send('profile page')
})

app.all('/about', (req, res) => {
	res.send('about page')
})

// El orden IMPORTA. Si este middleware estuviera arriba de todo
// en todas las rutas se validaria login
// Asi se requiere solo en /dashboard pero no en /profile ni /about
// app.use((req, res, next) => {
// 	if (req.query.login === 'leonel@mail.com') {
// 		next()
// 	} else {
// 		res.send('No autorizado')
// 	}
// })

app.get('/dashboard', (req, res) => {
	res.send('Dashboard page')
})

app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);
