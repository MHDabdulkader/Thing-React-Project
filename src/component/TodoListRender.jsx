import { useContext, useState } from "react";
import IconInboxAddTodo from "./icons/IconInboxAddTodo";
import IconNoteAddTodo from "./icons/IconNoteAddTodo";
import IconPlusAddTodo from "./icons/IconPlusAddTodo";
import { TodoContext } from "../context/TodoContext";
import { stringify } from "postcss";

function TodoListRender() {
    const { TodayTodo } = useContext(TodoContext);
    // list data from file up data.

    console.log(TodayTodo, "Todo List Render");

    return (
        <div>
            {TodayTodo.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} />
                )
            })}
        </div>
    )
}

export default TodoListRender;


function Todo({todo}) {
    const { dispatch } = useContext(TodoContext);
    const [isExpended, setIsExpended] = useState(false);
    const [title, setTitle] = useState(todo.title);
    console.log("Call from Todo");
    console.log(todo)
    console.log(isExpended)
    if(!isExpended){
        return (
            <div
                onDoubleClick={(e) => {
                    setIsExpended(true);
                }}
                key={todo.id}
                className="flex space-x-3 items-center capitalize">
                <input
                    type="checkbox"
                    name="name"
                    id=""
                    className="scale-125 " />
                <span
                    className="ml-1 text-gray-500">{todo.title}</span>
            </div>
        )
    }
    else{
        return (
            <div className="bg-white rounded-md shadow-md p-4 mb-2">
                {/* {title} */}
                <div className="flex items-center py-2 border-b">
                    <input
                        type="checkbox"
                        name="name"
                        id=""
                        className="scale-125 " />
                    <input
                        type="text"
                        name=""
                        id=""
                        value = {title}
                        onChange={(e) => setTitle(e.target.value) }
                        onKeyDown={(e) => {
                            if(e.key === "Enter"){
                                // console.log()
                                dispatch({type: "UPDATE_TODO",id:todo.id, title})
                            }
                        }}
                     
                        placeholder="New To-do"
                        className="border-none focus:outline-none ml-2 focus:bg-gray-100 px-2 py-1 w-full mr-2"
                        aria-autocomplete="list" 
                        
                        />
                        {/* {stringify()} */}
                        <button onClick={()=>setIsExpended(false)} className="bg-red-400 px-2 rounded-md">Collapse</button>
                </div>
    
                <div className="flex items-center py-2 border-b">
                    <IconNoteAddTodo/>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Notes"
                        className="border-none focus:outline-none ml-2 text-sm focus:bg-gray-100 px-2 py-0.5 w-full mr-2"/>
    
                </div>
    
                <div className="flex items-center py-2 border-b">
                    <IconPlusAddTodo/>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="New Sub Task"
                        className="border-none focus:outline-none ml-2 text-sm focus:bg-gray-100 px-2 py-0.5 w-full mr-2"/>
    
                </div>
    
                <div className="flex items-center py-2 border-b">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Add Tag"
                        className="border-none focus:outline-none ml-2 text-base focus:bg-gray-100 px-2 py-0.5 w-full mr-2"/>
    
                </div>
    
                <div className="flex items-center py-2 border-b">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Set When"
                        className="border-none focus:outline-none ml-2 text-sm focus:bg-gray-100 px-2 py-0.5 w-full mr-2 placeholder:text-gray-300"/>
    
                </div>
    
                <div className="flex items-center py-2 border-b">
                    <IconInboxAddTodo/>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Inbox"
                        className="border-none focus:outline-none ml-2 text-sm focus:bg-gray-100 px-2 py-0.5 w-full mr-2"/>
    
                </div>
    
                <div className="flex items-center py-2 border-b">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Deadline"
                        className="border-none focus:outline-none ml-2 text-sm focus:bg-gray-100 px-2 py-0.5 w-full mr-2 placeholder:text-gray-300"/>
    
                </div>
    
            </div>
        )
    }
    
}

// import { useState } from "react";


