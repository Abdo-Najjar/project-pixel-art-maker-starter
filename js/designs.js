// Select color input
var colorPicker = document.querySelector("#colorPicker");

// Select size input
//select inputHeight input
var inputHeight = document.querySelector("#inputHeight");

//select inputWidth input
var inputWidth = document.querySelector("#inputWidth");

/*
    When size is submitted by the user, call makeGrid()
*/ 

//select the submit button
var submit = document.querySelector("#submit");

//add the eventlistener to the button
submit.addEventListener("click" ,makeGrid);

//select div that has table inside of it
let pixelCanvas =  document.querySelector("#pixelCanvas");

function makeGrid() {
    pixelCanvas.innerHTML = "";

    let Width = inputWidth.value;
    let widthText = "";

        for(let i = 0 ; i <Width;i++ ){
            widthText += "<td> </td>";
        }
    
    let height =   inputHeight.value;

    for(let i = 0 ; i<height; i++){
     pixelCanvas.innerHTML +=`<tr>   ${widthText} </tr>`;
    }
    addEverlisteners();
}


//add everlistener to ever td taq
function addEverlisteners(){

//colorPicker value
var color = colorPicker.value;

//select all td taqs
var tds = document.querySelectorAll("td");
for(let i = 0 ; i<tds.length ; i++){
    tds[i].addEventListener('click' , function(){
        this.style.background = color;
         });
    }
}
