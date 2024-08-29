import { Route, Routes } from "react-router"
import SlideBar from "./component/SlideBar"
import PageInbox from "./pages/PageInbox"
import PageToday from "./pages/PageToday"
import PageAnytime from "./pages/PageAnytime"
import PageUpcoming from "./pages/PageUpcoming"
import PageSometime from "./pages/PageSometime"
import PageTrash from "./pages/PageTrash"
import PageLogbook from "./pages/PageLogbook"



function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<PageInbox/>}/>
        <Route path="/today" element={<PageToday/>}/>
        <Route path="/anytime" element={<PageAnytime/>}/>
        <Route path="/upcoming" element={<PageUpcoming/>}/>
        <Route path="/sometime" element={<PageSometime/>}/>
        <Route path="/trash" element={<PageTrash/>}/>
        <Route path="/logbook" element={<PageLogbook/>}/>
      </Routes>
      {/* <SlideBar/> */}
    </div>
  )
}

export default App
