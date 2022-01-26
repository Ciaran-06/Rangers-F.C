function changeTheme() {
    var scheme = document.getElementById("theme").value;
    var elements = document.body

    if (document.getElementById("theme").checked) {
        console.log("away")
        elements.classList.toggle("dark-mode");

    } else {
        console.log("home")
        elements.classList.toggle("dark-mode");
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}