import './style.css'

//* --------------- Selection HTML elements ---------------
const pairsClicked = document.querySelector('#pairsClicked') as HTMLParagraphElement;
const pairsGuessed = document.querySelector('#pairsGuessed') as HTMLParagraphElement;
const cards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;
const card = document.querySelector('.card') as HTMLDivElement;

const emojiArr: string[] = ['🥳', '😍', '😃', '😡', '🤢', '🥶', '😎', '😴', '🤕', '🤠', '🤣', '😱'];

let cardsToCompare: HTMLDivElement[] = [];
let guessCounter: number = 0;

const shuffledArr = shuffleAllCards(emojiArr);
for(let i: number = 0; i < shuffledArr.length; i++) {
    cards[i].innerHTML = `<div class="emoji">${shuffledArr[i]}</div>`;
    const cardChild = cards[i].firstElementChild as HTMLDivElement;
    cardChild.classList.add('hide__card');
}

//* --------------- Declaring functions ---------------
function compareCards(cardsArr: HTMLDivElement[]): boolean {
    return cardsArr[0].textContent === cardsArr[1].textContent ? true : false;
}

function shuffleAllCards(arr: string[]): string[] {
    const doubleEmojiArr = arr.concat(arr);
    for (let i = doubleEmojiArr.length - 1; i > 0; i--) {
        const arrNum = Math.floor(Math.random()* (i+1));
        [doubleEmojiArr[i], doubleEmojiArr[arrNum]] = [doubleEmojiArr[arrNum], doubleEmojiArr[i]]
    } 

    return doubleEmojiArr;    
}
console.log(shuffleAllCards(emojiArr));

cards.forEach((card: HTMLDivElement) => {
    card.addEventListener('click', () => {
        if(guessCounter < 2) {
            const cardChild = card.firstElementChild as HTMLDivElement;
            cardChild.classList.toggle('hide__card');
            cardsToCompare.push(cardChild);
            guessCounter++;
            if(guessCounter === 2) {
                setTimeout(() => {
                    const compareResult: boolean = compareCards(cardsToCompare);
                if(compareResult) {
                    cardsToCompare = [];
                    guessCounter = 0;
                } else {
                    cardsToCompare.forEach((card) => card.classList.toggle('hide__card'));
                    cardsToCompare = [];
                    guessCounter = 0;
                }
                }, 1000)
            }
        }
    })
})
