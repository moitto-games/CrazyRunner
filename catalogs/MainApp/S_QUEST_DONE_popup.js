function done() {
    var comment = __comment_with_score(parseInt(view.object("comment").value(), $data["score"]));

    controller.action("script", {
        "script":"finish_quest",
        "subview":"__MAIN__",
        "comment":comment,
        "close-popup":"yes"
    });
}

function __comment_with_score(comment, score) {
    return "#### " + score + "점" + "\n\n" + comment + "\n\n";
}
