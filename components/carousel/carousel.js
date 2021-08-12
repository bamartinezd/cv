import experience from "../../data/card-experience.data.js";

const carouselContainer = document.getElementById('carousel-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const stepValue = 300;
let counter = 0;

function prevStep() {
    if (counter !== 0) {
        counter = counter - stepValue;
        carouselContainer.scrollLeft = counter;
    }
}

function nextStep() {
    if (counter < (stepValue * experience.length -1)) {
        counter = counter + stepValue;
        carouselContainer.scrollLeft = counter;
        console.log(carouselContainer.scrollLeft);
    }
}

prevButton.addEventListener('click', prevStep);
nextButton.addEventListener('click', nextStep);