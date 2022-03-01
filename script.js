function makeGrid()
{
    let tblr = document.getElementById("grid");

    for(let i = 0; i < 11; i++)
    {
        let tblrw = document.createElement('tr');
        let tblcol = document.createElement('td');
        
        tblrw.id = `row + ${i}`;
        tblr.appendChild(tblrw);

        for(let j = 0; j < 11; j++)
        {
            tblrw.appendChild(tblcol);
        }
    }

    
}
