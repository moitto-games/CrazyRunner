API = (function() {
    return {
        __handlers:{}
    };
})();

API.open_discussion = function(params, handler) {
    API.__request_call("open_discussion", Object.assign({
        "author":params["author"],
        "permlink":params["permlink"]
    }, handler));
}

API.show_user = function(params, handler) {
    API.__request_call("show_user", Object.assign({
        "username":params["username"]
    }, handler));
}

API.show_votes = function(params, handler) {
    API.__request_call("show_votes", Object.assign({
        "author":params["author"],
        "permlink":params["permlink"]
    }, handler));
}

API.show_replies = function(params, handler) {
    API.__request_call("show_replies", Object.assign({
        "author":params["author"],
        "permlink":params["permlink"]
    }, handler));
}

API.show_tag = function(params, handler) {
    API.__request_call("show_tag", Object.assign({
        "tag":params["tag"]
    }, handler));
}

API.vote = function(params, handler) {
    API.__request_call("vote", Object.assign({
        "author":params["author"],
        "permlink":params["permlink"],
        "weight":params["weight"] || ""
    }, handler));
}

API.reblog = function(params, handler) {
    API.__request_call("reblog", Object.assign({
        "author":params["author"],
        "permlink":params["permlink"]
    }, handler));
}

API.comment = function(params, handler) {
    API.__request_call("comment", Object.assign({
        "parent-author":params["parent-author"],
        "parent-permlink":params["parent-permlink"],
        "permlink":params["permlink"] || "",
        "body":params["body"] || ""
    }, handler));
}

API.delete_comment = function(params, handler) {
    API.__request_call("delete_comment", Object.assign({
        "parent-author":params["parent-author"],
        "parent-permlink":params["parent-permlink"],
        "permlink":params["permlink"]
    }, handler));
}

API.follow = function(params, handler) {
    API.__request_call("follow", Object.assign({
        "following":params["following"]
    }, handler));
}

API.unfollow = function(params, handler) {
    API.__request_call("unfollow", Object.assign({
        "following":params["following"]
    }, handler));
}

API.mute = function(params, handler) {
    API.__request_call("mute", Object.assign({
        "following":params["following"]
    }, handler));
}

API.unmute = function(params, handler) {
    API.__request_call("unmute", Object.assign({
        "following":params["following"]
    }, handler));
}

API.transfer = function(params, handler) {
    API.__request_call("transfer", Object.assign({
        "to":params["to"], 
        "coin":params["coin"] || "SBD",
        "currency":params["currency"] || "KRW",
        "amount-type":params["amount-type"] || (params["coin"] || "SBD"),
        "amount":params["amount"] || ""
    }, handler));
}

API.delegate = function(params, handler) {
    API.__request_call("delegate", Object.assign({
        "to":params["to"], 
        "coin":params["coin"] || "SP", 
        "amount":params["amount"] || ""
    }, handler));
}

API.undelegate = function(params, handler) {
    API.__request_call("undelegate", Object.assign({
        "from":params["from"],
        "coin":params["coin"] || "SP"
    }, handler));
}

API.power_up = function(params, handler) {
    API.__request_call("power_up", Object.assign({
        "coin":params["coin"] || "STEEM", 
        "amount":params["amount"] || ""
    }, handler));
}

API.power_down = function(params, handler) {
    API.__request_call("power_down", Object.assign({
        "coin":params["coin"] || "SP", 
        "amount":params["amount"] || ""
    }, handler));
}

API.redeem_rewards = function(params, handler) {
    API.__request_call("redeem_rewards", Object.assign({
        /* nothing */
    }, handler));
}

API.start_quest = function(params, handler) {
    API.__request_call("start_quest", Object.assign({
        "author":params["author"],
        "permlink":params["permlink"]
    }, handler));
}

API.finish_quest = function(params, handler) {
    API.__request_call("finish_quest", Object.assign({
        "author":params["author"],
        "permlink":params["permlink"],
        "comment":params["comment"]
    }, handler));
}

API.on_complete = function(params) {
    var handler = API.__handlers[params["request-id"] || ""];

    if (handler) {
        handler(params);
    }

    delete API.__handlers["request-id"];
}

API.__request_call = function(script, params, handler) {
    if ($data["APPID"] !== $data["HOST_APPID"]) {
        var request_id = new Date().toISOString().replace(/[.:\-]/g, "").toLowerCase();

        controller.action("script", Object.assign({
            "script":"api." + script,
            "app":"__MAIN__",
            "routes-to-topmost":"no",
            "request-id":request_id,
            "return-script":"API.on_complete",
            "return-subview":$data["SUBVIEW"]
        }, params));

        API.__handlers[request_id] = handler;

        return;
    }

    controller.action("toast", { "message":"모이또에서 실행해주세요." });
}

__MODULE__ = API;
