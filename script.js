var myFavouriteNumber = 21;
var myName = "Evan";
var thisIsTrue = true;
var comment = [];
var likes = 0;

if(likes == 10){
    console.log("10 People Liked Your Post!")
}
else if(likes == 20){
    console.log("20 People Liked Your Post!")
}
else{}

var names = ["Evan", "Rowan", "Senan"];

console.log(names[2])

document.onload(greeting)

function addLike(){
    likes++;
    console.log(likes)
}

function addComment(){
    comment.push(document.getElementById("commentBox").value);
    document.getElementById("comments").innerHTML = "";

    for(var count = 0; count < comment.length; count++){
        document.getElementById("comments").innerHTML += comment[count] + "/n";
        console.log(comment[count])
    }
}

function greeting(){
    var greeting = "Hello " + myName + ", welcome to the Anti-Club.";
    document.getElementById("greetings").innerHTML = greeting
}

function changeFont(){
    document.getElementById("title").style.fontFamily = "Impact";
    document.getElementById("title").style.fontSize = 10;
}