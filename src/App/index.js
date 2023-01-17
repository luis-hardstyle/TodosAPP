import { useState } from "react";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";


const defaultTodos = [
  { text: 'Cortar Cebolla', completed: false},
  { text: 'tomar un curso', completed: false},
  { text: 'llorar con la llorona', completed: false},
]

function App() {
  const [todo, setTodo] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodo = todo.filter(todo => !!todo.completed).length;
  const totalTodos = todo.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todo;
  }else{
    searchedTodos = todo.filter(todo =>{
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText);
    })
    
  }

  const completeTodo = (text) =>{
    const todoIndex = todo.findIndex(todo => todo.text === text);

    const newTodos = [...todo];
    todo[todoIndex].completed = true;
    setTodo(newTodos);
    
  }

  const deleteTodo = (text) =>{
    const todoIndex = todo.findIndex(todo => todo.text === text);

    const newTodos = [...todo];
    newTodos.splice(todoIndex, 1);
    setTodo(newTodos);
    
  }

  return (
    <>
    <TodoCounter
    total={totalTodos}
    completed= {completedTodo}
    />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <TodoList>
      {searchedTodos.map(todo =>(
        <TodoItem 
        key= {todo.text} 
        text={todo.text} 
        completed={todo.completed} 
        onComplete = {()=> completeTodo(todo.text)}
        onDelete = {()=>deleteTodo(todo.text)}
        />
        ))}
    </TodoList>

    <CreateTodoButton/>
    </>
  );
}

export default App;
