import "dotenv/config";
import mysql from "mysql";

const con = mysql.createConnection({
	host: process.env.DATABASE_URL,
	user: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD
});

export const connectDb = () => {
	return con.connect(function (err) {
		if (err) throw err;
		console.log("Connected to databse successfully");
	});
};