var gotNumberOfImages = false;


// Set up the image files to be used.
var theImages = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array.


var numberOfImages;
if (navigator.onLine) { //checking if connected to internet, if it finds the user is online it'll call the images that are on the server.
for(i = 0; i<localStorage.numberOfImages;i++){
  theImages[i] = 'http://ahansabharwal.com/images/'+ i +'.jpg'; //NAME THE IMAGES ON THE SERVER 0.JPG, 1.JPG, 2.JPG and so on.
}
} else { //if offline, if it finds that the user is offline it'll use these images. REMEMBER TO PUT A FEW OF THESE.
theImages[0] = 'image1.jpg'
theImages[1] = 'image2.jpg'
theImages[2] = 'image3.jpg'

/*DEFAULT QUOTE*/
var strQuote = document.getElementById("quote").innerHTML;
var resQuote = strQuote.replace("quote", "The forces that unite us are intrinsic and greater than the superimposed influences that keep us apart");
document.getElementById("quote").innerHTML = resQuote;

var strBy = document.getElementById("byLink").innerHTML;
var resBy = strBy.replace("by", "Kwame Nkrumah");
document.getElementById("byLink").innerHTML = resBy;

var byLink = document.getElementById("byLink"); //replacing the wikipedia link of the person the quote is by
byLink.setAttribute('href', "https:\/\/en.wikipedia.org/wiki/Kwame_Nkrumah");
}





var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
  preBuffer[i] = new Image()
  preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showNewImage(){
  document.body.style['background-image'] = 'url("' + theImages[whichImage] + '")';
  //localStorage.img = theImages[whichImage];

}
showNewImage();
document.body.style['background-image'] = 'width: 1440px; height: 900px; object-fit: contain;background-color: rgba(0, 0, 0, 0.48);';

if(localStorage.military == null){
  localStorage.military = "militarytime_off";
}
/*MILITARY TIME*/
$('.military').change( function () {
  localStorage.military = this.value;
  location.reload();
  //alert(localStorage.military)
});

if(localStorage.military == "militarytime_on"){
  document.getElementById("militaryON").checked = true;
}
else{
  document.getElementById("militaryOFF").checked = true;
}

window.onload = function() {
  //showNewImage();
  /*var str = document.getElementById("greet").innerHTML;
  var res = str.replace("\'\'", " " + localStorage.name); // replace with name
  document.getElementById("greet").innerHTML = res;*/

  $(document).ready(function(){

    /*var a=$('#quoteDIV');
    a.delay(900).fadeIn();*/


  })

};


/*$('#quoteDIV').hover(function() {
  $('#by').toggle();
});*/


/*CLOCK CODE*/
function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var diem = "AM";

  var myClock = document.getElementById('clock');

if(localStorage.military == "militarytime_off"){
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours >= 12) {
    hours = hours - 12;
    diem = "PM";
  }

  if (hours === 0) {
    hours = 12;
  }
}

  if(localStorage.military == "militarytime_on"){
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours >= 12) {
      hours = hours;
      diem = "PM";
    }

    if (hours === 0) {
      hours = 12;
    }
  }

  myClock.innerText = hours + ":" + minutes + " ";

  /*if (seconds == 0) {
  color();
}*/
}

displayTime();
setInterval(displayTime, 1000);
//setInterval(function() { document.body.style.backgroundColor = color();
//}, 1000);


/*Menu-settings*/
$( "#settings, #admin_settings" ).on( "click", function()
{
  $( "#menu" ).fadeToggle( "fast" );
});

/*TEXTFIELD NAME
$('.name').change( function () {
  localStorage.name = this.value;
  var str = document.getElementById("greet").innerHTML;
  var res = str.replace("\'\'", " " + localStorage.name);
  document.getElementById("greet").innerHTML = res;
  location.reload();
});

var d = new Date(); // for now
var hrs = d.getHours(); // => 9
var count = 0;*/

/*
if(hrs == 0 || hrs == 1 || hrs == 2 || hrs == 3 || hrs == 4 || hrs == 5 || hrs == 6 || hrs == 7 || hrs == 8 || hrs == 9 || hrs ==10 || hrs == 11){
  var str = document.getElementById("greet").innerHTML;
  var res = str.replace("Hello", "Good morning");
  document.getElementById("greet").innerHTML = res;
}

if(hrs == 12 || hrs == 13 || hrs == 14 || hrs == 15 || hrs == 16){
  var str = document.getElementById("greet").innerHTML;
  var res = str.replace("Hello", "Good afternoon");
  document.getElementById("greet").innerHTML = res;
}

if(hrs == 17 || hrs == 18 || hrs == 19 || hrs == 20 || hrs == 21 || hrs == 22 || hrs == 23){
  var str = document.getElementById("greet").innerHTML;
  var res = str.replace("Hello", "Good evening");
  document.getElementById("greet").innerHTML = res;
}*/


