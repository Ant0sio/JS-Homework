
const suits =['spade', 'diamond','heart', 'clubs'];
const values=['6'-'10', 'ace','jack','queen','king'];


const cards=[];
for (const suit of suits) {
    for (const value of values) {
        const card={cardSuit:suit,value:value};
        if (suit==='heart'|| suit==='diamond'){
            card.color='red';
        }else {card.color='black';}

    cards.push(card);


}
}
console.log(cards);

console.log(cards.find(card=>card.value==='ace'&&card.cardSuit==='spade'));

console.log(cards.filter(card=>card.value==='6'));

console.log(cards.filter(card=>card.value==='red'));

console.log(cards.filter(card=>card.value==='diamond'));


console.log(cards.filter(card=>card.value==='club'&&(card.value!=='6'||card.value!=='7'||card.value!=='8'||card.value!=='9')));

