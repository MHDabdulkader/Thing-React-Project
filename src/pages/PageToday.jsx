// import { useReducer } from "react";
import AddTodo from "../component/AddTodo";
import Layout from "../component/Layout";
import PlusBtnForAdd from "../component/PlusBtnForAdd";
import TodoListRender from "../component/TodoListRender";
// import { nanoid } from "nanoid";
// import { TodoProvider } from "../context/TodoContext";

export default function PageToday() {
    return (
        // <TodoProvider>
            <Layout>
                Today page
                {/* load todo */}
                <TodoListRender  />
                {/* display todo */}
                {/* <AddTodo dispatch={dispatch}/> */}
                <PlusBtnForAdd />
            </Layout>
        // </TodoProvider>
    )
}