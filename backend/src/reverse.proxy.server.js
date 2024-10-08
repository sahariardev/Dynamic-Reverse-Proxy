import express from 'express';
import httpProxy from 'http-proxy';
import cookieParser from 'cookie-parser';
import {getConfig} from "./config.service.js";
import cors from 'cors';

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(cookieParser());
const proxy = httpProxy.createProxy({});

app.use('/', (req, res, next) => {
    const url = req.originalUrl;
    if (url.startsWith('/reverseProxyStatus')
        || url.startsWith('/reverseProxyError')
        || url.startsWith('/reverseProxySetCookie')) {
        next();
        return;
    }

    const workingFeature = req.cookies.feature || 'default';

    console.log(workingFeature);

    let rules = getConfig(workingFeature);

    if (!rules) {
        res.redirect('/reverseProxyError');
        return;
    }

    let target = '';

    let defaultRule = null;
    let targetRule = null;

    for (const rule of rules) {
        if (rule.url === '/') {
            defaultRule = rule;
        }

        if (targetRule == null && url.startsWith(rule.url)) {
            targetRule = rule;
        }
    }

    if (targetRule == null) {
        targetRule = defaultRule;
    }

    if (targetRule == null) {
        res.redirect('/reverseProxyError');
        return;
    }

    return proxy.web(req, res, {target: targetRule.host, changeOrigin: true}, (error) => {
        res.redirect('/reverseProxyError');
    });
});

app.get('/reverseProxyError', (req, res) => {
    return res.json({
        message: 'server is not up. Please set proper configuration'
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


export default app;