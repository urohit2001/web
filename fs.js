let fs=require("fs");
let path=require("path");
let filepath=path.join(__dirname,"file.txt");
fs.writeFileSync(filepath,"content inside the newly created file");
console.log(file.txt);