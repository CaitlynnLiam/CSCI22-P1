
// random featured community

function random(){
  var amtCommunities = 3;
  var randomNumber = Math.floor((Math.random() * amtCommunities) + 1);
  return randomNumber;
}
function rImg(n){
  var randomNumber = n;
  var s_img = document.getElementById('s_img');
  var img_name = 'side'+randomNumber+'.png';
  s_img.style.backgroundImage = "url('pictures/"+img_name+"')";
}
function rDesc(n){
  var randomNumber = n-1;

  var communities = new Array("The Radish Garden", "DIY Mentor Hub", "Envi-Watch");
  var descriptions = new Array("Hello and welcome to our community. We are Mamamoo fans who want to help keep our fellow fans updated on news related to Mamamoo. We call ourselves Moomoos and associate ourselves with radish imagery because moo/mu is the Korean word for radish. If you’re new, welcome to the fandom!",
  "Whether you just got into DIY for fun or are looking to start a business by selling your own homemade products, we’ve got your back! Please feel free contribute your knowledge so that others may learn from you as well. 😊",
  "Hello, we’re here to discuss topics related to environmental issues and keep the members of our community informed about the latest developments in solving problems that affect ecosystems. Please be sure to make articles that have verified sources and avoid spreading fake news.");

  var descContainer = document.getElementsByClassName('s_content')[0];
  var featuredCommunityName = descContainer.getElementsByTagName('h1')[0];
  var featuredCommunityDesc = descContainer.getElementsByTagName('p')[0];

  featuredCommunityName.innerHTML = communities[randomNumber];
  featuredCommunityDesc.innerHTML = descriptions[randomNumber];
}
var randomNumber = random();
rImg(randomNumber);
rDesc(randomNumber);
