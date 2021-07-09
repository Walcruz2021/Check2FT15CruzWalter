import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import Todo from '../Todo/Todo';
import { connect } from 'react-redux';
import {useEffect} from 'react';

export function Todos(props) {
  useEffect(() => {

  })

  return (
    <div>
      <span>{props.status}</span>
      {props.estado ? props.estado.filter(el => el.status.toLowerCase() === props.status.toLowerCase()).map(e =>
      <li key={e.id}> 
      <Link to={`/edit/${e.id}`}>
        <Todo title={e.title} />
      </Link>
      {/* <button onClick={()=>{props.toDone(e.id)}}>X</button>
      <button onClick={()=>{props.toInProgress(e.id)}}>I</button>
      <button onClick={()=>{props.removeTodo(e.id)}}>remove</button> */}
      </li>
      ):
      <h1>cargando</h1>}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {estado:state};
}

export default connect(mapStateToProps,null)(Todos);

