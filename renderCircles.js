
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    // return `
    //     <div class="text-center mt-5">
    //         <code>${JSON.stringify(circles)}</code>
    //     </div>
    // `
$
   

    let circleArr = [];
    circles.map(function drawCircles(circleItem){
        // console.log('circleItem: ',circleItem)
        // console.log('circlewidth: ',circleItem.radius,'px')
        // console.log('circleheight: ',circleItem.radius,'px')
        // console.log('background-color: ',circleItem.color)
        circleArr.push(`<div class="text-center mt-5" style="width:${circleItem.radius}px;height:${circleItem.radius}px;border-radius:50%;background-color:${circleItem.color};margin:auto"></div>`)
    });

    return circleArr.join('')
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}