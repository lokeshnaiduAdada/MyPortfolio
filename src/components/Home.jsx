import react from 'react'
import './homestyle.css';

const Home=()=>{
    return(
        <section className="home-grid">
            <div className='home'>
                <div className='content'>
                    <div>
                        <h1 style={{color:'red'}}><b>Java Fullstack Developer</b></h1>
                    </div>
                    <div>
                        <h1>Hi..My name is Adada Lokesh.I am passionate on Fullstack Developer.</h1>
                    </div>
                </div>
                <div className='home-right'>
                    <img src="profile.jpg" alt='error' style={{width:300,height:300,borderRadius:300/2}}></img>
                </div>
                <div className='social_grid_container'>
                    <div className='social_media_items'>
                        <span className='social_media'><b style={{fontSize:'20px'}}>Front-End:</b>
                            <img src='html.svg' alt='html_logo' style={{width:30}}></img>
                            <img src='css.svg' alt='css_logo' style={{width:30}}></img>
                            <img src='javascript.svg' alt='javascript_logo' style={{width:30}}></img>
                            <img src='react.svg' alt='react_logo' style={{width:30}}></img>
                        </span><br></br>
                        <span><b style={{fontSize:'20px'}}>Back-End:</b>
                            <img src='java.svg' alt='java_logo'style={{width:50,paddingLeft:'20px'}}></img>
                        </span>
                    </div>
                    <ul className='hero_details'>
                        <li>
                            <a href='https://www.linkedin.com/in/lokesh-adada-7709a3225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                                <img src='linkedin.svg' alt='linkedin' style={{width:40}}></img>
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/lokeshnaiduAdada'>
                                <img src='github.svg' alt='git_logo' style={{width:40}}></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Home;