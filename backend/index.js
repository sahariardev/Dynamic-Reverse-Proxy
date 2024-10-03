import https from 'https'
import express from 'express';
import dotenv from 'dotenv'
import fs from 'fs';
import httpProxy from 'http-proxy';
import cookieParser from 'cookie-parser';

dotenv.config();

const PORT = process.env.PORT || 443;

const app = express();

app.use(cookieParser());
const proxy = httpProxy.createProxy({});

const cookieMap = new Map();
cookieMap.set('default', [
    {
        key: '/',
        path: 'http://localhost:8001'
    },

]);

cookieMap.set('dataTableTest', [
    {
        key: '/',
        path: 'http://localhost:8000'
    },
]);

app.use('/', (req, res, next) => {

    const workingFeature = req.cookies.feature || 'default';

    console.log(workingFeature);

    const url = req.originalUrl;
    let rules = cookieMap.get('default');

    if (cookieMap.has(workingFeature)) {
        rules = cookieMap.get(workingFeature);
    }

    let target = '';

    let defaultRule = null;
    let targetRule = null;

    for (const rule of rules) {
        if (rule.key === '/') {
            defaultRule = rule;
        }

        if (targetRule == null && url.startsWith(rule.key)) {
            targetRule = rule;
        }
    }

    if (targetRule == null) {
        targetRule = defaultRule;
    }

    if (url.startsWith('/reverseProxyStatus')
        || url.startsWith('/reverseProxyError')
        || url.startsWith('/reverseProxySetCookie')) {
        next();
        return;
    }

    return proxy.web(req, res, {target: targetRule.path, changeOrigin: true}, (error) => {
        res.redirect('/reverseProxyError');
    });
});

app.get('/reverseProxyError', (req, res) => {
    return res.json({
        message: 'server is not up'
    })
});

app.get('/reverseProxyStatus', (req, res) => {
    return res.json({
        message: 'Ok'
    })
});

app.get('/reverseProxySetCookie', (req, res) => {
    const feature = req.query.feature;
    res.cookie('feature', feature, {maxAge: 900000, httpOnly: true});
    res.redirect('/');
});

https.createServer({
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem')
}, app).listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});


