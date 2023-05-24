import { headerElement, mainElement, footerElement } from "./page-load";
import todo from "./todo";
import project from "./project";
import { onInboxClick } from "./on-click";
import "./style.css"

const header = headerElement();
const main = mainElement();
const footer = footerElement();

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

const inbox = project("inbox");

const inboxBtn = document.querySelector(".inbox");
const todoDisplay = document.querySelector(".todoDisplay");

inboxBtn.addEventListener("click", () => onInboxClick(todoDisplay));