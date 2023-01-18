import React from 'react';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext';


function AppUI() {
    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
    } = React.useContext(TodoContext);
    
    return (
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
  
        <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
          
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
  
  
        <CreateTodoButton />
      </React.Fragment>
    );
  }
  
  export { AppUI };