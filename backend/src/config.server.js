import express from 'express';
import {setConfig} from "./config.service.js";
import cors from 'cors';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());

app.post('/config', (req, res) => {
    setConfig(req.body.featureName, req.body.rules);

    res.json({
        message: 'Success'
    });
});

export default app;