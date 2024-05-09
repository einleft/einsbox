// LoadingScreen

const loadingScreen = document.getElementById("loadingScreen");

loadingScreen.addEventListener("click", () => {
    loadingScreen.classList.add("hideLoadingScreen");
    document.body.style.overflow = "auto";
});

document.body.style.overflow = "hidden";

const selector = document.getElementById("selector");
const divideElements = document.querySelectorAll('.divide');
let activeIndex = 0; // Initialize activeIndex variable

divideElements.forEach(function (divideElement, index) {
    divideElement.addEventListener('click', function () {
        // Remove 'active' class from all other .divide elements
        divideElements.forEach(function (element) {
            element.classList.remove('active');
        });

        // Add 'active' class to the clicked .divide element
        this.classList.add('active');
        activeIndex = index; // Update activeIndex when a divide is clicked
    });
});

selector.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        // Scrolled down
        if (activeIndex < divideElements.length - 1) {
            activeIndex++;
        }
    } else if (event.deltaY < 0) {
        // Scrolled up
        if (activeIndex > 0) {
            activeIndex--;
        }
    }

    // Remove 'active' class from all divide elements
    divideElements.forEach(function (element) {
        element.classList.remove('active');
    });

    // Add 'active' class to the currently active divide element
    divideElements[activeIndex].classList.add('active');
});

selector.addEventListener("mouseover", () => {
    selector.addEventListener("wheel", (event) => {
        event.preventDefault(); // Prevent default scrolling behavior on mouseover
    });
});