const playButton = document.getElementById('play');
const cellContainer = document.querySelector('.mycontainer');

let x = 100;


playButton.addEventListener('click',
    function(){
        cellGenerator();
    }
    
)

function cellGenerator (){

    for (let i = 1; i <= x; i++) {

        let newCell = document.createElement('div');
        newCell.classList.add('cell-style','cell-'+ i);
        cellContainer.append(newCell);
        newCell.innerHTML = i;
    
    }
}
