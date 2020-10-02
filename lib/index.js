const https = require("https");

class RASB {
    // Get bans
    getBans() {
        return new Promise(function(res) {
            // GET JSON of banned users
            https.get("https://www.rasb.xyz/api/bans", function(res1) {
                var data = "";

                res1.on("data", function(chunk) {
                    data += chunk;
                });

                // Request is complete
                res1.on("end", function() {
                    res(JSON.parse(data).discord); // send bans as parsed JSON
                })
            }).on("error", function(err) {
                res(err.message);
            });
        });
    }

    // Check if user is banned
    isUserBanned(discordUserId) {
        return new Promise(function(res) {
            // GET JSON of banned users
            https.get("https://www.rasb.xyz/api/bans", function(res1) {
                var data = "";

                res1.on("data", function(chunk) {
                    data += chunk;
                });

                // Request is complete
                res1.on("end", function() {
                    var bans = JSON.parse(data).discord;

                    var user = bans.filter(function(user) { // Find user ID
                        return user.id == discordUserId;
                    });

                    if(user[0]) {
                        res(true);
                    } else {
                        res(false);
                    }
                })
            }).on("error", function(err) {
                res(err.message);
            });
        });
    }

    fetchReport(id) {
        return new Promise(function(res) {
            // GET JSON of banned users
            https.get(`https://www.rasb.xyz/api/reports/${id}`, function(res1) {
                var data = "";

                res1.on("data", function(chunk) {
                    data += chunk;
                });

                // Request is complete
                res1.on("end", function() {
                    const parsed = JSON.parse(data);

                    if(parsed.status === 200) {
                        res(parsed.data)
                    } else {
                        res(parsed);
                    }
                    res(JSON.parse(data));
                })
            }).on("error", function(err) {
                res(err.message);
            });
        });
    }
}

module.exports = RASB;