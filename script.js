
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
            square.addEventListener("mouseenter", function(e){
                randColor(square);
                //square.setAttribute("backgroundColor", "blue");
                //square.style.backgroundColor = "red";
                //square.classList.add('hovered');
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
    let r1, g1, b1;
    r1 = Math.round(Math.random()*255);
    g1 = Math.round(Math.random()*255);
    b1 = Math.round(Math.random()*255);
    element.style.backgroundColor = 'rgb('+r1+','+g1+','+b1+')';
}