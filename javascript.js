const gridSize = prompt("specify grid size(x by x)");
const numberDivs = gridSize*gridSize;

wrapper = document.querySelector("#wrapper");

for (i=0; i < numberDivs; i++) {
    divs = document.createElement("div");
    divs.classList.add("divSub");
    divs.style.cssText = "width: " + 960/(+gridSize) + "px; height: " + 960/(+gridSize) + "px;";
    wrapper.appendChild(divs);
}



divCol = document.querySelectorAll("div.divSub")

divCol.forEach(divSub => {
    divSub.addEventListener("mouseenter", () =>
    divSub.style.backgroundColor = "black",
    divSub.addEventListener("mouseout", () => {
        setTimeout(() => divSub.style.backgroundColor = "white", 500)
        })

    )
});

