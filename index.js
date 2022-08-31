import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './src/routes';

const app = express();

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public/uploads'));

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`CORS-enabled web server listening on port ${process.env.PORT}`);
});
