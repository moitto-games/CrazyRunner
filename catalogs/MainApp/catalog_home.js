var __score = 0;

function on_finish(data) {
    if (document.value("QUEST_MODE")) {
        var message = data["score"] + "점으로 퀘스트를 종료하시겠습니까?";

        controller.action("prompt", {
            "title":"알림",
            "message":message,
            "has-cancel-button":"yes",
            "button-1":"퀘스트 종료;script;script=finish_quest"
        });

        __score = parseInt(data["score"]);        
    }
}

function finish_quest() {
    console.log("score: " + __score.toString());
    controller.catalog().submit("showcase", "auxiliary", "S_QUEST_DONE", {
        "score":__score.toString(),
        "has-own-sbml":"yes"
    });
    controller.action("popup", { "display-unit":"S_QUEST_DONE" });
}
