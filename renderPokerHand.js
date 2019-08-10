
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    // return `
    //     <div class="text-center mt-5">
    //         <code>${JSON.stringify(pokerHand)}</code>
    //     </div>
    // `
    var cardImages = {
        KC:"cards/KC.png",
        KD:"cards/KD.png",
        "9S":"cards/9S.png",
        "2H":"cards/2H.png",
        "9H":"cards/9H.png",
    }

   let cardArr=[]; 

   pokerHand.map(function showHand(card){
       let cardImagesKey = (card.value + card.suit)
        cardArr.push(
            `<img style="width:100px;" src="${cardImages[cardImagesKey]}"/>`
        )
     })
     let cardHand = cardArr.join("");
     let container = 
     `<div style="display:flex;flow-direction:row;justify-content:space-around;width:60%;margin:auto;margin-top:20px;">
         ${cardHand}
    </div>`
     return  container;

}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}