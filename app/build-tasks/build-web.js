const fs = require('fs');
const path = require('path');
const deleteAssets = () =>
    Promise.all([
        fs.promises.rmdir(path.join(__dirname, '../dist/assets/Android'), { recursive: true, force: true }),
        fs.promises.rmdir(path.join(__dirname, '../dist/assets/iOS'), { recursive: true, force: true }),
    ]);
deleteAssets();