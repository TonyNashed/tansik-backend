import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(express.json());

// All API routes under /api
app.use('/api', routes);

export default app;
