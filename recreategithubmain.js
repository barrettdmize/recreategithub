



$('.profileinfocontainer h1').append("<img src='" + myProfile.avatar_url + "'>");



$('.threestats1').text(myProfile.followers);
$('.threestats2').text(myProfile.public_gists);
$('.threestats3').text(myProfile.following);

//Courtesy of Grady

$('#repositories').click(function(event){
 event.preventDefault();
 $('.liststuff').css('display', 'block');
 $('#cont').css('display', 'none');
 $('#pa').css('display', 'none');
});

$('#pa-tab').click(function(event){
 event.preventDefault();
 $('#pa').css('display', 'block');
 $('#cont').css('display', 'none');
 $('#repo').css('display', 'none');
});

$('#cont-tab').click(function(event){
 event.preventDefault();
 $('#cont').css('display', 'block');
 $('#repo').css('display', 'none');
 $('#pa').css('display', 'none');
});

//////// Contributions Tab /////////

//////// Repository Tab ////////////
var repositories = repos.map(function(el){
 return el.name;
});
var repoLink = repos.map(function(el){
 return el.html_url;
});

var repoArray = [];

for(var i = 0; i < repositories.length; i++){
 repoArray += ["<li><a href=repoLink[i]>" +
               repositories[i] +
               "</a><div> type and stuff </div></li><hr>"];
}

$('#repo').html(repoArray);

//END OF COURTESY OF GRADY
