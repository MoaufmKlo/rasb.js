/* 
    Test to get JSON of banned users and log each Discord user id
*/

const rasb = require("rasb.js");
const RASB = new rasb();

RASB.getBans().then((bans) => {
    bans.forEach(function(ban) { // Loop through all bans
        console.log(ban.id); // Log Discord user id of the ban
    });
}).catch(function(err) {
    throw err;
});