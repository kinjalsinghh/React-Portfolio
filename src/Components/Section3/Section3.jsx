import bubbles from '../Assets/section3-bubbles.png'
import './Section3.css'
function Section3(){
    return(
        <div className="section3">
            <div className="section3-heading">
                <p>My <span className='section3-span'>Work Experience</span></p>
            </div>
            <div className="section3-contents">
                <div className="section3-contents-workplace">
                   <div className="workplace-details">
                    <p className='workplace-details-heading'>Cognizant, Mumbai</p>
                    <p className='workplace-details-date'>Sep 2016- July 2020</p>
                   </div>
                   <div className="workplace-details">
                    <p className='workplace-details-heading'>Sugee Pvt limited, Mumbai</p>
                    <p className='workplace-details-date'>Sep 2020- July 2023</p>
                   </div>
                   <div className="workplace-details">
                    <p className='workplace-details-heading'>Sugee Pvt limited, Mumbai</p>
                    <p className='workplace-details-date'>Sep 2023</p>
                   </div>
                </div>
                <div className="section3-contents-bubbles">
                 <img src={bubbles}/>
                </div>
                <div className="section3-contents-designation">
                <div className="designation-details">
                    <p className='designation-details-heading'>Experience Designer</p>
                    <p className='designation-details-text'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Duis lacus nunc, posuere in justo<br/> vulputate, bibendum sodales</p>
                </div>
                <div className="designation-details">
                    <p className='designation-details-heading'>UI/UX Designer</p>
                    <p className='designation-details-text'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Duis lacus nunc, posuere in justo<br/> vulputate, bibendum sodales</p>
                </div>
                <div className="designation-details">
                    <p className='designation-details-heading'>Lead UX Designer</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Section3;