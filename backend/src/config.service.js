
const cookieMap = new Map();

export function setConfig(cookieName, rules) {
    cookieMap.set(cookieName, rules);
}

export function getConfig(cookieName) {
    return cookieMap.get(cookieName);
}

export function getAllConfigs() {
    return  Array.from(cookieMap, ([key, value]) => ({
        featureName: key,
        rules: value
    }));
}