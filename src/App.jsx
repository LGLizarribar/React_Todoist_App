import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import storage from './services/storage';
import { Navbar, MainList, Completed } from "./components";
import "./App.scss";

/*const INITIAL_TODOS = [
  {
    id: '3b04f220-fd90-4cf5-8e6a-3da6694b6874',
    title: 'Hacer la comida',
  },
  {
    id: '83d001a2-1935-4d63-b3a2-49dd437a8d4f',
    title: 'Terminar el proyecto de Node',
  },{
    id: '5b3a954b-22d3-4b1f-b933-4f6f3708010d',
    title: 'Aprender React',
  },{
    id: '4b14843c-01e0-4092-9c09-e2fffb344d8b',
    title: 'Echar horas a react',
  },
];*/

const INITIAL_TODOS = storage.getItem('todos') || [];
const INITIAL_COMPLETED = storage.getItem('completed') || [];


const App = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [completed, setCompleted] = useState(INITIAL_COMPLETED);
  const [searchInput, setSearchInput] = useState('');

  const completeTodo = (todoId) => {
    const todo = todos.find((t) => t.id === todoId);
    setCompleted([...completed, todo]);
    storage.setItem('completed', [...completed, todo]);

    const newTodos = todos.filter((t) => t.id !== todoId);
    setTodos(newTodos);
    storage.setItem('todos', newTodos);
  };

  const uncompleteTodo = completeId => {
    const complete = completed.find((c) => c.id === completeId);
    setTodos([...todos, complete]);
    storage.setItem('todos', [...todos, complete]);

    const newCompleted = completed.filter((c) => c.id !== completeId);
    setCompleted(newCompleted);
    storage.setItem('completed', newCompleted);
  };

  const newTask = (task) => {
    const taskToAdd = {
      title: task,
      id: uuidv4(),
    }

    setTodos([...todos, taskToAdd]);
    storage.setItem('todos', [...todos, taskToAdd]);
  };

  const changeSearchInput = (search) => {
    setSearchInput(search.toLowerCase());
  }

  const filterTodos = () => {
    if(searchInput){
      return todos.filter(t => t.title.toLowerCase().includes(searchInput));
    } else {
      return todos;
    }
  };

  const filterCompleted = () => {
    if(searchInput){
      return completed.filter(t => t.title.toLowerCase().includes(searchInput));
    } else {
      return completed;
    }
  };

  return (
    <Router>
      <div className="app">
        <Navbar changeSearchInput={changeSearchInput} searchInput={searchInput}/>

        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <MainList
              {...props}
              todos={filterTodos()}
              handleTodo={completeTodo}
              newTask={newTask}/
              >}
            />
          <Route
            exact
            path="/completed"
            component={(props) => <Completed
              {...props}
              completed={filterCompleted()}
              handleTodo={uncompleteTodo}
              />}
            />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
