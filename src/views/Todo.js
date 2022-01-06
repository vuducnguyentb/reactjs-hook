const Todo = (props) => {
  //   const todos = props.myData;
  //   console.log("check props", props);
  const { todos, title, deleteTodo } = props;
  const handleDeleteTodo = (todo) => {
    // console.log("click", todo.id);
    // console.log(deleteTodo);
    deleteTodo(todo);
  };
  return (
    <div className="todos-container">
      <h3>{title}</h3>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.title}
              &nbsp;&nbsp; <span onClick={() => handleDeleteTodo(todo)}>x</span>
            </li>
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default Todo;
