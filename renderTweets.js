
function renderTweets(tweets) {
    // return `
    //     <div class="text-center mt-5">
    //         <code>${JSON.stringify(tweets)}</code>
    //     </div>
    // `
    let tweetArr =[];
    let checkImg ="images/verified.png";
    let width = 12
    tweets.map(function(tweet){
        if (!tweet.user.isVerified){width = 0}
        tweetArr.push(
           `<div style="margin-top:50px">
                <div style="display:flex;align-items:flex-start;">
                   <img style="width:5%;" src="${tweet.user.profilePic}"/> 
                    <div style="margin-left:20px">
                    <div style="display:flex;align-items:flex-start;">
                            <p style="margin-bottom:5px; margin-right:5px;">${tweet.user.username}</p>
                            <img style="width:${width}%;" src="${checkImg}"/> 
                        </div>
                        <p>${tweet.user.handle}</p>
                    </div>
                </div>
                <div>
                    <h2>${tweet.text}</h2>
                </div>
                <hr/>
                <div style="display:flex;flow-direction:row;align-items:flex-start;">
                    <div style="display:flex;width:10%;">
                        <img style="width:27%;margin-right:7px;" src="images/comment.png"/> 
                        <p style="margin-top:7px;margin-bottom:0px">${tweet.likes}K</p>
                    </div>
                    <div style="display:flex;width:10%;">
                        <img style="width:27%;margin-right:7px;" src="images/retweet.png"/> 
                        <p style="margin-top:7px;margin-bottom:0px">${tweet.retweets}K</p>
                    </div>
                    <div style="display:flex;width:10%;">
                        <img style="width:27%;margin-right:7px;" src="images/heart.png"/> 
                        <p style="margin-top:7px;margin-bottom:0px">${tweet.replies}K</p>
                    </div>
                    <div style="display:flex;width:10%;">
                        <img style="width:27%;" src="images/envelope.png"/> 
                    </div>
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