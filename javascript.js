let gridSize = 5;
let numberDivs = gridSize*gridSize;
createGrid()
colorChanger()
wrapper = document.querySelector("#wrapper");

function createGrid() {
    for (i=0; i < numberDivs; i++) {
    divs = document.createElement("div");
    divs.classList.add("divSub");
    divs.style.cssText = "width: " + 960/(+gridSize) + "px; height: " + 960/(+gridSize) + "px;";
    wrapper.appendChild(divs);
}
}

function promptFn() {
    wrapper.innerHTML = "";
    gridSize = prompt("specify grid size(x by x) *must be less than 20*")
    if (gridSize > 20) {
        return alert("size too large")
    }
    else
    numberDivs = gridSize*gridSize;
    createGrid()
    colorChanger()
    return gridSize
}

function rgbNr() {
    nOne = Math.random()*256
    n = Math.floor(nOne)
    return n 
}



function colorChanger() {
    divCol = document.querySelectorAll("div.divSub")

    divCol.forEach(divSub => {
        divSub.addEventListener("mouseenter", () => {
        r = rgbNr();
        g = rgbNr();
        b = rgbNr();
        divSub.style.backgroundColor = "rgb(" + r + " ," + g + " ," + b + ")";
        divSub.addEventListener("mouseout", () => {
            setTimeout(() => divSub.style.backgroundColor = "white", 500);
            })

        })
    });
}

