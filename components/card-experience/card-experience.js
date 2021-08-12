import experience from "../../data/card-experience.data.js";
import createElement from "../../functions/generic-functions.js";

const carouselContainer = document.getElementById('carousel-container');

function loadData() {
    console.log(experience);
    for (let index = 0; index < experience.length; index++) {
        const element = experience[index];
        carouselContainer.appendChild(createCardExperience(element));
    }
}

function createCardExperience(experienceObj) {

    const cardContainerExperience = createElement('div', 'card-container-experience');
    
    const cardExperience = createElement('div', 'card-experience');

    const logoExperience = createElement('div', 'logo-experience');
    const imgLogo = createElement('img');
    imgLogo.src = experienceObj.image;
    logoExperience.appendChild(imgLogo);

    const textExperience = createElement('div', 'text-experience');

    const experienceTitle = createElement('div', 'experience-title');
    experienceTitle.textContent = experienceObj.position;

    const experienceCompany = createElement('div', 'experience-company');
    experienceCompany.textContent = experienceObj.companyName;

    const experienceDate = createElement('div', 'experience-date');
    experienceDate.textContent = experienceObj.dateRange;

    textExperience.append(experienceTitle, experienceCompany, experienceDate);

    cardExperience.append(logoExperience, textExperience);

    cardContainerExperience.appendChild(cardExperience);

    return cardContainerExperience;
}

loadData();