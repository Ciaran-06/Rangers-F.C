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