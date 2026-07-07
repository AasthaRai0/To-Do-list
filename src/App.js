import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './mycomponents/header';
import { Todos } from './mycomponents/todos';
import Footer from './mycomponents/footer';
import { Addtodo } from './mycomponents/addtodo';
import {About} from './mycomponents/about';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    console.log("I'm ondelete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const addtodo = (title, desc) => {
    console.log("I'm adding this todo", title, desc);
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    setTodos([...todos, mytodo]);
    console.log(mytodo);
  };

  return (
    <Router>
      <Header title="My Todos List" searchBar={false} />
      <Routes>
        <Route exact path="/" element={
            <>
              <Addtodo addtodo={addtodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
