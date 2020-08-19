const cp = require("child_process")

cp.exec("node writeStream", (err, data, e) => {
    console.log(e);
})