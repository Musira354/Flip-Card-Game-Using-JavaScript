console.log('heloo');
document.addEventListener('DOMContentLoaded', () => {
    //card optionns
    const cardArray = [
        {
            name: 'hitman',
            img:'images/hitman-minion.png'
        },
        {
            name: 'boss',
            img:'images/boss-minion.png'
        },
        {
            name: 'employee',
            img:'images/employee-minion.jpg'
        },
        {
            name: 'hawai',
            img:'images/hawai-minion.jpg'
        },
        {
            name: 'monster',
            img:'images/monster-minion.jpg'
        },
        {
            name: 'tourist',
            img: 'images/tourist-minion.jpg'
        },
        {
            name: 'hawai',
            img: 'images/hawai-minion.jpg'
        },
        {
            name: 'boss',
            img: 'images/boss-minion.png'
        },
        {
            name: 'monster',
            img: 'images/monster-minion.jpg'
        },
        {
            name: 'hitman',
            img: 'images/hitman-minion.png'
        },
        {
            name: 'tourist',
            img: 'images/tourist-minion.jpg'
        },
        {
            name: 'employee',
            img: 'images/employee-minion.jpg'
        }
    ]

    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay=document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];


    //const resultDisplay = document.querySelector('#result');
    //create the board
    function createBoard() {
        console.log('increate board')
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            //add attribute to the element with name, new value
            card.setAttribute('src', 'images/board.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click',flipcard)
            grid.appendChild(card); //append a node as the last child of node
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/board.jpg')
            cards[optionTwoId].setAttribute('src', 'images/board.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent='congratulations! You found them all!'
        }
    }

    //flip your card
    function flipcard() {
        var cardId = this.getAttribute('data-id');
        console.log('Card choose id ', cardId)
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    

    var items = [[1, 2], [3, 4], [5, 6]];
    items[1][3] = 'l';
    console.log(items[1]);
    console.log(items[1][3]);

    const arr=

    createBoard();

})