import image from '../Assets/section4-img.png'
import './Section4.css'
function Section4(){
    return(
        <div className="section4">
            <div className="section4-left">
              <img src={image}/>
            </div>
            <div className="section4-right">
               <div className="section4-right-text">
                <p className='section4-right-text-heading'>Why <span className='section4-span'>Hire me</span>?</p>
                <p className='section4-right-text-subheading'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Duis lacus nunc, posuere in justo <br/>vulputate, bibendum sodales</p>
               </div>
               <div className="section4-right-projects">
                <div className='section4-right-projects-details'>
                    <p className='projects-number'>450+</p>
                    <p className='projects-text'>Projects completed</p>
                </div>
                <div className='section4-right-projects-details'>
                    <p className='projects-number'>450+</p>
                    <p className='projects-text'>Projects completed</p>
                </div>
               </div>
               <div className="section4-button">
                <button>Hire Me</button>
               </div>
            </div>
        </div>
    )
}
export default Section4;