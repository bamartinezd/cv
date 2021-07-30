function createElement(elementType, ...classes) {
    const newElement = document.createElement(elementType);

    if (classes.length !== 0) {
        for (let index = 0; index < classes.length; index++) {
            newElement.classList.add(classes[index]);
        }
    }

    return newElement;
}

export default createElement;