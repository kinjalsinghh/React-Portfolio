import img1 from '../Assets/section6-img2.png'
import img2 from '../Assets/section6-img1.png'
import img3 from '../Assets/section6-img3.png'
import './Section6.css'
function Section6(){
    return(
        <div className="section6">
          <div className="section6-heading">
            <p>Testimonials That <br/>Speak to <span className="section6-span">My Results</span></p>
          </div>
          <div className="section6-subheading">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum<br/> ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed<br/> lobortis orci elementum egestas lobortis.</p>
          </div>
          <div className="testimonials-container">
              <div className='slider-wrapper'>
                <div className="slider">
                  <img className='slide1' src={img2}/>
                  <img className='slide2' src={img2}/>
                  <img className='slide3' src={img2}/>
                </div>
                <div className="slide-nav">
                  <a href=".slide1"></a>
                  <a href=".slide2"></a>
                  <a href=".slide3"></a>
                </div>
              </div>
          </div>
        </div>
    )
}
export default Section6;