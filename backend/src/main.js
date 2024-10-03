import https from 'https'
import dotenv from 'dotenv'
import fs from 'fs';
import configServer from "./config.server.js";
import reverserProxy from "./reverse.proxy.server.js";

dotenv.config();

const REVERSE_PROXY_SERVER_PORT = process.env.REVERSE_PROXY_SERVER_PORT || 443;
const REVERSE_PROXY_CONFIG_SERVER_PORT = process.env.REVERSE_PROXY_CONFIG_SERVER_PORT || 441;

https.createServer({
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem')
}, reverserProxy).listen(REVERSE_PROXY_SERVER_PORT, () => {
    console.log(`Reverse proxy Server started on port ${REVERSE_PROXY_SERVER_PORT}`)
});

https.createServer({
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem')
}, configServer).listen(REVERSE_PROXY_CONFIG_SERVER_PORT, () => {
    console.log(`Config Server started on port ${REVERSE_PROXY_CONFIG_SERVER_PORT}`)
});