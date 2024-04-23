
const div = document.querySelector("div");

const btn = document.querySelector("button");
btn.addEventListener("click", userInput);

function userInput() {
    if(div.hasChildNodes){
        clearBoard();
    }

    let num = prompt("How many squares per side?");
    num = Number(num);
    if (typeof(num) !== "number"){
        alert("Please enter a different value.")
        return;
    }else if (num > 100) {
        drawBoard(100);
    }else if (num < 0) {
        drawBoard(1);
    }else {
        drawBoard(num);
    }
}

function drawBoard(dims){
    for(let i=0; i<dims; i++){
        const row = document.createElement("div");
        div.appendChild(row);
        row.setAttribute("class", "row");
        for(let j=0; j<dims; j++){
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener("mouseenter", function(e){
                square.classList.add("hovered");
            });
            row.appendChild(square);
        }
    }
}

function clearBoard(){
    const children = Array.from(div.children);
    for (let child of children){
        div.removeChild(child);
    }
}