const path = require('path');

const a = path.basename('C:\\temp\myfile.html');
const b = path.dirname('C:\\temp\myfile.html');

console.log(a);
console.log(b);

const a3 = path.extname(__filename)
console.log(__filename,a3);


