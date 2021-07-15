import React,{useState} from "react";
import "../App.css";

const Compt1 = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos((oldValue)=>{
        return [...oldValue,newTodo] 
    })
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((para3) => {
      if (para3.id === id) {
        para3.completed = !para3.completed;
      }
      return para3;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((para2) => {
      if (para2.id === id) {
        para2.text = editingText;
      }
      return para2;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((para) => (
        <div key={para.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={para.completed}
              onChange={() => toggleComplete(para.id)}
            />
            {para.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{para.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {para.id === todoEditing ? (
              <button onClick={() => submitEdits(para.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(para.id)}>Edit</button>
            )}

            <button onClick={() => deleteTodo(para.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Compt1;