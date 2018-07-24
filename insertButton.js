function insertButton(iframe) {
    console.log("insert button called");
    //iframe.addEventListener("load", function() {
        //console.log("iframe loaded");
        iframe.contentWindow.addEventListener('DOMContentLoaded', function() {
            console.log("DOM loaded in iframe");
            let document = iframe.contentDocument;
            let config = {childList: true, subtree: true};
            iframeObserver.observe(document, config);
        }, true);
    //});
}

function createButton() {
    let button = document.createElement("button");
    button.addEventListener("click", insertMessage, true);
    button.setAttribute("class", "uq");
    //button.innerHTML = 'test value';
    //button.setAttribute('class', 'Wv1EFb uq');
    var imgURL = chrome.extension.getURL("thumb2.png");
    console.log(imgURL);
    let div = document.createElement("div");
    div.setAttribute("style", "background-image: url("+imgURL+");height:24px;width:24px;");
    button.appendChild(div);
    return button;
}

var iframeCallback = function(mutationList) {
    try {
        for(var i = 0; i < mutationList.length; i++) {
            if(mutationList[i].addedNodes.length > 0) {
                for(var j = 0; j < mutationList[i].addedNodes.length; j++) {
                    //console.log(mutationList[i].addedNodes[j]);
                    if(mutationList[i].addedNodes[j].classList == "lZ ca92t") {
                        console.log("found it");
                        console.log(mutationList[i].addedNodes[j].childNodes[3]);
                        let node = mutationList[i].addedNodes[j].childNodes[3];
                        let button = createButton();
                        //node.insertBefore(button, node.firstChild);
                        node.append(button);
                        return;
                    }
                }
            }
        }
    } catch(err) {
    }
};

var iframeObserver = new MutationObserver(iframeCallback);