/*SEARCH*/

var quotes = [["Peace is costly but it is worth the expense.","Kenyan proverb"],
              ["War has no eyes.", "Swahili saying"],
              ["When a king has good counselors, his reign is peaceful.", "Ashanti proverb"],
              ["Peace does not make a good ruler.", "Botswana proverb"],
              ["There can be no peace without understanding.", "Senegalese proverb"],
              ["Milk and honey have different colors, but they share the same house peacefully.", "African proverb"],
              ["If you can't resolve your problems in peace, you can't solve them with war.", "Somalian proverb"],

              ["When there is peace in the country, the chief does not carry a shield.","Ugandan proverb"],
              ["Speak softly and carry a big stick; you will go far.", "West African proverb"],
              ["He who thinks he is leading and has no one following him is only taking a walk.", "Malawian proverb"],
              ["An army of sheep led by a lion can defeat an army of lions led by a sheep.", "Ghanaian proverb"],
              ["He who refuses to obey cannot command.", "Kenyan proverb"],
              ["A large chair does not make a king.", "Sudanese proverb"],
              ["A leader who does not take advice is not a leader.", "Kenyan proverb"],

              ];


                                        var randomQuoteNumber=Math.floor(Math.random()*7);
                                        var strQuote = document.getElementById("quote").innerHTML;
                                        var resQuote = strQuote.replace("quote", quotes[randomQuoteNumber][0]);
                                        document.getElementById("quote").innerHTML = resQuote;

                                        var strBy = document.getElementById("byLink").innerHTML;
                                        var resBy = strBy.replace("by", quotes[randomQuoteNumber][1]);
                                        document.getElementById("byLink").innerHTML = resBy;

$('#slide_menu').css("display", "none");

var carouselItems = $('#display').children().get();
var dots = $('.dots_positioning').get();
var position = 0;
$(carouselItems[1]).hide();
$(carouselItems[2]).hide();
$(dots[position]).addClass('dots_full');

$('#carousel_right').click(function(){

    switch(position)
    {
      case 0:
      $('#display').css('left', '-100%');
      $(carouselItems[position]).fadeOut(1500);
      $(carouselItems[position]).fadeOut(1500);

      $(dots[position]).removeClass('dots_full');
      
      position++;
      $(dots[position]).addClass('dots_full');
      $(carouselItems[position]).fadeIn(1500);
      break;  
      case 1:
      $('#display').css('left', '-200%');
      $(carouselItems[position]).fadeOut(1500);
      $(dots[position]).removeClass('dots_full');

      position++;

      $(dots[position]).addClass('dots_full');
      $(carouselItems[position]).fadeIn(1500);
      break;      
      default:
      break;
    }   

});

$('#carousel_left').click(function(){

    switch(position)
    {
      case 2:
      $('#display').css('left', '-100%');
      $(carouselItems[position]).fadeOut(1500);
      $(dots[position]).removeClass('dots_full');
      position--;
      $(dots[position]).addClass('dots_full');
      $(carouselItems[position]).fadeIn(1500);
      break;  
      case 1:
      $('#display').css('left', '0%');
      $(carouselItems[position]).fadeOut(1500);
      $(dots[position]).removeClass('dots_full');
      position--;
      $(dots[position]).addClass('dots_full');
      $(carouselItems[position]).fadeIn(1500);
      break;      
      default:
      break;
    }   

});

$('#overlay').addClass('night_mode');

var slices = $('.slices').get();
var isOpen = false;

$('#burger').click(function(){

if(isOpen)
{

  $('body').removeClass('slide_in_menu');  
  $(slices[0]).removeClass('rotate1');
  $(slices[1]).removeClass('hide');
  $(slices[2]).removeClass('rotate2');
  $('#slide_menu').fadeOut(1500);
  isOpen = false;
}
else
{
  // $('#slide_menu').css("display", "block");
  $('#slide_menu').fadeIn(1500);
  $('body').addClass('slide_in_menu');    
  $(slices[0]).addClass('rotate1');
  $(slices[1]).addClass('hide');
  $(slices[2]).addClass('rotate2');
  isOpen = true;
}
});

$('#signup').click(function(){

  $('#bar').addClass('slide_bar');

});
$('#login').click(function(){

  $('#bar').removeClass('slide_bar');

});