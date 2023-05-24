const onInboxClick = (display) => {
    display.textContent = "";
    const title = document.createElement("div");
    title.classList.add(".title");
    title.textContent = "Inbox";
    
    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add(".add-task-btn");
    addTaskBtn.textContent = "+ Add Task";

    display.appendChild(title);
    display.appendChild(addTaskBtn);
}

export { onInboxClick};