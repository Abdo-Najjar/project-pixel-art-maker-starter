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
    //Delete table content if exist 
    pixelCanvas.innerHTML = "";

    //Instantiate height value
    const height = inputHeight.value;

    //Instantiate height value
    const width = inputWidth.value;

    //input validation
    if(height>100 ||height<0 || width>100 || width<0){
        alert("Invalid inputs , please try agine with different values");
        return;
    }

    //for loop to append tr elemets insde table
    for(let i = 0 ; i < height ; i++){
        
       //Create tr element
       let tr =  document.createElement("tr");
        
       //Append tr element inside the 
       pixelCanvas.appendChild(tr);

       //for loop to append td elemets inside tr element that appended into table 
        for(let j = 0 ; j<width ;j++){
        
        //Create td element
        let td = document.createElement("td");
        
        //add event listner to td taq
        td.addEventListener("click" , function(){
            this.style.backgroundColor = colorPicker.value;
        });

        //append td inside tr elemets
        tr.appendChild(td);
        }

    }    
}

