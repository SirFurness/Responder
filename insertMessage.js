function removeBackgroundText(parentNode) {
    parentNode.setAttribute("class", "My rq");
}

function insertMessage() {
    let inputDiv = this.parentNode.childNodes[2].childNodes[2].childNodes[0].childNodes[1];
    inputDiv.innerHTML = getResponse();
    removeBackgroundText(this.parentNode);
}

function random(max) {
    return Math.floor(Math.random()*max);
}

function get(list) {
    return list[random(list.length)];
}

function getResponse() {
    return (get(adverbs) + " " + get(adjectives));
}
