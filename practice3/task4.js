function Rectangle(width, height, color, parentElement) {
    const rectElem = document.createElement('div');
    rectElem.style.width = width;
    rectElem.style.height = height;
    rectElem.style.backgroundColor = color;
    parentElement.appendChild(rectElem);

    this.elem = rectElem;
}

function Triangle(width, height, color, parentElement) {
    const rectElem = document.createElement('div');
    rectElem.style.width = 0;
    rectElem.style.height = 0;
    
    const w = parseFloat(width);
    rectElem.style.borderLeft = w/2 + 'px solid transparent';
    rectElem.style.borderRight = w/2 + 'px solid transparent';
    rectElem.style.borderBottom = height + ' solid ' + color;

    parentElement.appendChild(rectElem);

    this.elem = rectElem;
}

Triangle("160px", "140px", "blue",document.body);
Rectangle("160px", "140px", "yellow",document.body);