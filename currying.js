const userLogs = userName => userMessage => console.log(`${userName} : ${userMessage}`);

const traditionalUserLogs = function(userName) {
    return function(userMessage) {
        console.log(`${userName} : ${userMessage}`);
    }
}

const log = userLogs("grandpa23");
const log2 = traditionalUserLogs("grandma99");

log("message 1!");
log2("message 2!");
traditionalUserLogs("hyojae")('hello, world!');