const playButton = document.getElementById('play');
const cellContainer = document.querySelector('.mycontainer');


let x = 0;

playButton.addEventListener('click',
    function(){

        let difficulty = document.getElementById('difficoltà').value;

        cellContainer.innerHTML = '';
        
        if(difficulty == 'Facile'){

            x = 100;
            cellGenerator();
            cellContainer.classList.remove('medio','legendario');
            cellContainer.classList.add('facile');

        } else if (difficulty == 'Medio'){

            x = 81;
            cellGenerator();
            cellContainer.classList.add('medio');

        } else {

            x = 49;
            cellGenerator();
            cellContainer.classList.add('legendario');
        }

    }   
)

function cellGenerator (){

    for (let i = 1; i <= x; i++) {

        let newCell = document.createElement('div');
        newCell.classList.add('cell-style','cell-'+ i);
        cellContainer.append(newCell);
        newCell.innerHTML = i;
    
        newCell.addEventListener('click',
            function () {
                
        this.classList.toggle('active');
        console.log(this.innerHTML);
                    
        });
    }
}



