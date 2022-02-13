
    var randomvariable1=Math.floor(Math.random()*6)+1;
var img1="dice"+randomvariable1+".png";
var randomimagesrc1=img1;
document.querySelectorAll("img")[0].setAttribute("src",randomimagesrc1);

var randomvariable2=Math.floor(Math.random()*6)+1;
var img2="dice"+randomvariable2+".png";
var randomimagesrc2=img2;
document.querySelectorAll("img")[1].setAttribute("src",randomimagesrc2);

if (randomvariable1>randomvariable2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (randomvariable1<randomvariable2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!"; 
}
