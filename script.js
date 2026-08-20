const welcomeButton = document.querySelector("#welcomeButton");
const welcomeMessage = document.querySelector("#welcomeMessage");

welcomeButton.addEventListener("click", () => {
    welcomeMessage.textContent = "Välkommen till min interaktiva portfolio!";
    welcomeButton.textContent = "Välkomstmeddelande visat";
    welcomeMessage.classList.toggle("visible");
});

const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const darkMode = document.body.classList.contains("dark-theme");
    themeButton.textContent = darkMode ? "Ljust tema" : "Mörkt tema";
});

const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((filterButton) => {
    filterButton.addEventListener("click", () => {
        const selectedCategory = filterButton.dataset.filter;

        filterButtons.forEach((button) => {
            button.classList.remove("active");
        });
        filterButton.classList.add("active");

        projects.forEach((project) => {
            if (selectedCategory === "all" || project.dataset.category === selectedCategory) {
                project.hidden = false;
            } else {
                project.hidden = true;
            }
        });
    });
});

document.querySelector("#currentYear").textContent = new Date().getFullYear(); 
