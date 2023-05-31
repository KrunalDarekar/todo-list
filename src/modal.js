const newModal = () => {
    const modalElement = document.createElement("div");
    const modal = document.createElement("section");
    const overlay = document.createElement("div");

    modal.classList.add("modal");
    overlay.classList.add("overlay");

    modalElement.appendChild(modal);
    modalElement.appendChild(overlay);

    return modalElement;
}

export { newModal};