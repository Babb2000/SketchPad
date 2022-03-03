const widthValue = 750;
const lenValue = 750;

function makeGrid(){
    
    let gridContainer = document.getElementById('grid');
    
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    const finOne = parseInt(num1);
    const finTwo = parseInt(num2);
 
    let newWid = (widthValue/finOne); //750 divided by the user entered width value
    let newLen = (lenValue/finTwo);   //750 divided by the user entered length value

    let toTxtwid = newWid.toString();
    let toTxtlen = newLen.toString();

    let cssWidth = (toTxtwid + "px");
    let cssLength = (toTxtlen + "px");

    document.getElementById('grid').style.gridTemplateColumns = `repeat(${finOne}, ${cssWidth})`;
    document.getElementById('grid').style.gridAutoRows = `${cssLength}`;
  
    let currentDiv = document.getElementById('grid');
    const myDivChildNodes = currentDiv.children;


    for(let q = 0; q < myDivChildNodes.length; q++)
    {
      myDivChildNodes[q].style.width = `${cssWidth}`;
      myDivChildNodes[q].style.length = `${cssLength}`;

    }

    for(let i = 0; i < num1; i++)
    {
    
    let myRows = document.createElement('div');
    gridContainer.appendChild(myRows);
    
       for(let j = 1; j < num2; j++)
       {
         let myCol = document.createElement('div');
         gridContainer.appendChild(myCol);
       }
    }
   

    for(let k = 0; k < myDivChildNodes.length; k++)
    {
      myDivChildNodes[k].onmouseover=function(){
        myDivChildNodes[k].style.background = "black";
      }
    }
    
}

function limeGrid(){
    let currentDiv = document.getElementById('grid');
    const myDivChildNodes = currentDiv.children;

    for(let i = 0; i < myDivChildNodes.length; i++)
    {
      myDivChildNodes[i].onmouseover=function(){
        myDivChildNodes[i].style.background = "lime";
      }
    }

}

function aquaGrid(){
  let currentDiv = document.getElementById('grid');
  const myDivChildNodes = currentDiv.children;

  for(let i = 0; i < myDivChildNodes.length; i++)
  {
    myDivChildNodes[i].onmouseover=function(){
      myDivChildNodes[i].style.background = "aqua";
    }
  }

}








