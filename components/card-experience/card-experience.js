import experience from "../../data/card-experience.data.js";
import createElement from "../../functions/generic-functions.js";

const experienceContainer = document.getElementById('experience-container');

function loadData() {
    console.log(experience);
    for (let index = 0; index < experience.length; index++) {
        const element = experience[index];
        experienceContainer.appendChild(createCardExperience(element));
    }
}

function createCardExperience(experienceObj) {
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

    return cardExperience;
}

loadData();