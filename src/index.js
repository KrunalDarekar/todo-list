import { headerElement, mainElement, footerElement } from "./page-load";
import "./style.css"

const header = headerElement();
const main = mainElement();
const footer = footerElement();

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

