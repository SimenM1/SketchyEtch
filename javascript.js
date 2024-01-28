wrapper = document.querySelector("#wrapper")
const gridSize = 16
const numberDivs = gridSize*gridSize
wrapper.style.cssText = "width: " + gridSize*10 + "px; height: auto; flex-wrap: wrap; flex-direction: row;";
for (i=0; i < numberDivs; i++) {
divs = document.createElement("div")
wrapper.appendChild(divs)
}