const collectAnswers = require("./lib/collectAnswers")

const questions = ["What is your name? ", "What is your favorite color? ", "How old are you? "];

const answerEvents = collectAnswers(questions)

answerEvents.on("answer", answer => console.log(`Question answered: ${answer}`))

answerEvents.on("complete", answers => {
    console.log("Your answers are: ");
    console.log(answers);
})

answerEvents.on("complete", () => process.exit())