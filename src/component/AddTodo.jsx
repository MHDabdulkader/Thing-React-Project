import { useState } from "react";
import IconInboxAddTodo from "./icons/IconInboxAddTodo";
import IconNoteAddTodo from "./icons/IconNoteAddTodo";
import IconPlusAddTodo from "./icons/IconPlusAddTodo";

export default function AddTodo({dispatch}) {
    const [title, setTitle] = useState("");
    
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
                            dispatch({type: "AddTodo", title})
                        }
                    }}

                    placeholder="New To-do"
                    className="border-none focus:outline-none ml-2 focus:bg-gray-100 px-2 py-1 w-full mr-2"
                    aria-autocomplete="list" 
                    
                    />
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