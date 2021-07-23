var fs = require('fs');

// const directories = ['./client','./openshift','./server']

// directories.map((dir)=>{
//     fs.mkdirSync(dir);
// })

// fs.mkdirSync('client/public');

// fs.readFile('FileContents/client/public/index.html', function(err, data) {
//     fs.appendFile('client/public/index.html', data, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
//   });

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question('What is the name of your project?', (name) => {
//   console.log(`name`, name);
//   readline.close();
// });

//Create gitignore file for the frontend ie "client"
// let consoleSuccess = '\x1b[32m';

// fs.readFile('FileContents/client/.gitignore', function (err, data) {
//   fs.appendFile('client/.gitignore', data, function (err) {
//     if (err) throw err;
//     console.log(consoleSuccess, 'Success client/.gitignore created!');
//   });
// });

// fs.readFile('FileContents/client/package-lock.json', function (err, data) {
//   fs.appendFile('client/package-lock.json', data, function (err) {
//     if (err) throw err;
//     console.log(consoleSuccess, 'Success client/package-lock.json created!');
//   });
// });
// fs.readFile('FileContents/client/package.json', function (err, data) {
//   fs.appendFile('client/package.json', data, function (err) {
//     if (err) throw err;
//     console.log(consoleSuccess, 'Success client/package.json created!');
//   });
// });
// fs.readFile('FileContents/client/README.md', function (err, data) {
//   fs.appendFile('client/README.md', data, function (err) {
//     if (err) throw err;
//     console.log(consoleSuccess, 'Success client/README.md created!');
//     console.log('\x1b[0m', ''); //Reset colors
//   });
// });
