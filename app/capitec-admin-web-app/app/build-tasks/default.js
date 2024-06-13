const Config = require('cordova-config');
const fs = require('fs');
const path = require('path');
(async () => {
    const config = new Config(path.join(__dirname, '../config.xml'));
    config.setVersion(JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json'), 'utf-8')).version);
    await config.write();
})();