const todo = (title, dueDate) => {
    this.title = title;
    this.checklist = false;
    this.dueDate = dueDate;

    const getTitle = () => this.title;
    const getCheckList = () => this.checklist;
    const getDueDate = () => this.dueDate;

    return {getTitle, getCheckList, getDueDate};
};

export default todo;