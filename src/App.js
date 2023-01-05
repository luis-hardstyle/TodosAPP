import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";


const todos = [
  { text: 'Cortar Cebolla', completed: false},
  { text: 'tomar un curso', completed: false},
  { text: 'llorar con la llorona', completed: false},
]

function App() {
  return (
    <>
    <TodoCounter/>
    <TodoSearch/>

    <TodoList>
      {todos.map(todo =>(
        <TodoItem key= {todos.text} text={todo.text} completed={todo.completed} />
        ))}
    </TodoList>

    <CreateTodoButton/>
    </>
  );
}

export default App;
