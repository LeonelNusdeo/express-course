const mysql = require('mysql2/promise');

async function connectDB() {
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'expressdb',
		ssl: {
			rejectUnauthorized: false
		}
	})

	const result = await connection.query('SELECT "Hello world" AS Result');
	console.log(result);
};

module.exports = connectDB;