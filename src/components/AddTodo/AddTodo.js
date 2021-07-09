import React from 'react';
import { connect } from "react-redux";
import { addTodo } from '../../actions'
// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo({addTodo}) {
  
  const [todo, setState] = React.useState({
    title: '',
    description: '',
    place: '',
    date: ''
  })
  
  function handleOnSubmit (e) {
    e.preventDefault();
    addTodo(todo)
  }

  function handleChange (e){
    setState({
      ...todo,
      [e.target.name]: e.target.value
    })
  } 

  return (
    <div>
     
    <form type="submit" onSubmit={handleOnSubmit}>
      <div>
        <label>
          Title
          </label>
        <input name="title" onChange={handleChange} placeholder="title" value={todo.title}  />
      </div>
      <div>
        <label>
          Description
          </label>
        <textarea name="description" onChange={handleChange} placeholder="description" value={todo.description}  />
      </div>
      <div>
        <label>
          Place
          </label>
        <input name="place" onChange={handleChange} placeholder="place" value={todo.place} />
      </div>
      <div>
        <label>
          Date
          </label>
        <input name="date" onChange={handleChange} placeholder="date" value={todo.date}  />
      </div>

      <div>
        <button type="submit" name="agregar todo"/>
      </div>
    </form>

    </div>
  )
};

function mapDispatchToProps(dispatch) {
  return {
      addTodo: todo => dispatch(addTodo(todo)),
  };
}
export default connect(null, mapDispatchToProps)(AddTodo)