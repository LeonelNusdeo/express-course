const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log(`Route: ${req.url} Method: ${req.method}`);
	next()
})

app.get('/profile', (req, res) => {
	res.send('profile page')
})

app.all('/about', (req, res) => {
	res.send('about page')
})

// El orden IMPORTA. Si este middleware estuviera arriba de todo
// en todas las rutas se validaria login
// Asi se requiere solo en /dashboard pero no en /profile ni /about
app.use((req, res, next) => {
	if (req.query.login === 'leonel@mail.com') {
		next()
	} else {
		res.send('No autorizado')
	}
})

app.get('/dashboard', (req, res) => {
	res.send('Dashboard page')
})

app.listen(3000);
console.log(`Server on port ${3000}`);
