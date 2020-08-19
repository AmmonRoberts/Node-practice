const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Ammon\n")
questionApp.stdin.write("Beans\n")
questionApp.stdin.write("Eat\n")

questionApp.stdout.on("data", data => {
    console.log(`From the question app: ${data}`)
})

questionApp.on("close", () => {
    console.log("questions.js process exited")
})