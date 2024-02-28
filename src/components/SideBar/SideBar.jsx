import { NavLink } from "react-router-dom"
import logo from "../../assets/logoipsum-light.svg"
import SideLink from "../SideLink/SideLink"
import SideLinkList from "../SideLinkList/SideLinkList"
import "./sidebar.css"
import { faArrowLeft, faCalendar, faComment, faDashboard, faEnvelope, faListCheck, faPager, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const SideBar = () => {
    const hideSidebar = () => {
            document.getElementById("sidebar").style.cssText = `
                transform: translateX(-100%)
            `
    }
  return (
    <div id="sidebar" className="bg-gray-800 h-full lg:w-1/5 fixed lg:fixed -translate-x-full lg:-translate-x-0 transition-all py-4 ease-in-out duration-500 border-r border-blue-600 z-20">
        <div className="flex items-center justify-center gap-4 mb-12 p-3">
            <NavLink to="/" className="uppercase text-2xl min-h-14 flex items-center justify-center">
                <img src={logo} alt="" />
            </NavLink>
            <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer text-gray-400 lg:hidden" onClick={hideSidebar}/>
        </div>
        <div className="h-4/5 overflow-y-scroll scrollbar-hidden">
            
            <div className="px-8">
                <h3 className="uppercase text-gray-500 px-3 mb-2">menu</h3>
                <SideLinkList icon={faDashboard} to={"/"} subLinks={[""]}> 
                    Dashboard
                </SideLinkList>
                <SideLink to={"/calender"} icon={faCalendar}>
                    Calender
                </SideLink>
                <SideLink to={"/profile"} icon={faUser}>
                    Profile
                </SideLink>
                <SideLinkList icon={faPager} to={"/"} subLinks={["Settings","Chats"]}> 
                    Pages
                </SideLinkList>
            </div>
            <div className="px-8">
                <h3 className="uppercase text-gray-500 px-3 mb-2">support</h3>
                <SideLink to={"/"} icon={faEnvelope}>
                    Inbox
                </SideLink>
                <SideLink to={"/"} icon={faComment}>
                    Messages
                </SideLink>
            </div>
        </div>
    </div>
  )
}

export default SideBar