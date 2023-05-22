const project = (name) => {
    const todoList = [];

    const getTodoList = () => todoList;
    const getName = () => name;
    const addTodo = (todo) => todoList.push(todo);

    const getTodo = (index) => {
        const todo = todoList[index];
        return todo;
    }

    return {getName, addTodo, getTodoList, getTodo};
}

export default project;