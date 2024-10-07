import express from 'express';
import {getAllConfigs, removeConfig, setConfig} from "./config.service.js";
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();

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

app.post('/deleteConfig', (req, res) => {
    const featureName = req.body.featureName;
    removeConfig(featureName);

    res.json({
        message: 'Success'
    });
});

app.post('/selectConfig', (req, res) => {
    const featureName = req.body.featureName;
    const portForReverserProxyServer = process.env.REVERSE_PROXY_SERVER_PORT || 443;

    const host = req.get('host').split(":")[0];

    const url = `${req.protocol}://${host}:${portForReverserProxyServer}/reverseProxySetCookie?feature=${featureName}`
    res.json({
        message: url
    });
});

app.get('/allConfigs', (req, res) => {
    res.json(getAllConfigs());
});

export default app;