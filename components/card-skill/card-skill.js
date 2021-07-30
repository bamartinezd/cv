import skills from "../../data/card-skill.data.js";
import createElement from "../../functions/generic-functions.js";

const skillContainer = document.getElementById("skill-container");
const cardSkill = document.getElementsByClassName("card-skill");

let dotsContianer;

function addCardToSkillContainer(indexParam, lengthParam) {
    for (let index = indexParam; index < lengthParam; index++) {
        const element = skills[index];
        skillContainer.appendChild(createCardSkill(element));
    }
}

function createCardSkill(element) {
    const cardSkill = createElement("div", "card-skill", "fade-in");
    const imageContainer = createElement("div", "image-container");

    const image = createElement("img", null);
    image.src = element.image;

    const text = createElement("div", "tech");
    text.textContent = element.text;

    imageContainer.append(image);
    cardSkill.append(imageContainer, text);

    return cardSkill;
}

function createDotsElement(quantity) {
    dotsContianer = createElement("div", "dot");

    for (let index = 0; index < quantity; index++) {
        const dot = createElement("i", "fas", "fa-circle", "dot-icon");
        dot.id = index;
        dotsContianer.append(dot);
    }

    return dotsContianer;
}

function removeCardToSkillContainer() {
    // for (let index = 0; index < cardSkill.length; index++) {
    //     const element = cardSkill[index];
    //     skillContainer.removeChild(element);
    // }

    while (cardSkill.length > 0) {
        cardSkill[0].parentNode.removeChild(cardSkill[0]);
    }
}

addCardToSkillContainer(0, 2);

skillContainer.append(createDotsElement(3));

function seeSkills(id) {
    const index = id * 2;
    const length = index + 2;
    removeCardToSkillContainer();
    addCardToSkillContainer(index, length);
}

for (let index = 0; index < dotsContianer.children.length; index++) {
    const element = dotsContianer.children[index];

    element.addEventListener('click', e => {
        seeSkills(element.id);
    });
}