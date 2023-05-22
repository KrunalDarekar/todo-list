const todo = (title, dueDate) => {
    const checklist = false;

    const getTitle = () => title;
    const getCheckList = () => checklist;
    const getDueDate = () => dueDate;

    return {getTitle, getCheckList, getDueDate};
};

export default todo;