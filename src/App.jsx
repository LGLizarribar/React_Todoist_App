import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Navbar, MainList, Completed } from "./components";
import "./App.scss";

const INITIAL_TODOS = [
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
    title: 'Echar la siesta',
  },
]

const App = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [completed, setCompleted] = useState([]);

  const completeTodo = (todoId) => {
    const todo = todos.find((t) => t.id === todoId);
    setCompleted([...completed, todo]);
    const newTodos = todos.filter((t) => t.id !== todoId);
    setTodos(newTodos);
  };

  const uncompleteTodo = completeId => {
    const complete = completed.find((c) => c.id === completeId);
    setTodos([...todos, complete]);
    const newCompleted = completed.filter((c) => c.id !== completeId);
    setCompleted(newCompleted);
  };

  const newTask = (task) => {
    const taskToAdd = {
      title: task,
      id: uuidv4(),
    }

    setTodos([...todos, taskToAdd]);
  }

  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <MainList
              {...props}
              todos={todos}
              handleTodo={completeTodo}
              newTask={newTask}/
              >}
            />
          <Route
            exact
            path="/completed"
            component={(props) => <Completed
              {...props}
              completed={completed}
              handleTodo={uncompleteTodo}
              />}
            />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
