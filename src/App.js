import React from 'react'
import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import AddTodo from './components/AddTodo/AddTodo';
import TodoDetail from './components/TodoDetail/TodoDetail';

// En este componente deberias cargar tus rutas.
export function App() {

  return (
    <div className="App">
      Checkpoint M2
      {/* <Route path="/otraRuta" component={Nav}/> */}
      <Nav/>
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={AddTodo} />
      <Route path="/edit/:id" render={({match})=><TodoDetail id={match.params.id}/>}/>
    </div>
  );
}

export default App;
