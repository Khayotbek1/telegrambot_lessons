const fs = require("fs");
// fs.mkdir("./index.js", {}, (err) => {
//   if (!err) {
//     console.log("new file");
//   }
// });

// fs.rmdir("./index.js", (err) => {
//   console.log(err);
// });

// fs.writeFile("test.txt", "test", {}, (err) => {
//   console.log(err);
// });

// fs.rm("./test", (err) => {
//   console.log(err);
// }

// const result = fs.existsSync("./test.txt");
// console.log(result);

fs.readFile("./test.txt", { encoding: "UTF-8" }, (err, data) => {
  console.log(err, data);
});
