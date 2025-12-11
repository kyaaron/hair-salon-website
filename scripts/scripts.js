const navbarContainer = document.querySelector(".navbar-container");
const hamburgerIcon = document.querySelector(".hamburger-icon");

// Event listener to open/close the navbar menu
hamburgerIcon.addEventListener("click", () => {
    navbarContainer.classList.toggle("menu-open");
    const isExpanded = navbarContainer.classList.contains("menu-open");
    hamburgerIcon.setAttribute("aria-expanded", isExpanded);

    console.log(`Menu is now ${isExpanded ? 'open' : 'closed'}`);
})