/* 
    Test to fetch a report with a specific ID
*/

const rasb = require("rasb.js");
const RASB = new rasb();

RASB.fetchReport("reportId").then((report) => {
    console.log(report);
}).catch(function(err) {
    throw err;
});