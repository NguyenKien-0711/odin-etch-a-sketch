const input = document.querySelector(".input-box");
const submitButton = document.querySelector(".submit-button");
const gridContainer = document.querySelector(".grid-container");
let addGrid = () => {
    gridContainer.innerHTML = '';
    const value = Number(input.value);
    if (isNaN(value) || (!Number.isInteger(value))) { alert("Invalid number"); }
    else if ((value > 100) || (value < 0)) alert("Number must be >= 1 and <= 100");
    else {
        for (let i = 0; i < value; i++) {
            let row = document.createElement("div");
            row.style.cssText = `
                display: flex;
                gap: 0px;
                flex: 1;
                width: 100%;
                `
            row.style.height = `calc(${100}%/${value})`;
            for (let j = 0; j < value; j++) {
                let column = document.createElement("div");
                column.classList.add("column")
                column.style.cssText = `
                    background-color: white;
                    border: 1px solid black;
                    width: 100%;
                `
                row.appendChild(column);
            }
            gridContainer.appendChild(row);
        }
    }
}

let startPhase = () => {
    addGrid();
    let columnItem = document.querySelectorAll(".column");
    const penButton = document.querySelector(".pen");
    const eraserButton = document.querySelector(".eraser");
    penButton.addEventListener("click", () => {
        for (let i of columnItem) {
            i.addEventListener("mouseover", () => {
                let redRandom = Math.random() * 255;
                let greenRandom = Math.random() * 255;
                let blueRandom = Math.random() * 255;
                i.style.backgroundColor = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
            })
        }
    })
    eraserButton.addEventListener("click", () => {
        for (let i of columnItem) {
            i.addEventListener("mouseover", () => {
                i.style.backgroundColor = "white";
            })
        }
    })
}
submitButton.addEventListener("click", startPhase);
