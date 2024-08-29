import SlideBar from "./SlideBar";

function Layout({children}) {
    return (
        <div className="flex">
            <SlideBar/>
            <div className="bg-white py-14 px-20 flex-1">{children}</div>
        </div>
    )
}
export default Layout;