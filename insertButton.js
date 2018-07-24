function insertButton(iframe) {
    iframe.contentWindow.addEventListener('DOMContentLoaded', function() {
        let document = iframe.contentDocument;
        let config = {childList: true, subtree: true};
        iframeObserver.observe(document, config);
    }, true);
}

function createImageDiv() {
    let div = document.createElement("div");
    var imgURL = chrome.extension.getURL("thumb.png");
    div.setAttribute("style", "background-image: url("+imgURL+");height:24px;width:24px;");
    return div;
}

function addButton(node) {
    let button = document.createElement("button");
    button.addEventListener("click", insertMessage, true);
    button.setAttribute("class", "uq");
    button.setAttribute("style", "margin-left:5px;");

    let imageDiv = createImageDiv();
    button.appendChild(imageDiv);

    node.append(button);
}

function fixEmojiButtonPlacement(node) {
    let emojiButton = node.childNodes[0];
    emojiButton.setAttribute("style", "bottom:30px;");
}

function loopThroughAddedNodes(addedNodes) {
    for(var i = 0; i < addedNodes.length; i++) {
        if(addedNodes[i].classList == "lZ ca92t") {
            let node = addedNodes[i].childNodes[3];
            addButton(node);
            fixEmojiButtonPlacement(node);
            return true;
        }
    }
    return false;
}

function loopThroughMutationList(mutationList) {
    for(var i = 0; i < mutationList.length; i++){
        let isDone = loopThroughAddedNodes(mutationList[i].addedNodes);
        if(isDone) {
            return;
        }
    }
}

var iframeCallback = function(mutationList) {
    loopThroughMutationList(mutationList);
};

var iframeObserver = new MutationObserver(iframeCallback);
