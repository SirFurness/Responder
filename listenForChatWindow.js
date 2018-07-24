var targetNode = document.getElementById("yDmH0d");

var config = {childList: true, subtree: true};

var bodyCallback = function(mutationsList) {
    try {
        if(mutationsList[0].addedNodes[0].classList[0] == "Xyqxtc" && mutationsList[0].target.className == "Cl") {
            insertButton(mutationsList[0].addedNodes[0]);
        }
    } catch(err) {}
};

var observer = new MutationObserver(bodyCallback);
observer.observe(targetNode, config);
