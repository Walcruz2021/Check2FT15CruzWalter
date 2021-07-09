// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 0

export const ADD_TODO = "AddTodo";

export const REMOVE_TODO =  "RemoveTodo"

export const TO_PROGRESS = "ToInProgress";

export const TO_DONE = "ToDone";


export function addTodo(payload){
    // payload =title: 'ejercicio',status: 'Todo',id: 1
        return {
            type: ADD_TODO,
            payload: {
            ...payload,
            id:++todoId,
            status:"Todo"
    
            }
        }
    }
    
    export function removeTodo(valor){
        
        return {
            type: REMOVE_TODO,
            payload:valor
        }
    }
    
    export function toInProgress(valor){
        return {
            type: TO_PROGRESS, 
            payload:valor
        }
    }
    
    export function toDone(valor){
        return {
            type: TO_DONE, 
            payload:valor
        }
    }