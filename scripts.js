
// random featured community

function random(){
  var amtCommunities = 1;
  var randomNumber = Math.floor((Math.random() * amtCommunities) + 1);
  return randomNumber;
}
function rImg(n){
  var randomNumber = n;
  var s_img = document.getElementById('s_img');
  var img_name = 'side'+randomNumber+'.png';
  s_img.style.backgroundImage = "url('"+img_name+"')";
}
function rDesc(n){
  var randomNumber = n-1;

  var communities = new Array("The Raddish Farm", "Environmentalists", "Book Enthusiasts");
  var descriptions = new Array("description 1.", "description 2.", "description 3.");

  var descContainer = document.getElementsByClassName('s_content')[0];
  var featuredCommunityName = descContainer.getElementsByTagName('h1')[0];
  var featuredCommunityDesc = descContainer.getElementsByTagName('p')[0];

  featuredCommunityName.innerHTML = communities[randomNumber];
  featuredCommunityDesc.innerHTML = descriptions[randomNumber];
}
var randomNumber = random();
rImg(randomNumber);
rDesc(randomNumber);
