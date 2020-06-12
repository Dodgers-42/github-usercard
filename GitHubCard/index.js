/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
// const axios = require('axios');
let info = {};

console.log(axios);
axios.get('https://api.github.com/users/Dodgers-42')
.then((res) => {
  info = res.data
  console.log(info);
//dodgersInfo(info)
  let parent = document.querySelector('.cards');
  parent.appendChild(dodgersInfo(info)); 
  //parent.appendChild(dodgersInfo(res.data))
}).catch((err) => console.log("wrong"))


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function dodgersInfo (obj) {

// creating const
  const post = document.createElement('div');
  const postImageUrlOfUser = document.createElement('img');
  const card = document.createElement('div');
  const cardName = document.createElement('h3');
  const cardUsersName = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');
  const cardATag = document.createElement('a');

// update content

  cardName.textContent = obj.login;
  postImageUrlOfUser.src = obj.avatar_url;
  cardUsersName.textContent = obj.name
  cardLocation.textContent = obj.lacation
  cardFollowers.textContent = obj.followers
  cardFollowing.textContent = obj.following
  cardbio.textContent = obj.bio
  cardATag.textContent= obj.html_url
  cardATag.href=obj.html_url

// appending

  card.appendChild(cardName);
  post.appendChild(cardImageUrlOfUser);
  card.appendChild(cardUsersName);
  card.appendChild(cardLocation);
  card.appendChild(cardProfile);
  cardProfile.appendChild(cardATag);
  card.appendChild(cardFollowers);
  card.appendChild(cardFollowing);
  card.appendChild(cardBio);
  post.appendChild(card);
  
// styling
  post.classList.add('card');
  card.classList.add('card-info');
  cardName.classList.add('name');
  cardUsersName.classList.add('username');


// carfdTitle.classList.add('cardTitle');
// cardImg.classList.add('cardImg');
// cardFirstParagraph.classList.add('cardFirstParagraph');
// cardSecondParagraph.classList.add('cardSecondParagraph');
// cardThirdParagraph.classList.add('cardThirdParagraph');
// cardThirdParagraph.classList.add('cardForthParagraph');
// cardThirdParagraph.classList.add('cardFifthParagraph');
// cardThirdParagraph.classList.add('cardSixthParagraph');

console.log(card);
return post;

};




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
