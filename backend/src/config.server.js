import express from 'express';
import {getAllConfigs, setConfig} from "./config.service.js";
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

app.get('/allConfigs', (req, res) => {
    res.json(getAllConfigs());
});

export default app;