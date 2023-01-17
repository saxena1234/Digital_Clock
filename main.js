const date1 = new Date();
var hour1 = date1.getHours();
var num = 0;
var colors = ["rgb(10, 120, 10)", "rgb(20, 120, 20)", "rgb(30, 120, 30)", "rgb(40, 120, 40)", "rgb(50, 120, 50)", "rgb(60, 120, 60)", "rgb(70, 120, 70)", "rgb(80, 120, 80)", "rgb(90, 120, 90)", "rgb(100, 120, 100)", "rgb(110, 120, 110)", "rgb(120, 120, 120)", "rgb(130, 120, 130)", "rgb(140, 120, 140)", "rgb(150, 120, 150)", "rgb(160, 120, 160)", "rgb(170, 120, 170)", "rgb(180, 120, 180)", "rgb(190, 120, 190)", "rgb(200, 120, 200)", "rgb(210, 120, 210)", "rgb(220, 120, 220)", "rgb(230, 120, 230)", "rgb(240, 120, 240)", "rgb(250, 120, 250)"]
function displayDate() {
    //function for displaying date
    const date = new Date();

    var hrs = document.getElementById("hrs");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");

    document.title = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var hour = date.getHours();
    hrs.innerHTML = hour;
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();

    var secc = document.getElementById("sec");
    secc.style.background = colors[num];

    num += 1;

    if (num > 24) {
        num = 0;
    }


}

function promptbox() {
    //function for asking name from the user
    var person = prompt("Please enter your name", "Amit Verma");
    var name;

    if (person == null || person == "") {

        name = "Sir!";

    }
    else {
        name = person;

        localStorage.setItem("name", name);//store the name in local storage
        console.log(localStorage.getItem("name"));


    }
    location.reload();//reload the document after assigning the new name
}

function greetbox() {
    //function if the name is stored is  stored in local storage then display it other wise ask for name
    if (localStorage.getItem("name")) {
        wish(localStorage.getItem("name"), hour1);

    }
    else {
        promptbox();
    }





}

function wish(name, hour) {
    //wish the user according to time
    var greetdiv = document.getElementById("greet");
    if (hour < 12) {
        greetdiv.innerHTML = "Good Morning " + name + " !";
    }

    else if (hour < 18) {
        greetdiv.innerHTML = "Good Afternoon " + name + " !";
    }
    else {
        greetdiv.innerHTML = "Good Evening " + name + " !";
    }

}

greetbox();



setInterval(displayDate, 1000);



var images = ["pexels-alexander-kovalev-2847648.jpg", "pexels-belle-co-672913.jpg", "pexels-lumn-311039.jpg", "pexels-miguel-á-padriñán-255379.jpg", "pexels-scott-webb-3255761.jpg", "abstract-1846979_1920.jpg", "pexels-simon-berger-1323550.jpg", "v748-toon-111.jpg", "cloudy-2294671_1920.jpg", "plants-6205510_1920.jpg", "tree-5414036_1920.jpg", "woman-7281733_1920.jpg"];
var imgindex = 0;
function changebg() {
    //function for toggling different images
    
    document.body.style.backgroundImage = "url(" + images[imgindex] + ")";
    imgindex += 1;
    if (imgindex > 11) {
        imgindex = 0;
    }

}