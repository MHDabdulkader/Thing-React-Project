import { Link } from "react-router-dom";

export default function NavLink({ icon, label, href, isActive }) {

    return (
        <Link to={href}>
            <div className={`flex gap-2 items-center hover:bg-slate-50 py-2 px-1 rounded-sm cursor-pointer ${isActive? "bg-gray-300": ""}`}>
                {/* <IconInbox width={"30px"} height={"30px"}/> */}
                {icon}
                {/* <img src="" alt="" /> */}
                <span className="font-normal text-gray-500">{label}</span>
            </div>
        </Link>
    )

} 