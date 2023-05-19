const project = (name) => {
    this.name = name;
    this.todoList = [];

    const getName = () => this.name;
    const addTodo = (todo) => this.todoList.push(todo);

    return {getName, addTodo};
}

export default project;