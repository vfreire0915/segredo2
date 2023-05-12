var button = document.getElementById("sumir");
var depois = document.querySelector(".apos");
var img = document.querySelector(".img");

button.addEventListener("click", function() {
    button.style.display = "none";
    depois.innerHTML = "Parece que só restou uma opção";
    img.style.display = "block";
});
