var targetNode = document.getElementById("yDmH0d");

var config = {childList: true};

var callback = function(mutationsList) {
    try {
        if(mutationsList[0].addedNodes[0].classList[0] == "Cl") {
            insertButton(mutationsList[0].addedNodes[0]);
            console.log("added chat window");
        }
    } catch(err) {
        try {
            if(mutationsList[0].removedNodes[0].classList[0] == "Cl") {
                removeButton(mutationsList[0].removedNodes[0]);
                console.log("removed chat window");
            }
        } catch(err) {}
    }
}

var observer = new MutationObserver(callback);
observer.observe(targetNode, config);
