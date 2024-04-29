
const div = document.querySelector("div");

const btn = document.querySelector("button");
btn.addEventListener("click", userInput);
let alertFlag = 0;

function userInput() {
    if(div.hasChildNodes){
        clearBoard();
    }

    let num = prompt("How many squares per side?");
    num = Number(num);
    if (typeof(num) !== "number"){
        alertFlag = true;
        // alert("Please enter a different value.")
        return;
    }else if (num > 100) {
        drawBoard(100);
    }else if (num < 0) {
        drawBoard(1);
    }else {
        drawBoard(num);
    }
    if (alertFlag) {
        alert("Please enter a different value.")
        alertFlag = false;
    };
}

function drawBoard(dims){
    for(let i=0; i<dims; i++){
        const row = document.createElement("div");
        div.appendChild(row);
        row.setAttribute("class", "row");
        for(let j=0; j<dims; j++){
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.style.opacity = 1.0;
            square.addEventListener("mouseenter", function(e){
                randColor(square);
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

function randColor(element){
    let r, g, b, a;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    a = element.style.opacity;
    if (a*10>0){
        a -= 0.1;
    }
    element.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    element.style.opacity = a;
}