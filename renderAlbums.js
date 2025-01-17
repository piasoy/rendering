
function renderAlbums(albums) {
    // return `
    //     <div class="text-center mt-5">
    //         <code>${JSON.stringify(albums)}</code>
    //     </div>
    // `
    let recordsArr =[];
    let songsArr=[];
    let records = albums[0].albums;

    records.map(function(record){
        recordsArr.push(
            `<hr/>
            <div style="display:flex;align-items:flex-start;">
                <img style="width:50px;margin-right:10px" src="${record.albumCover}" />
                <h4 style="padding-top:26px;;">${record.title}</h4>
            </div>`
        )

        record.songs.map(function(song){
            songsArr.push(
                `<hr/>
                <div style="display:flex;justify-content:space-between;">
                <div style="display:flex;align-items:flex-start;">
                        <img style="width:25px;margin-right:10px;" src="images/play.png" />
                        <p>${song.title}</p>
                    </div>
                    <p>${song["length"]}</p>           
                </div>`
            )
            console.log(song.title)
            console.log(song["length"])
        })
       
        recordsArr.push(songsArr.join(''));
    })
    return recordsArr.join('');
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}