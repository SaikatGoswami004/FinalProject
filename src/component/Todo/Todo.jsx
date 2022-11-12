import React, { useEffect, useState } from "react";
import "./Todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todo = () => {
  const [input, setInput] = useState();
  const [todo, setTodo] = useState([]);
  const [radioToggle, setRadioTaggle] = useState(true);
  const [editItem,setEditItem]=useState();
  const [editToggle,setEditToggle]=useState(true);
  const [incompletetask,setIncompleteTask]=useState(0);
  const [completetask,setCompleteTask]=useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addtask = () => {
    const task = {
      id: new Date().getTime().toString(),
      name: input,
      complete: false,
    };
    if (task.name.length === 0) {
      alert("Please Complete Your Task");
    }else if(input && !editToggle ){
      setTodo(todo.map((item)=>{
        if(item.id===editItem){
          return {...item,name:input};
        }
          return item;
        
      }))
      setEditToggle(true);
      setInput("");
      setEditItem(null)
    }
     else {
      setTodo((prev) => {
        return [...prev, task];
      });
      setInput("");
    }

    console.log(todo);
  };

  const completebtn = (id, complete) => {
    //  console.log(id);
    const com = todo.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });
    console.log(com);
    setTodo(com);
    // console.log(todo);
    setRadioTaggle(com.complete);
  };

  const deletetask = (id, complete) => {
    if (complete === false) {
      alert("Please Complete Your Task");
    } else {
      const dlt = todo.filter((item) => {
        return item.id !== id;
      });
      setTodo(dlt);
      console.log(todo);
    }
  };

  const editText=(id)=>{
      const edt=todo.find((item)=>{
        return item.id===id;
      });
      setEditToggle(false);
      setInput(edt.name);
      setEditItem(id);
  }

  const clearCompleteTask=()=>{
      const clear=todo.filter((item)=>{
        return item.complete!==true;
      })
      console.log(clear);
      setTodo(clear);
  }
  useEffect(()=>{
    setIncompleteTask(todo.filter((item)=>!item.complete).length);
    setCompleteTask(todo.filter((item)=>item.complete).length);
  })
  const checktoggle=(id)=>{
    const check=todo.map((item)=>{
      if(item.id===id){
        return {...item, complete:false }
      }
      return item
    })
    setTodo(check)
  }
  

  return (
    <div className="main-body">
      <div className="main">
        <div className="todo-text">
          <p>Todo</p>
        </div>
        <div className="todo-container">
          <div className="create-task">
            <input
              value={input}
              onChange={handleChange}
              type="text"
              placeholder="Create Some Tasks...."
            />
            {
              editToggle?
              <button onClick={addtask} className="add-button">
              <i class="fa-regular fa-plus"></i>
            </button>:
            <button onClick={addtask} className="add-button">
            <i class="fa-regular fa-pen-to-square"></i>
            </button>
            }
            
          </div>
          <div className="task-count">
            <span className="all-task">All Task : {todo.length}</span>
            <span className="incomplete-task">Incomplete : {incompletetask}</span>
            <span className="complete-task">Complete : {completetask}</span>
          </div>
          <div className="task-list">
            {todo.map((item) => {
              return (
                <div className="task" key={item.id}>
                  <div className="tasklist">
                    {item.complete ? (
                      <button className="right-button " onClick={()=>checktoggle(item.id,item.complete)}><i class="fa-solid fa-check"></i></button> ) :
                      
                      (<input
                      className="checkbox"
                        type="checkbox"
                        checked={item.complete}
                        onChange={() => completebtn(item.id, item.complete)}
                      />
                    )}
                    <span 
                    style={{color:item.complete?"rgb(150, 150, 150)":"rgb(98, 115, 129)"}}
                     >{item.name}</span>
                  </div>
                  <div>
                    <EditIcon className="Editicon" onClick={()=>editText(item.id)}/>
                    <DeleteIcon
                      onClick={() => deletetask(item.id, item.complete)}
                      className="deleteicon"
                    />
                  </div>
                </div>
              );
            })}
            {/* <div className="task">
              <div className="task-div">
                
                <button className="right-button"><i class="fa-solid fa-check"></i></button>
                <span>Buy mango</span>
              </div>
              <div>
                <EditIcon className="Editicon" />
                <DeleteIcon className="deleteicon" />
              </div>
            </div> */}
            
          </div>
          <div className="clear-complete-task" >
          <span onClick={clearCompleteTask}>Clear Complete Tasks</span>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
