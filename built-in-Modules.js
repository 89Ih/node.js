var os = require("os");
var path = require("path");
var fs = require("fs");


const operationSystem = {
    Platform: os.platform(),
    Architecture: os.arch(),
    Userinfo: os.userInfo(),
    System_Uptime: os.uptime(),
    Name: os.type(),
    release: os.release(),
    total_memory: os.totalmem(),
    free_memory: os.freemem(),
};
//console.log(operationSystem);
const path_infos = {
    pathsep: path.sep,
    file_path: path.join("/content", "subcontent", "text.txt"),
    absolute: path.resolve(__dirname, "content", "subcontent", "text.txt"),
};
//console.log(path_infos);
//console.log(path.basename(path_infos.file_path));

//  use this method for read file sync :
const {readFileSync, writeFileSync} = require("fs");
const first = readFileSync("../Express.js/content/firsttext.txt","utf-8");
const second = readFileSync("../Express.js/content/secondtext.txt","utf-8");
const rfs =writeFileSync("../Express.js/content/thirdtext.txt",`Here is copy of Secondtext: ${second}`,{flag:"a"});
////////////////////////////////////////
//use this method for read file with callback :
const {readFile, writeFile} = require("fs");
readFile("../Express.js/content/secondtext.txt","utf-8", (err, result) => err ? err:console.log(result))