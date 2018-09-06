function done() {
    console.log("done: " + $data["score"]);
    var comment = __comment_with_score(view.object("comment").value(), parseInt($data["score"]));

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
