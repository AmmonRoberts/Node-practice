const fs = require("fs");

const readStream = fs.createReadStream("./assets/hello.txt", "UTF-8");

let fileText = "";

console.log("type something...")
readStream.on("data", data => {
    console.log(data.toString())
    fileText += data;
})


readStream.on("end", () => {
    console.log("\n\n\nEOF");
    console.log(`File has length of ${fileText.length-1}`)
})