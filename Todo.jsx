import React from 'react'

export default function Todo({todos, completeTask, removeTask}) {



  return todos.map((todo,index) => (
    <> 
    <div id='imp' className={todo.isComplete ? 'complete task-div' : 'task-div'} key={index} >
        <div className="todo-text">{todo.text}</div>        
        <div className="icons">
            <button className='tick' onClick={() => {removeTask(todo.id)}} >✔</button>
        </div>
    </div>
    </>
  ))
}
