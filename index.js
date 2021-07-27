var fs = require("fs");

// const directories = ['./client','./openshift','./server']

// directories.map((dir)=>{
//     fs.mkdirSync(dir);
// })

// fs.mkdirSync('client/public');

// fs.readFile('TemplateContents/client/public/index.html', function(err, data) {
//     fs.appendFile('client/public/index.html', data, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
//   });

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is the name of your project?", (name) => {
  readline.question("What should we call your first database?", (dbname) => {
    readline.question(
      "What should we call your first database table?",
      (dbtname) => {
        // console.log(`name`, name);
        // var child_process = require("child_process");
        // console.log("child_process :>> ", child_process);
        // child_process.execSync(`npx create-next-app ${name}`, { stdio: [0, 1, 2] });

        // Server configuration

        // fs.readFile('TemplateContents/server/index.js', 'utf8', function (err,data) {
        //   if (err) {
        //     return console.log(err);
        //   }
        //   var result = data.replace(/\$name/g, name);

        //   fs.appendFile('server/index.js', result, 'utf8', function (err) {
        //      if (err) return console.log(err);
        //   });
        // });

        // Database config file
        fs.readFile(
          "TemplateContents/server/database.sql",
          "utf8",
          function (err, data) {
            const mapObj = {
              $dbname: dbname,
              $dbtname: dbtname,
            };

            let databaseReplacements = data.replace(
              /\$dbname|\$dbtname/gi,
              (matched) => mapObj[matched]
            );

            if (err) {
              return console.log(err);
            }

            fs.appendFile(
              "server/database.sql",
              databaseReplacements,
              "utf8",
              function (err) {
                if (err) return console.log(err);
              }
            );
          }
        );
        readline.close();
      }
    );
  });
});

// fs.readFile('TemplateContents/server/database.sql', function (err, data) {
//   fs.appendFile('server/database.sql', data, function (err) {
//     if (err) throw err;
//     console.log(consoleSuccess, 'Success client/.gitignore created!');
//   });
// });

// fs.readFile('TemplateContents/server/index.js', function (err, data) {
//   fs.appendFile('server/index.js', data, function (err) {
//     if (err) throw err;
//     console.log(consoleSuccess, 'Success client/.gitignore created!');
//   });
// });

//Create gitignore file for the frontend ie "client"
// let consoleSuccess = '\x1b[32m';

// fs.readFile('TemplateContents/client/.gitignore', function (err, data) {
//   fs.appendFile('client/.gitignore', data, function (err) {
//     if (err) throw err;
//     console.log(consoleSuccess, 'Success client/.gitignore created!');
//   });
// });

// fs.readFile('TemplateContents/client/package-lock.json', function (err, data) {
//   fs.appendFile('client/package-lock.json', data, function (err) {
//     if (err) throw err;
//     console.log(consoleSuccess, 'Success client/package-lock.json created!');
//   });
// });
// fs.readFile('TemplateContents/client/package.json', function (err, data) {
//   fs.appendFile('client/package.json', data, function (err) {
//     if (err) throw err;
//     console.log(consoleSuccess, 'Success client/package.json created!');
//   });
// });
// fs.readFile('TemplateContents/client/README.md', function (err, data) {
//   fs.appendFile('client/README.md', data, function (err) {
//     if (err) throw err;
//     console.log(consoleSuccess, 'Success client/README.md created!');
//     console.log('\x1b[0m', ''); //Reset colors
//   });
// });
