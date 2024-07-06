import facebook from '../Assets/facebook.png'
import youtube from '../Assets/youtube.png'
import insta from '../Assets/instagram.png'
import whatsapp from '../Assets/whatsapp.png'
import twitter from '../Assets/twitter.png'
import logo from '../Assets/section1-logo.png'
import send from '../Assets/filled.png'
import './Footer.css'
function Footer(){
    return(
        <div className="footer">
            <div className="footer-contents">
            <div className="footer-content1">
                <p>Lets Connect There</p>
                <button> Hire me </button>      
            </div>
            <hr/>
           <div className="footer-content2">
               <div className="footer-content2-1">
                <div className="footer-logo">
                    <img src={logo}/>
                    <p>JCREA</p>
                </div>
                <div className="footer-content2-1-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue<br/> interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                </div>
                <div className="footer-content2-1-socialmedia">
                    <img src={facebook}/>
                    <img src={youtube}/>
                    <img src={insta}/>
                    <img src={whatsapp}/>
                    <img src={twitter}/>
                </div>
               </div>
               <div className="footer-content2-2">
        
                    <p className="footer-content2-heading">Navigation</p>
                    <p className='footer-content2-2-points'> Home</p>
                    <p className='footer-content2-2-points'>About</p>
                    <p className='footer-content2-2-points'>Service</p>
                    <p className='footer-content2-2-points'>Resume</p>
                    <p className='footer-content2-2-points'>Projects</p>
               </div>
               <div className="footer-content2-3">
               <p className="footer-content2-heading">Contact</p>
                    <p className='footer-content2-2-points'>+91 7738443636</p>
                    <p className='footer-content2-2-points'>Jaycrea36@gmail.com</p>
                    <p className='footer-content2-2-points'>Portfolio-jcrea.com</p>
               </div>
               <div className="footer-content2-4">
               <p className="footer-content2-heading">Get Latest Information</p>
               <div className='input-field'>
               <input type="text" placeholder='email address'/>
               <div className='footer-send'><img src={send}/></div>
               </div>
               </div>
           </div>
           <hr/>
           <div className="footer-content3">
            <p>Copyright© 2023 Jayesh. All Rights Reserved.</p>
            <p>User Terms & Conditions | Privacy Policy</p>
           </div>
           </div>
        </div>


    )
}
export default Footer;