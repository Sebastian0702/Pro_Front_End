import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import { Link } from "react-router-dom";
import { createContext, useContext, useState } from "react"
import ThemeButton from "./ThemeButton";
import { checkAuthenticated,load_user } from '../actions/auth';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';
import { useEffect } from "react";

const SidebarContext = createContext();

const Sidebar = ( {children ,isAuthenticated,logout,firstName,lastName,userId}) => {

  

    const [expanded, setExpanded] = useState(true)
    
    const guestLinks = () => (
        <>
            <ul className='nav-item text-content'>
              <Link className='nav-link' to='/login'>
                Login
                </Link>
            </ul>
            <ul className='nav-item text-content'>
              <Link className='nav-link' to='/signup'>
                Sign up
                </Link>
            </ul>
        </>
    );
const authLinks = () => (
    <div className='nav-item text-content mt-2'>
    <a className='nav-link' href='#!' onClick={logout}>Logout</a>
  </div>
);

    return (
        <>
        <header className="w-full bg-bkg p-2 shadow-sm">
                <nav className="flex justify-between items-center">
                    <h4 className="font-bold text-xl  text-content">To do app</h4>
                    <div className="flex items-center">
                     
                        <SidebarContext.Provider value={{ expanded }}>
                            {children}
                        </SidebarContext.Provider>

                        <div className="flex items-center ml-4">
                             <ThemeButton />
                            {isAuthenticated ? (
                                <div className='flex items-center ml-4'>
                                    <Link className='text-content px-2' to='/login' onClick={logout}>Logout</Link>
                                    <span className='text-content'>{`${firstName} ${lastName}`}</span>
                                </div>
                            ) : (
                                <>
                                    <Link className='text-content px-2' to='/login'>Login</Link>
                                    <Link className='text-content px-2' to='/signup'>Sign Up</Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
   

}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    firstName: state.auth.user ? state.auth.user.first_name : '',
    lastName: state.auth.user ? state.auth.user.last_name : '',
    userId: state.auth.user ? state.auth.user.id : '',
  })
export default connect(mapStateToProps,{checkAuthenticated, load_user, logout } ) (Sidebar)



export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-accent-1 text-content"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-36 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-accent-2 ${expanded ? "" : "top-2"}`}>

                </div>
            )}

        
        </li>
    )
}