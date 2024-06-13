const fs = require('fs');
const path = require('path');
const wwwPath = path.join(__dirname, '../www');
if (!fs.existsSync(wwwPath)) {
    fs.mkdirSync(wwwPath);
}