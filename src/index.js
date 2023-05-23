import { headerElement, mainElement, footerElement } from "./page-load";
import todo from "./todo";
import project from "./project";
import "./style.css"

const header = headerElement();
const main = mainElement();
const footer = footerElement();

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

const inbox = project("inbox");

