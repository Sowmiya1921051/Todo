import React, { useState } from 'react'

function Body() {
    const[todo,setTodo]=useState([])
    const[inputValue,setInputvalue]=useState()

    const inputChange = (e)=>{
        setInputvalue(e.target.value)
    }

    const addTodo = ()=>{
        if(inputValue)
        setTodo([...todo,inputValue])
        setInputvalue('')
    }
    // const handleDeleteClick= (index)=> {
    //     const newTodos = [...todo];
    //     newTodos.splice(index, 1);
    //     setTodo(newTodos);
    //   }
  return (
    <div>
        <p className='justify-center flex w-150 max-w-md mx-auto p-5 text-7xl'>Tasks</p>
        
        <div className='justify-center flex w-150 max-w-md mx-auto p-5 bg-slate-200'>
            <input className='border-4 border-green-600 p-2' type='text' value={inputValue} placeholder='Type the text' onChange={inputChange}/>
            <button className='text-white font-bold bg-green-600 p-2' onClick={addTodo}>Add </button>
        </div>
        <ul className='justify-center flex w-150 max-w-md mx-auto p-5 bg-slate-200'>
           {todo.map((todoName,index)=>(
            <li key={index}>{todoName}
            {/* <button onClick={() => handleDeleteClick(index)}>Delete</button> */}
            </li>
           ))}
        </ul>
    </div>
  )
}

export default Body