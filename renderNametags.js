
function renderNametags(nametags) {
    // return `
    //     <div class="text-center mt-5">
    //         <code>${JSON.stringify(nametags)}</code>
    //     </div>
    // `
    let nametagArr =[];
    nametags.map(function makeNameTags(name){
        nametagArr.push(
            `<div class="text-center mt-5" style="border:1px solid gray;width:200px;margin:auto;font-size:20px;">
                <div style="color:white;background-color:blue;height:50px;line-height:45px;"><p>Hello, my name is</p></div>   
                <div style="background-color:white;height:80px;line-height:75px;"><p>${name}</p></div>
            </div>`

        )

    })

    return nametagArr.join('');

}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}