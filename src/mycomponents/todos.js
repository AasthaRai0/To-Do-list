import React from 'react'
import { Todoitem } from "./todoitem";

export const Todos = (props) => {
    let myStyle = {
        minheight: "70vh",
        margin: "40px auto",

    };
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {/* <Todoitem todo= {props.todos[0]}/> */}
      {props.todos.length ===0? "NO TODOS TO DISPLAY":
        props.todos.map((todo) => (
        <Todoitem todo={todo} key={todo.sno} onDelete = {props.onDelete}/>
      ))
      }
    </div>
  )
}

