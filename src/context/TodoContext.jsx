import { nanoid } from "nanoid";
import {  createContext, useReducer } from "react";

export const TodoContext = createContext();

// state declare here with the reducer functions:
// reducer Function:

function todosF(state, action) {
    // alert(JSON.stringify(action))
    if (action.type === "AddTodo") {
        // let newState = {...state};
        // newState.push({
        //     id: "4",
        //     title: action.title
        // })
        // return newState;

        // short cut: 
        return ([...state, { id: nanoid(), title: action.title }])
    }
    else if (action.type === "UPDATE_TODO") {
        return (
            state.map(el => {
                if (el.id === action.id) {
                    return {
                        id: el.id,
                        title: action.title,
                    }
                }
                return el;
            })
        )
    }
    return state;
}


export function TodoProvider({children}){
    const [todos, dispatch] = useReducer(todosF, [
        {
            id: 1,
            title: "new css",
            notes: "",
            subTasks: [],
            tags:[],
            date: new Date("2024-9-3"),
            deadline: null, 
        },
        {
            id: 2,
            title: "new typescript",
            notes: "",
            subTasks: [],
            tags:[],
            date: new Date("2024-9-4"),
            deadline: null, 
        }
    ])

    const TodayTodo = todos.filter( ({ date }) => {
        const TodayDate = new Date();
        const todoDate = new Date(date); // Parse the date if it's not already a Date object
        return (
            todoDate.getFullYear() === TodayDate.getFullYear() &&
            todoDate.getMonth() === TodayDate.getMonth() &&
            todoDate.getDate() === TodayDate.getDate()  
        );
    });
    console.log(TodayTodo);
    // console.log(todos)
    return(
        <TodoContext.Provider value={{todos,TodayTodo, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}