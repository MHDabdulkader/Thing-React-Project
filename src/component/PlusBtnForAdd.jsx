import IconBtnForAdd from "./icons/IconPlusBtnForAdd";

export default function PlusBtnForAdd(){
    return (
        <div className="fixed bottom-6 right-6 w-12 h-12 shadow-md rounded-full flex justify-center items-center bg-red-300 cursor-pointer hover:shadow-slate-500">
            <IconBtnForAdd/>
        </div>
    )
}