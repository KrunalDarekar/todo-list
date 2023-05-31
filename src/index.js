import { headerElement, mainElement, footerElement, addProjectModalElement } from "./page-load";
import todo from "./todo";
import project from "./project";
import { onInboxClick, onAddProjectClick } from "./on-click";
import "./style.css"

const header = headerElement();
const main = mainElement();
const footer = footerElement();
const addProjectModal = addProjectModalElement();

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(addProjectModal);
document.body.appendChild(footer);

const inbox = project("inbox");

const projects = [];

const inboxBtn = document.querySelector(".inbox");
const addProjectBtn = document.querySelector(".add-project-btn")
const todoDisplay = document.querySelector(".todoDisplay");

inboxBtn.addEventListener("click", () => onInboxClick(todoDisplay));
addProjectBtn.addEventListener("click", () => onAddProjectClick());