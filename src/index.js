const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const homeRoutes = require ('./routes/home');
const userRoutes = require ('./routes/users');

// Settings
app.set('case sensitive routing', true);
app.set('appName', 'Express Course');
app.set('port', 3000);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Ya no uso funciones para dividir archivos
// (se los paso a Express como middleware)
// los modulos se acoplan a la aplicacion principal
app.use(homeRoutes);
app.use(userRoutes);

// Forma de dividir la aplicacion en archivos via NodeJS
// (llamo a las funciones)
// homeRoutes(app);
// userRoutes(app);

// Routes
// Va al final para que acceda SI NO encontro ninguna ruta
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname,'uploads')));

app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);
