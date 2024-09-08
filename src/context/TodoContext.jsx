import { nanoid } from "nanoid";
import { act, createContext, useReducer } from "react";

export const TodoContext = createContext();

// state declare here with the reducer functions:
// reducer Function:

function todosF(state, action) {
    // alert(JSON.stringify(action))
    if (action.type === "ADD_TODO") {
        // let newState = {...state};
        // newState.push({
        //     id: "4",
        //     title: action.title
        // })
        // return newState;

        // short cut: 


        return ([...state, {
            id: nanoid(),
            title: action.title,
            notes: "",
            subTasks: [],
            tags: [],
            date: new Date(),
            deadline: null,
        }])
    }
    else if (action.type === "UPDATE_TODO") {
        return (
            state.map(el => {

                if (el.id === action.id) {
                    const changes = {};
                    if (action.title) changes.title = action.title;
                    if (action.notes) changes.notes = action.notes;
                    if (action.date) changes.date = action.date;
                    if (action.deadline) changes.deadline = action.deadline;
                    return {
                        ...el,
                        ...changes,

                    }
                }
                return el;
            })
        )
    }
    else if (action.type === "ADD_SUBTASK") {
        return (
            state.map(el => {

                if (el.id === action.id) {
                    const newSubTask = [...el.subTasks, { id: nanoid(), value: action.value, isCompleted: false }];
                    return {
                        ...el,
                        subTasks: newSubTask,
                    }

                }
                return el;
            })
        )
    }
    else if (action.type === "UPDATE_SUBTASK") {
        return (
            state.map(el => {

                if (el.id === action.id) {

                    const changes = {};
                    if (action.value) changes.value = action.value;
                    if (action.isCompleted !== undefined) changes.isCompleted = action.isCompleted;


                    const findSubTask = el.subTasks.map(subTask => {
                        if (subTask.id === action.subTaskId) {
                            return {
                                ...subTask,
                                ...changes,
                            }
                        }
                        return subTask;
                    })
                    return {
                        ...el,
                        subTasks: findSubTask,
                    }

                    // const newSubTask = [...el.subTasks, {value: action.value, isCompletd: false}];
                    // return {
                    //     ...el,
                    //     subTasks: newSubTask,
                    // }

                }
                return el;
            })
        )
    }
    else if (action.type === "DELETED_SUBTASK"){
        return state.map((todo)=>{
            if(todo.id === action.id){
                // const newSubTask = todo.subTasks.filter((subTask)=> subTask.id !== action.subTaskId);
                const newSubTask = todo.subTasks.filter((subTask)=> subTask.id !== action.subTaskId);

                return{
                    ...todo,
                    subTasks : newSubTask,
                }
            }
            return todo;
        })
    }
    else if (action.type === "ADD_TAGS"){
        return state.map((todo)=>{
            if(todo.id === action.id && action.value !== ''){
                const newTags = [...todo.tags, {id:nanoid(), value: action.value}];
                return{
                    ...todo,
                    tags: newTags,
                }
            }
            else if(action.value === ''){
                alert("Add a tag")
            }
            return todo;
        })
    }
    else if (action.type === "DELETED_TAG"){
        return state.map((todo)=>{
            if(todo.id === action.id){
                // const newSubTask = todo.subTasks.filter((subTask)=> subTask.id !== action.subTaskId);
                const newTags = todo.tags.filter((tag)=> tag.id !== action.tagsId);

                return{
                    ...todo,
                    tags : newTags,
                }
            }
            return todo;
        })
    }

    return state;
}


export function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(todosF, [
        {
            id: 1,
            title: "new css",
            notes: "",
            subTasks: [],
            tags: [],
            date: new Date("2024-9-8"),
            deadline: null,
        },
        {
            id: 2,
            title: "new typescript",
            notes: "",
            subTasks: [],
            tags: [],
            date: new Date("2024-9-8"),
            deadline: null,
        }
    ])

    const TodayTodo = todos.filter(({ date }) => {
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
    return (
        <TodoContext.Provider value={{ todos, TodayTodo, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}