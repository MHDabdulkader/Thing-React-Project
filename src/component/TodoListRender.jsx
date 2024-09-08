import { useContext, useState } from "react";
import IconInboxAddTodo from "./icons/IconInboxAddTodo";
import IconNoteAddTodo from "./icons/IconNoteAddTodo";
import IconPlusAddTodo from "./icons/IconPlusAddTodo";
import { TodoContext } from "../context/TodoContext";
import { stringify } from "postcss";
import IconCompleted from "./icons/IconCompleted";
import IconTrash from "./icons/IconTrash";
import IconCrossTags from "./icons/IconCrossTags";

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


function Todo({ todo }) {
   const { dispatch } = useContext(TodoContext);
   const [isExpended, setIsExpended] = useState(false);
   // const [title, setTitle] = useState(todo.title);
   // console.log("Call from Todo");
   // console.log(todo)
   // console.log(isExpended)
   if (!isExpended) {
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
            {todo.title.length > 0 ?
               <span
                  className="ml-1 text-gray-500">{todo.title}</span>
               :
               <span
                  className="ml-1 text-gray-300 text-md">New To-do</span>
            }

         </div>
      )
   }
   else {
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
                  value={todo.title}
                  onChange={(e) => {
                     // setTitle(e.target.value)
                     dispatch({ type: "UPDATE_TODO", id: todo.id, title: e.target.value })
                  }
                  }
                  // onKeyDown={(e) => {
                  //     if(e.key === "Enter"){
                  //         // console.log()
                  //         dispatch({type: "UPDATE_TODO",id:todo.id, title})
                  //     }
                  // }}

                  placeholder="New To-do"
                  className="border-none focus:outline-none ml-2 focus:bg-gray-100 px-2 py-1 w-full mr-2"
                  aria-autocomplete="list"

               />
               {/* {stringify()} */}
               <button onClick={() => setIsExpended(false)} className="bg-red-400 px-2 rounded-md">Collapse</button>
            </div>
            {/* {Notes} */}
            <div className="flex items-center py-2 border-b">
               <IconNoteAddTodo width={16} height={16} />
               <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Notes"
                  className="border-none focus:outline-none ml-2 text-sm focus:bg-gray-100 px-2 py-0.5 w-full mr-2"
                  value={todo.notes}
                  onChange={(e) => {
                     // setTitle(e.target.value)
                     dispatch({ type: "UPDATE_TODO", id: todo.id, notes: e.target.value })
                  }
                  }
               />

            </div>


            {/* Sub task */}
            <div className="items-center py-2 border-b">
               {/* <div className="flex flex-row"> */}
               {todo.subTasks.length > 0 ?
                  <ul className="mb-4">


                     {todo.subTasks.map((el, i) => {
                        const toggle = () => {
                           dispatch({
                              type: "UPDATE_SUBTASK",
                              id: todo.id,
                              subTaskId: el.id,
                              isCompleted: !el.isCompleted
                           })
                        }
                        return (
                           <li
                              className=" flex  items-center"
                              key={i}
                           >
                              {el.isCompleted === true ?
                                 <div className=" text-sm flex items-center space-x-4 text-gray-500 mb-1 w-full">
                                    <IconCompleted
                                       onClick={toggle}


                                       width={10} height={10} />
                                    <span className="text-gray-400">{el.value}</span>
                                 </div>
                                 : <div className="text-sm flex items-center space-x-2 text-gray-500 mb-1 w-full">
                                    <button
                                       onClick={toggle}
                                       className="w-3 h-3 rounded-full border border-gray-400"></button>
                                    <input
                                       type="text"
                                       name=""
                                       id=""

                                       defaultValue={el.value}
                                       // value={todo.e.target.value}
                                       onChange={(e) => {
                                          // if (e.key === "Enter") {
                                          dispatch({
                                             type: "UPDATE_SUBTASK",
                                             id: todo.id,
                                             // id: todo.id,
                                             subTaskId: el.id,
                                             value: e.target.value,
                                          })
                                          // }
                                       }}
                                       // placeholder="New Sub Task"
                                       className="border-none rounded-md ml-1 mr-2 focus:outline-none  text-sm focus:bg-gray-100 px-2 py-0.5 w-full" />
                                    {/* <span>{el.value}</span> */}
                                 </div>}
                              <button
                                 onClick={() => {
                                    dispatch({
                                       type: "DELETED_SUBTASK",
                                       id: todo.id,
                                       subTaskId: el.id,
                                    })
                                 }}
                              >
                                 <IconTrash width={15} height={15} />
                              </button>
                           </li>
                        )
                     })}
                  </ul> : ""}

               {/* </div> */}

               <div className="flex items-center">
                  <IconPlusAddTodo width={16} height={16} />
                  <input
                     type="text"
                     name=""
                     id=""

                     // value={todo.e.target.value}
                     onKeyDown={(e) => {
                        if (e.key === "Enter") {
                           dispatch({
                              type: "ADD_SUBTASK",
                              id: todo.id,
                              value: e.target.value,
                           })
                        }
                     }}
                     placeholder="New Sub Task"
                     className="border-none focus:outline-none ml-2 text-sm focus:bg-gray-100 px-2 py-0.5 w-full mr-2" />
               </div>


            </div>

            {/* add tag */}
            <div className="flex items-center py-2 border-b flex-wrap space-y-2 ">
               {todo.tags.length > 0 ?
                  <ul className="flex  space-x-2">
                     {todo.tags.map((el, i) => {
                        return (
                           <li key={i} className="flex items-center px-3 py-1.5 bg-blue-100 rounded-2xl text-xs text-gray-700 space-x-1">
                              <p>{el.value}</p>
                              <button 
                                 onClick={()=>{
                                    dispatch({
                                       type:"DELETED_TAG",
                                       id: todo.id,
                                       tagsId: el.id,
                                    })
                                 }}
                                 className="hover:bg-white p-0.5 rounded-full">
                                 <IconCrossTags width={12} height={12} />
                              </button>
                           </li>
                        )
                     })}
                  </ul>
                  :
                  ""
               }
               <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Add Tag"
                  onKeyDown={(e) => {
                     if (e.key === "Enter") {

                        dispatch({
                           type: "ADD_TAGS",
                           id: todo.id,
                           value: e.target.value,
                        })
                     }
                  }}
                  className="border-none focus:outline-none ml-2 text-base focus:bg-gray-100 px-2 py-0.5 w-full mr-2" />

            </div>

            <div className="flex items-center py-2 border-b">
               <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Set When"
                  className="border-none focus:outline-none ml-2 text-sm focus:bg-gray-100 px-2 py-0.5 w-full mr-2 placeholder:text-gray-300" />

            </div>

            <div className="flex items-center py-2 border-b">
               <IconInboxAddTodo width={16} height={16} />
               <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Inbox"
                  className="border-none focus:outline-none ml-2 text-sm focus:bg-gray-100 px-2 py-0.5 w-full mr-2" />

            </div>

            <div className="flex items-center py-2 border-b">
               <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Deadline"
                  className="border-none focus:outline-none ml-2 text-sm focus:bg-gray-100 px-2 py-0.5 w-full mr-2 placeholder:text-gray-300" />

            </div>

         </div>
      )
   }

}

// import { useState } from "react";


