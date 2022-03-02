function makeGrid(){
    let gridContainer = document.getElementById('grid');

    for(let i = 0; i < 16; i++)
    {
    
    let myRows = document.createElement('div');
    gridContainer.appendChild(myRows);
    
       for(let j = 0; j < 16; j++)
       {
         let myCol = document.createElement('div');
         gridContainer.appendChild(myCol);
       }

}
}