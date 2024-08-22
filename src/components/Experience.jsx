import './Experience.css';
const Experience=()=>{
    return(
        <section className="exp_grid" id="exp_container">
            <div className="exp_section">
                <div className="exp_content">
                    <h2>EXPERIENCE</h2>
                    <div className='exp_company'>
                        <div>
                            <h2 style={{color:"red"}}>Full Stack Intern</h2>
                        </div>
                        <div>
                            <h3>Sathya Technology, [June, 2023] - [Dec, 2023]</h3>
                        </div>
                        <div>
                            <p style={{color: 'gray',fontWeight:500}}>During my six-month internship at Sathya Technology in Java Full Stack development, I acquired comprehensive knowledge and hands-on experience in various technologies and frameworks, including Java, Spring Framework, Hibernate, JavaScript, HTML/CSS, and more. I actively participated in project work, collaborating with my peers to develop web applications that showcased my skills in both front-end and back-end development. Additionally, I received recognition for my dedication and commitment to learning, earning certificates in various aspects of Java Full Stack development. This internship experience has greatly enhanced my capabilities and prepared me for a career in software development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;