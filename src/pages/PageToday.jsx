// import { useReducer } from "react";
import { useContext } from "react";
import AddTodo from "../component/AddTodo";
import Layout from "../component/Layout";
import PlusBtnForAdd from "../component/PlusBtnForAdd";
import TodoListRender from "../component/TodoListRender";
import { TodoContext } from "../context/TodoContext";
import { nanoid } from "nanoid";
import IconBtnForAdd from "../component/icons/IconPlusBtnForAdd";
import IconToday from "../component/icons/IconToday";
// import { TodoProvider } from "../context/TodoContext";

export default function PageToday() {
    const { dispatch } = useContext(TodoContext);

    return (
        // <TodoProvider>
        <Layout>
            <div 
            className="flex text-lg items-center space-x-2 font-bold mb-3">
                <IconToday width={30} /> <span>Today</span></div>
            {/* Today page */}
            {/* load todo */}
            <TodoListRender />
            {/* display todo */}
            {/* <AddTodo dispatch={dispatch}/> */}
            {/* <PlusBtnForAdd 

                    className="fixed bottom-6 right-6 w-12 h-12 shadow-md rounded-full flex justify-center items-center bg-red-300 cursor-pointer hover:shadow-slate-500"
                    // console.log()
                    onClick={()=>{
                        console.log("Plus Btn clicked");
                        dispatch({type:"ADD_TODO", title:"" })
                    }}
                /> */}

            <button
                className="fixed bottom-6 right-6 w-12 h-12 shadow-md rounded-full flex justify-center items-center bg-red-300 cursor-pointer hover:shadow-slate-500"

                onClick={() => {
                    console.log("Plus Btn clicked");
                    dispatch({ type: "ADD_TODO", title: "" })
                }}
            ><IconBtnForAdd /></button>
        </Layout>
        // </TodoProvider>
    )
}