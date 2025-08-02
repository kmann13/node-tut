// Syncronous 

const {readFileSync, writeFileSync} = require('fs'); 
console.log('start');

// same as fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf8');

const second  = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync('./content/result-sync.txt',
     `here is the result: ${first}, ${second}`, {flag:'a'});

     console.log('done with the task');
     console.log('starting the next one');