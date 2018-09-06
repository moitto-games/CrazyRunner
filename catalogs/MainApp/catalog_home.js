function on_finish(data) {
    var message = data["score"] + "점으로 퀘스트를 종료하시겠습니까?";

    controller.action("prompt", {
        "title":"알림",
        "message":message,
        "has-cancel-button":"yes",
        "button-1":"퀘스트 종료;script;script=finish_quest"
    });
}
