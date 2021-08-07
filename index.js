import express from "express";
import "dotenv/config";
import { connectDb } from "./models/index.js"

connectDb();
const app = express();

app.get("/search", (req, res) => {
	res.sendStatus(200);
});

app.listen(process.env.PORT, () =>
	console.log(`Server is ready and listening on port ${process.env.PORT}`)
);
