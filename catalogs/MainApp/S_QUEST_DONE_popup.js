function done() {
    var comment = view.object("comment").value();

    controller.action("script", {
        "script":"finish_quest",
        "subview":"__MAIN__",
        "comment":comment,
        "close-popup":"yes"
    });
}
