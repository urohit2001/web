let cp=require('child_process');
//cp.execFileSync("gnome-calculator");
let content=cp.execSync("node test.js");
console.log("Output of test file: "+content);