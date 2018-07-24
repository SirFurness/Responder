function insertButton(iframe) {
    iframe.contentWindow.addEventListener('DOMContentLoaded', function() {
        let document = iframe.contentDocument;
        let config = {childList: true, subtree: true};
        iframeObserver.observe(document, config);
    }, true);
}

function createDiv() {
    let div = document.createElement("div");
    var imgURL = chrome.extension.getURL("thumb.png");
    div.setAttribute("style", "background-image: url("+imgURL+");height:24px;width:24px;");
    return div;
}

function createButton() {
    let button = document.createElement("button");
    button.addEventListener("click", insertMessage, true);
    button.setAttribute("class", "uq");
    button.setAttribute("style", "margin-left:5px");

    let div = createDiv();
    button.appendChild(div);

    return button;
}

function addButton(node) {
    let button = createButton();
    node.append(button);
}

function changeEmojiButton(node) {
    let emojiButton = node.childNodes[0];
    emojiButton.setAttribute("style", "bottom:30px;");
}

function loopThroughAddedNodes(addedNodes) {
    for(var i = 0; i < addedNodes.length; i++) {
        if(addedNodes[i].classList == "lZ ca92t") {
            let node = addedNodes[i].childNodes[3];
            addButton(node);
            changeEmojiButton(node);
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
    try {
        loopThroughMutationList(mutationList);
    } catch(err) {
    }
};

var iframeObserver = new MutationObserver(iframeCallback);
