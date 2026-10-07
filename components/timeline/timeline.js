import experience from "../../data/card-experience.data.js";
import createElement from "../../functions/generic-functions.js";

const timelineColors = [
  "#1fde82",
  "#0a66c2",
  "#e74c3c",
  "#f39c12",
  "#9b59b6",
  "#1abc9c"
];

function initTimeline() {
  const container = document.querySelector(".section-experience .timeline-wrapper");
  if (!container || experience.length === 0) return;

  const list = container.querySelector(".timeline-list");

  for (let i = 0; i < experience.length; i++) {
    const exp = experience[i];
    const color = timelineColors[i % timelineColors.length];

    const item = createElement("div", "timeline-item");
    item.dataset.index = i;
    item.style.setProperty("--dot-color", color);

    const name = createElement("div", "company-name");
    name.textContent = exp.companyName;

    const position = createElement("div", "company-position");
    position.textContent = exp.position;

    const dateEl = createElement("div", "company-date");
    dateEl.textContent = exp.dateRange;

    const descEl = createElement("div", "company-desc");
    descEl.textContent = exp.description;

    item.append(name, position, dateEl, descEl);
    list.appendChild(item);

    item.addEventListener("mouseenter", () => highlightCompany(i));
    item.addEventListener("mouseleave", () => unhighlightCompany());
  }
}

let activeIndex = null;

function highlightCompany(index) {
  if (activeIndex !== null) {
    const prev = document.querySelector(`.timeline-item[data-index="${activeIndex}"]`);
    if (prev) prev.classList.remove("active");
  }
  activeIndex = index;
  const item = document.querySelector(`.timeline-item[data-index="${index}"]`);
  if (item) item.classList.add("active");
}

function unhighlightCompany() {
  if (activeIndex !== null) {
    const item = document.querySelector(`.timeline-item[data-index="${activeIndex}"]`);
    if (item) item.classList.remove("active");
  }
  activeIndex = null;
}

initTimeline();
