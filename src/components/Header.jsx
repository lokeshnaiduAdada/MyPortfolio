import './headerstyle.css';
import './header_gif.mp4'
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Header=()=>{
    const[openmenu,setOpenMenu]=useState(false);
    const openClick=()=>{
        setOpenMenu(!openmenu);
    };
    
    return(
        <section className="Header-grid">
            <div className="header">
                <div className="header_name"><b>𝓐𝓭𝓪𝓭𝓪 𝓛𝓸𝓴𝓮𝓼𝓱</b></div> 
                <div className='navbar_section'>
                    <ul className={openmenu ? 'open' : 'close'}>
                        <motion.li whileHover={{scale:1.1}}>
                            <a href='/' >Home</a>
                        </motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}>
                            <a href="#about_container" >About</a>
                        </motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}>
                            <a href='https://drive.google.com/file/d/1SDFEFwv6ZhlCrnMu10xuxUanXH8tkqC6/view?usp=drive_link'>Resume</a>
                        </motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}>
                            <a href='#exp_container' >Experience</a>
                        </motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}>
                            <a href='#project_container' > Projects</a>
                        </motion.li>
                        <motion.li
                        whileHover={{scale:1.1}}>
                            <a href='#contact_container' >Contact</a>
                        </motion.li>
                    </ul>
                </div>
                <div className='open_menu'>
                    <button onClick={openClick}>
                        <FiAlignJustify />
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Header;