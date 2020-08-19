const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/new.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/hello.txt", "UTF-8");

readStream.pipe(writeStream)