import React, { useRef, useState } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import {Link as Anchorlink} from 'react-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu,setmenu]=useState("home");
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
        <div className="nav-title">
                    <h1>Krishnaprasath</h1>
                    <img src={theme_pattern} alt="" />
        </div>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
           <li><Anchorlink to='home' smooth={true} duration={500}><p onClick={()=>setmenu("home")}>Home</p>{menu=="home"?<img src={underline} alt=''/>:<></>}</Anchorlink></li>
           <li><Anchorlink to='about' smooth={true} duration={500}><p onClick={()=>setmenu("About")}>About</p>{menu=="About"?<img src={underline} alt=''/>:<></>}</Anchorlink></li>
           <li><Anchorlink to='work' smooth={true} duration={500}><p onClick={()=>setmenu("Projects")}>Projects</p>{menu=="Projects"?<img src={underline} alt=''/>:<></>}</Anchorlink></li>
           <li><Anchorlink to='contact'smooth={true} duration={500}><p onClick={()=>setmenu("Contact")}>Contact</p>{menu=="Contact"?<img src={underline} alt=''/>:<></>}</Anchorlink></li>
        </ul>
      <div className='nav-connect'><Anchorlink to='contact' smooth={true} duration={500}><p onClick={()=>setmenu("Contact")}>Connect with me</p></Anchorlink></div>
    </div>
  )
}

export default Navbar