import logo from '../Assets/section1-logo.png'
import vector from '../Assets/section1-vector.png'
import comma from '../Assets/quote-up.png'
import image from '../Assets/section1-img.png'
import stars from '../Assets/section1-stars.png'
import arrow from '../Assets/section1-arr.png'
import './Section1.css'
        
function Section1(){
            return(
                <div className="section1">
                    <div className="section1-top">
                        <button><a href="" style={{textDecoration:"none",color:"white"}}>Home</a></button>
                        <p><a href="" style={{textDecoration:"none",color:"white"}}>About</a></p>
                        <p><a href="" style={{textDecoration:"none",color:"white"}}>Service</a></p>
                        <div className="section1-logo">
                            <img style={{height:"46px",width:"46px",marginTop:"15px"}} src={logo}/>
                            <p>JCREA</p>
                        </div>
                        <p><a href="" style={{textDecoration:"none",color:"white"}}>Resume</a></p>
                        <p><a href="" style={{textDecoration:"none",color:"white"}}>Project</a></p>
                        <p><a href="" style={{textDecoration:"none",color:"white"}}>Contact</a></p>
                    </div>
                    <div className="section-bottom">
                        <div className="section-bottom-button">
                           <button>Hello!</button>
                           <img src={vector}/>
                        </div>
                        <div className="section-bottom-heading">
                            <p>I’m <span className='section1-span'>Jenny</span>,<br/>Product Designer</p>
                        </div>
                        <div className="section-bottom-main">
                            <div className="section-bottom-main-text">
                                <img style={{height:"36px",width:"36px"}}src={comma}/>
                                <p>Jenny’s Exceptional product design<br/>ensure our website’s success.<br/>Highly Recommended</p>
                            </div>
                            <div className='section-bottom-main-img'>
                                <img src={image}/>
                            </div>
                            <div className="section-bottom-main-stars">
                                <img src={stars}/>
                                <p className="section-bottom-main-years">10 Years</p>
                                <p className="section-bottom-main-experience">Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-bar">
                        <button className='scroll-bar-portfolio'>
                            <p>Portfolio</p>
                            <img src={arrow}/>
                        </button>
                        <p className='section1-hire'>Hire Me</p>
                    </div>
                </div>
            )
        }
export default Section1;