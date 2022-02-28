for(let i = 0; i < 32; i++)
{
let container = document.getElementById('grid');
let cell = document.createElement('div');
cell.innerHTML = `Div # ${i+1}`;
container.appendChild(cell);
}
