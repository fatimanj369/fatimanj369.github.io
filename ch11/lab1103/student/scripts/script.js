function toggleMenu() {
    const navList = document.querySelector("nav ul");
    if (navList.style.display === "block") {
        navList.style.display = "none";
    } else {
        navList.style.display = "block";
    }
}
