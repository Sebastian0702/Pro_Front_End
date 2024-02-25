import React, {useEffect} from 'react'
import Sidebar from './Sidebar'
import { SidebarItem } from './Sidebar'
import { Home,} from 'lucide-react';
import { HashRouter as Router,Route,Routes, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuthenticated,load_user } from '../actions/auth';
import { logout } from '../actions/auth';

const SidebarComp = (props) => {

useEffect(()=> {
props.checkAuthenticated();
props.load_user();
}, [])

  return (
    <div>
    
    <Sidebar>
              <Link to='/'><SidebarItem icon={<Home size={20} />} text="Home"  /></Link>
              <Link to='/task_create'><SidebarItem  text="Add task"  /></Link>       
    </Sidebar>

    </div>
  )
}

export default connect(null,{checkAuthenticated,load_user} ) (SidebarComp)
