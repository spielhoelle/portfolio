import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import { ApiResponse, Payload } from './interfaces/index.js';

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env

const allowedOrigins = ['http://localhost:1313', 'https://tmy.io'];
const options: cors.CorsOptions = {
	origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());

app.post('/', async (req: Request<{}, {}, Payload>, res: Response) => {
	console.log('req.body', req.body)
	const { contact_name, contact_email, contact_message } = req.body
	try {
		const response = await fetch(`https://api.telegram.org/${TELEGRAM_BOT_TOKEN}/sendMessage`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				'chat_id': TELEGRAM_CHAT_ID,
				"text": `Contact form request from: ${contact_email}`
			})
		});
		if (response.ok) {
			const data = await response.json();
			console.log(`response.data`, data);
			res.json(new ApiResponse(200, JSON.stringify({ ok: data.result.ok, message_id: data.result.message_id })));
		}
	} catch (error) {
		console.log('error', error)
	}
});

app.listen(port, () => {
	console.log(`Wixel-server running at http://localhost:${port}`);
});