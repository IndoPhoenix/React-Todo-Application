// creating the todo react component 

import { useState } from "react";



function Todo(){
  const [todos, Settodo] = useState([]);
   let [index, setIndex] = useState(0);
  

  function deleteTodo(indexToDelete) {
    const updatedTodos = todos.filter((i) => i.index !== indexToDelete);
    Settodo(updatedTodos);
  }

  function addTodo(e){ 
    
    e.preventDefault();
    setIndex(index+1);
    const form = document.querySelector("form");
    const title = form.children[0].value;
    const description = form.children[1].value;
    Settodo([...todos , {title : title, description : description , done : "done", index : index}]);
  }
  
  return (
    <div>
      <div>
       <form onSubmit={addTodo}>
       <input type="text" name = 'Title' placeholder="Title" required />
       <input type="text" name="Description" placeholder="Description" required />
       <input type="submit" placeholder="ADD"></input>
       </form>
       </div>

    {todos.map(i=>{
      return <Todoapp title = {i.title} description = {i.description} done = {i.done} deleteTodo = {()=>deleteTodo(i.index)} />
      // return <h1>boom boom chao</h1>
    })
  }
  </div>
    
  )

}


// Great learning :- Any react component yaani any function returning something that will eventually get rendered on the page cant have its name in lowercase --> may be the developers did this because they needed to identify whether a function can act as a react component or not;

// creating todo returning function 
function Todoapp(prop){
  return (
      <div>
        <div>{prop.title}</div>
        <div>{prop.description}</div>
        <button onClick={prop.deleteTodo}>{prop.done}</button>
      </div>
  )
}

export default Todo ;