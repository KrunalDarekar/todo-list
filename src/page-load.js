const headerElement = () => {
    const header = document.createElement("header");
    header.classList.add("header");
    header.textContent = "Todo Lists";

    return header;
}

const mainElement = () => {
    const main = document.createElement("div");
    const sidebar = document.createElement("div");
    const todoDisplay = document.createElement("div");

    const inbox = document.createElement("button");
    const projects = document.createElement("div");

    main.classList.add("main");
    sidebar.classList.add("sidebar");
    todoDisplay.classList.add("todoDisplay");
    inbox.classList.add("inbox");
    projects.classList.add("projects");

    inbox.textContent = "Inbox";
    projects.textContent = "Projects";

    main.appendChild(sidebar);
    main.appendChild(todoDisplay);
    
    sidebar.appendChild(inbox);
    sidebar.appendChild(projects);

    return main;
}

const footerElement = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.textContent = "Copyright © 2023 KrunalDarekar";

    return footer;
}

export {
    headerElement,
    mainElement,
    footerElement
}