import express from 'express';
import httpProxy from 'http-proxy';
import {setConfig} from "./config.service.js";

const app = express();
app.use(express.json());
app.post('/config', (req, res) => {
    setConfig(req.body);
    res.json({
        message: 'Success'
    })
})

export default app;