
$(document.body).click( onClick(event) );

function getValidElement(node) {
    if (node == null) {
        return document.body;
    }
    for (var count = 0; count < node.childNodes.length; count++) {
        if (ValidElement(node.childNodes[count])) {
            return node.childNodes[count];
        }
    }
    var tempnode = node;
    while (tempnode.nextSibling != null) {
        if (ValidElement(tempnode.nextSibling)) {
            return tempnode.nextSibling;
        }
        tempnode = tempnode.nextSibling;
    }
    tempnode = node.parentNode;
    while (tempnode.nextSibling != null) {
        if (ValidElement(tempnode.nextSibling)) {
            return tempnode.nextSibling;
        }
        tempnode = tempnode.nextSibling;
    }
    return getValidElement(node.parentNode.nextSibling);
}

function clearBackgrounds() {
    elements = document.getElementsByTagName("*");
    for (var count = 0; count < elements.length; count++) {
        elements[count].style.background = "none";
    }
}

function onClick(e) {
    console.log(e.target);
    nextNode = getValidElement(e.target);
    clearBackgrounds();
    nextNode.style.background = "#COFFEE";
}

function isValid(node) {
    var validElements = ["BODY", "DIV", "P"];
    for (var count = 0; count < validElements.length; count++){
        if (node.nodeName == validElements[count])
            return true;
    }
    return false;
}