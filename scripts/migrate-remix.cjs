const fs = require('fs');
const path = require('path');

const PATH_ROOT = path.resolve(__dirname, '..');
const PATH_ONEIDA = path.resolve(PATH_ROOT, 'apps', 'learn-oneida')
const PATH_ROUTES = path.resolve(PATH_ONEIDA, 'app', 'routes')

console.log(fs.readdirSync(PATH_ROUTES))
