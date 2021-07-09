import reducer from './index';
import { ADD_TODO, REMOVE_TODO, TO_PROGRESS, TO_DONE } from '../actions';

const initialState = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {
  switch(action.type) {
    // Aca va tu codigo;
// Aca va tu codigo;
case ADD_TODO:
  //title, description, place, date, id y un status;
      return state = [...state, action.payload]
        // title: action.payload.title,
        // description: action.payload.description,
        // place: action.payload.place,
        // date: action.payload.date
        
    case REMOVE_TODO:
      return state.filter( e => e.id !== action.payload) 

    case TO_DONE:
      return state.map( e => e.id === action.payload ? {...e,status:"Done"}:e)   
    
    case TO_PROGRESS:
      return state.map( e => e.id === action.payload ? {...e,status:"InProgress"}:e)   
      
    default:
            return state;
  }
}

export default todos;
