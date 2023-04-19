const names = [];

function writeCards(names){
    let cards=[]
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return cards
}
writeCards(names);

function countDown(n){
    for(let i = 0; i <= n; i++)
    console.log (i);
}
countDown(11)
countDown(4)