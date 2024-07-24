import './headerstyle.css';
import './header_gif.mp4'
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';

const Header=()=>{
    const[openmenu,setOpenMenu]=useState(false);
    const openClick=()=>{
        setOpenMenu(!openmenu);
    };
    const scrollToSection=(id)=>{
        const section=document.getElementById(id);
        if (section) {
            section.scrollIntoView();
            console.log(section);
        }
    }
    return(
        <section className="Header-grid">
            <div className="header">
                <div className="header_name"><b>Adada Lokesh.dev</b></div>
                <div className='open_menu'>
                    <button onClick={openClick}>
                        <FiAlignJustify />
                    </button>
                </div> 
                <nav>
                    <ul className={openmenu ? "open" : ""}>
                        <li>
                            <a href='/' onClick={()=>scrollToSection('')}>Home</a>&nbsp;&nbsp;
                        </li>
                        <li>
                            <a href='/about' onClick={()=>scrollToSection('about_container')}>About</a>&nbsp;&nbsp;
                        </li>
                        <li>
                            <a href='https://drive.google.com/file/d/1tzzAYX7_kDsdaryu_IPiZqu_tcAO4gAQ/view?usp=sharing'>Resume</a>&nbsp;&nbsp;
                        </li>
                        <li>
                            <a href='/Experience' onClick={()=>scrollToSection('exp_container')}>Experience</a>&nbsp;&nbsp;
                        </li>
                        <li>
                            <a href='/projects' onClick={()=>scrollToSection('project_container')}> Projects</a>&nbsp;&nbsp;
                        </li>
                        <li>
                            <a href='/contact' onClick={()=>scrollToSection('contact_container')}>Contact</a>&nbsp;&nbsp;
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}
export default Header;