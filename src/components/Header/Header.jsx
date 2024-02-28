import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faSearch, faBell, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import ToggleBtn from "../ToggleBtn/ToggleBtn"
import HeaderIcon from "../HeaderIcon/HeaderIcon"
import profile from "../../assets/profile-gen-bg-dark.jpg"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const showSidebar = () => {
            document.getElementById("sidebar").style.cssText = `
                transform: translateX(0)
            `
    }
  return (
    <div className="bg-gray-800 px-5 py-3 w-full lg:w-4/5 float-end flex flex-row items-center justify-between">
        <FontAwesomeIcon icon={faBars} className="text-xl cursor-pointer inline lg:hidden" onClick={showSidebar}/>
        <div className="hidden sm:flex sm:align-middle sm:justify-center sm:gap-3">
            <label htmlFor="search-input">
                <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
            </label>
            <input id="search-input" type="search" placeholder="Search" className="text-gray-300 bg-transparent border-none focus:outline-none w-40 mr-3 placeholder:text-gray-500"/>
        </div>
        <div className="flex items-center gap-4">
            <ToggleBtn />
            <div className="flex items-center gap-2">
                <HeaderIcon icon={faBell} />
                <HeaderIcon icon={faMessage} />
            </div>
            <div className="flex items-center justify-between gap-2">
                <NavLink to="/" className="flex items-center gap-2"> 
                    <div className="hidden lg:block">
                        <h3 className="font-bold text-md">Moatasim A.</h3>
                        <span className="text-gray-400 text-sm">Web Developer</span>
                    </div>
                    <div className="w-12 rounded-full overflow-hidden">
                        <img className="w-full" src={profile} alt="" />
                    </div>
                </NavLink>
                <FontAwesomeIcon className="text-gray-500 cursor-pointer" icon={faAngleDown} />
            </div>
        </div>

    </div>
  )
}

export default Header