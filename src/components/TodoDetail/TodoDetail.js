import React from 'react';
import {toDone,toInProgress,removeTodo} from "../../actions" 
import { connect } from 'react-redux';
import {useEffect} from 'react';

export function TodoDetail(props) {
  useEffect(() => {

  })

  return (
    <div>
    {props.estado ? 
    props.estado.filter(el => el.id===parseInt(props.id)).map(e=>
    <div>
    <h1>{e.title}</h1>
    <p>{e.description}</p>
    <p>{e.place}</p>
    <p>{e.date}</p>
    <p>{e.id}</p>
    <p>{e.status}</p>
    <button onClick={()=>{props.toDone(e.id)}}>Done</button>
    <button onClick={()=>{props.toInProgress(e.id)}}>In Progress</button>
    <button onClick={()=>{props.removeTodo(e.id)}}>Remove</button>
    </div>)
    :<h1>No hay todo</h1>
    }  
    </div>
  )
};


const MapStateToProps =(state)=>{
  return {estado:state};
}

// function MapDispatchToProps(){
// return
// }

export default connect(MapStateToProps,{toDone,toInProgress,removeTodo})(TodoDetail)

