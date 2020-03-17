import React from  'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                
                <div className="collection-item" key ={todo.id}>
                <li class="collection-item"> {todo.content} <a href="#!" class="secondary-content "> <i onClick ={()=>{deleteTodo(todo.id)}} className="material-icons small rigth red-text" >close</i></a> </li>  
                
                </div>
                        
                 
            )
        })
    ):(
        <p className='center blue-text' >You have nothing left to do! congratulations</p>
    )

    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}
 
export default Todos;