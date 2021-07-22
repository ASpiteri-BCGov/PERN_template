// var fs = require('fs');

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

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });