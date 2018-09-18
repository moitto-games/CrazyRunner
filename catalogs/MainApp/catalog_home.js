var __score = 0;

function on_finish(data) {
    if (document.value("QUEST_MODE")) {
        controller.catalog().submit("showcase", "auxiliary", "S_QUEST_ALERT", {
            "score":data["score"]
            "has-own-sbml":"yes"
        });
        controller.action("popup", { "display-unit":"S_QUEST_ALERT" });

        __score = parseInt(data["score"]);        
    }
}

function finish_quest() {
    controller.catalog().submit("showcase", "auxiliary", "S_QUEST_DONE", {
        "score":__score.toString(),
        "has-own-sbml":"yes"
    });
    controller.action("popup", { "display-unit":"S_QUEST_DONE" });
}
