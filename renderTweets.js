
function renderTweets(tweets) {
    // return `
    //     <div class="text-center mt-5">
    //         <code>${JSON.stringify(tweets)}</code>
    //     </div>
    // `
    let tweetArr =[];
    tweets.map(function(tweet){
        tweetArr.push(
           `<div>
                <div style="display:flex;flow-direction:row;">
                    <div>
                        <img style="width:5%" src="${tweet.user.profilePic}"/>
                   </div>
                    <div>
                        <p>${tweet.user.username}</p>
                        <p>${tweet.user.handle}</p>
                    </div>
                </div>
                <div>
                    <h2>${tweet.text}</h2>
                </div>
                <hr/>
                <div>
                    <p>${tweet.likes}</p>
                    <p>${tweet.retweets}</p>
                    <p>${tweet.replies}</p>
                </div>
            </div>`
        )


    })
    return tweetArr.join('');
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}