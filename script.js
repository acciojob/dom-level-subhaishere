let targetElement = document.getElementById("level");

function getDomLevel(element) {
    let level = 0;
    let currentElement = element;

    while (currentElement.parentElement) {
        level++;
        currentElement = currentElement.parentElement;
    }

    return level;
}

let domLevel = getDomLevel(targetElement);

alert(`The level of the element is: ${domLevel}`);