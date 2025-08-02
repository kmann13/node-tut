// Path module 

const path = require('path');

console.log(path.sep);

// path.join() joins files paths 
const filePath = path.join('/content/', 'subfolder', 'test.txt');

console.log(filePath);

// path.basename() for base path to file in folder 
const base = path.basename(filePath)

console.log(base);

// path.resolve() for absolute path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute); 
