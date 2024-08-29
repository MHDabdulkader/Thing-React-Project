import { useLocation } from "react-router";
import IconAnytime from "./icons/IconAnytime";
import IconInbox from "./icons/IconInbox";
import IconLogbook from "./icons/IconLogbook";
import IconSomeday from "./icons/IconSomeday";
import IconToday from "./icons/IconToday";
import IconTrash from "./icons/IconTrash";
import IconUpcoming from "./icons/IconUpcoming";
import NavLink from "./NavLink";

const imgW = 30
// const imgH = 30

const links = [
    {
        label: "Inbox",
        icon: <IconInbox width={imgW} />,
        href: '/',
        className: 'mb-4',
        
    },
    {
        label: "Today",
        icon: <IconToday width={imgW} />,
        href: '/today',
        
    },
    {
        label: "Anytime",
        icon: <IconAnytime width={imgW} />,
        href: '/anytime',
        
    },
    {
        label: "Upcoming",
        icon: <IconUpcoming width={imgW}  />,
        href: '/upcoming',
       
    },
    {
        label: "Sometime",
        icon: <IconSomeday width={imgW}/>,
        href: '/sometime',
        className: 'mb-4',
        
    },
    {
        label: "Logbook",
        icon: <IconLogbook width={imgW} />,
        href: '/logbook',
      
    },
    {
        label: "Trash",
        icon: <IconTrash width={imgW} />,
        href: '/trash',
        
    }

]



function SlideBar() {
    const {pathname} = useLocation();
    console.log(pathname);

    return (
        <div className="w-1/6 bg-slate-100 h-screen">
            <ul className="px-5 py-5">
                {links.map((item, i) => {
                    return (
                        <li  key={i} className={item?.className}>
                            <NavLink  {...item} isActive={pathname === item.href} />
                            {/* <NavLink  icon={item.icon} label={item.label} link={item.href} /> */}
                        </li>
                    )
                })}
                {/* <li className="flex gap-2">SomeDay</li> */}
            </ul>
            {/* <h1 className="">h1</h1> */}
        </div>
    );
}

export default SlideBar;