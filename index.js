var number1=Math.floor(Math.random()*6 +1);
var random_image="dice"+number1+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",random_image);



var number2=Math.floor(Math.random()*6 +1);
var random_image="dice"+number2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",random_image);



if (number1>number2) {
    document.querySelector("h1").innerHTML="player 1 win !";
}
else{
    document.querySelector("h1").innerHTML="player 2 win !";
}
