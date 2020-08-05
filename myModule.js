let count = 0;

const inc = () => {
    console.log("Incrementing count");
    ++count;
}
const dec = () => {
    console.log("Decrementing count");
    --count;
}
const getCount = () => console.log(`Count is: ${count}`);

module.exports = {
    inc,
    dec,
    getCount
};