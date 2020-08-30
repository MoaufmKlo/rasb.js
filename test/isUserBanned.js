/* 
    Test to check if a specific Discord user id is banned
*/
const rasb = require("rasb.js");
const RASB = new rasb();

RASB.isUserBanned("329991150712651776").then((isUserBanned) => {
    if(isUserBanned) {
        console.log("User is banned");
    } else {
        console.log("User is not banned")
    }
});