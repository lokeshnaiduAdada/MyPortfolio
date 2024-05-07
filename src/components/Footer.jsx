import './footerstyle.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer=()=>{
    return(
        <section className="footer-grid">
            <footer className="footer">
                <div>
                    <h1>Adada Lokesh</h1>
                </div>
                <div className='footer_social'>
                    <a href='mailto:adadalokesh7@gmail.com'><FaEnvelope/></a>
                    <a href='https://www.linkedin.com/in/lokesh-adada-7709a3225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedinIn/></a>
                    <a href='https://github.com/lokeshnaiduAdada'><FaGithub/></a>
                    <a href='https://www.facebook.com/lokesh.naidu.35325'><FaFacebook/></a>
                    <a href='https://www.instagram.com/___lokesh_naidu18__/?hl=en'><FaInstagram/></a>
                    <a href='https://x.com/AdadaLokesh?s=08'><FaTwitter/></a>
                    <a href='https://wa.me/+918985356566'><FaWhatsapp/></a>
                </div>
                <div>
                    <p>© 2021 copyright all right reserved</p>
                </div>
            </footer>
        </section>
    )
}
export default Footer;