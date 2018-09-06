var api = require("api");

function start_quest(data) {
    timeout(2, function() {
        __start_quest(data["author"], data["permlink"]);
    });
}

function __start_quest(author, permlink) {
    api.start_quest({ 
        "author":author, 
        "permlink":permlink 
    });    
}
