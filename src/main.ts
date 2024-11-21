import './style.css'

//* --------------- Selection HTML elements ---------------
const pairsClicked = document.querySelector('#pairsClicked') as HTMLParagraphElement;
const pairsGuessed = document.querySelector('#pairsGuessed') as HTMLParagraphElement;
const cards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;
const card = document.querySelector('.card') as HTMLDivElement;

const emojiArr: string[] = ['🥳', '😍', '😃', '😡', '🤢', '🥶', '😎', '😴', '🤕', '🤠', '🤣', '😱'];
let cardsToCompare: HTMLDivElement[] = [];
let guessCounter: number = 0;

for(let i: number = 0; i < cards.length; i++) {
    if(i >= emojiArr.length) {
        cards[i].innerHTML = `<div class="emoji">${emojiArr[i - emojiArr.length]}</div>`;
    } else {
        cards[i].innerHTML = `<div class="emoji">${emojiArr[i]}</div>`;
    }
    const cardChild = cards[i].firstElementChild as HTMLDivElement;
    cardChild.classList.add('hide__card');
}

//* --------------- Declaring functions ---------------
function compareCards(cardsArr: HTMLDivElement[]): boolean {
    return cardsArr[0].textContent === cardsArr[1].textContent ? true : false;
}

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