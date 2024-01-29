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
    numberDivs = gridSize*gridSize;
    createGrid()
    colorChanger()
    return gridSize
}



function colorChanger() {
    divCol = document.querySelectorAll("div.divSub")

    divCol.forEach(divSub => {
        divSub.addEventListener("mouseenter", () =>
        divSub.style.backgroundColor = "black",
        divSub.addEventListener("mouseout", () => {
            setTimeout(() => divSub.style.backgroundColor = "white", 500)
            })

        )
    });
}

