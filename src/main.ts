import './style.css'

//* --------------- Selection HTML elements ---------------
const pairsClicked = document.querySelector('#pairsClicked') as HTMLParagraphElement;
const pairsGuessed = document.querySelector('#pairsGuessed') as HTMLParagraphElement;
const cards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;

const emojiArr: string[] = ['🥳', '😍', '😃', '😡', '🤢', '🥶', '😎', '😴', '🤕', '🤠', '🤣', '😱'];
// const cardsForComparision: string[] = [...emojiArr, ...emojiArr];

// const shuffleAllCards = (array: string[]): string[] => 

function shuffleAllCards(array: string[]): string[] {
    for (let i = 0; i < array.length; i++) {
        const randomNum = Math.floor(Math.random() * array.length)
    }
}



for(let i: number = 0; i < cards.length; i++) {
    if(i >= emojiArr.length) {
        cards[i].innerHTML = `<div class="emoji">${emojiArr[i - emojiArr.length]}</div>`;
    } else {
        cards[i].innerHTML = `<div class="emoji">${emojiArr[i]}</div>`;
    }
}

cards.forEach((card: HTMLDivElement) => {
    card.addEventListener('click', () => {
    })
})
