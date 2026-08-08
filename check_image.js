const fs = require('fs');
const image = fs.readFileSync('public/screenshot.png');
// Let's just output the file size
console.log('Size:', image.length);
