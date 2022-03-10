let path=require("path");
// let extensionName=path.extname("/home/rohit/Desktop/FJP 6 WEBDEV/module 2/nodejs/path.js");
//console.log(extensionName);
//let baseName=path.basename(__filename);
//console.log(baseName);
let dirPath=__dirname;
console.log(dirPath);

let newFilePath=path.join(dirPath,"test.js");
console.log(newFilePath);
