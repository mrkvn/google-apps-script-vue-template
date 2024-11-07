function doGet() {
    return HtmlService.createTemplateFromFile("ui/index").evaluate();
}

function echo(msg) {
    return msg;
}
