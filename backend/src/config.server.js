import express from 'express';
import httpProxy from 'http-proxy';

const app = express();
app.use(express.json());
app.post('/config' , (req, res) => {

})

export default app;