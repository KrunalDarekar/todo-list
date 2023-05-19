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

    main.classList.add("main");
    sidebar.classList.add("sidebar");
    todoDisplay.classList.add("todoDisplay");

    main.appendChild(sidebar);
    main.appendChild(todoDisplay);

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