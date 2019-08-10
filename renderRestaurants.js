
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    // return `
    //     <div class="text-center mt-5">
    //         <code>${JSON.stringify(restaurants)}</code>
    //     </div>
    // `
    let restaurantArr =[]
    restaurants.map(function(restaurant){
       console.log('price', restaurant.priceRating)
        let dollarSign = "" 
        for (i=0; i < restaurant.priceRating; i++){       
            dollarSign += "$";   
            
        }
        console.log('dollar sign', dollarSign)
        
        restaurantArr.push(
            `<div style="background-color:#F3F3F3;border-radius:2%;margin:20px;padding:20px;flex-grow:1">
                <h2>${restaurant.name}</h2>
                <p>${restaurant.type}</p>
                <h2 style="color:#00FF00">${dollarSign}</h2>
            </div>`
        )
        console.log('dollar sign', dollarSign)
        
    })
    let restaurantList = restaurantArr.join('');
    let restaurantContainer = 
        `<div style="border:1px solid black;display:flex;flow-direction:row;justify-content:space-around;">
            ${restaurantList}
        </div>`

    return restaurantContainer;

}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}