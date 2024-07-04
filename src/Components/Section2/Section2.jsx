import './Section2.css'
import bg from '../Assets/section2-bg.png'
import service1 from '../Assets/service1.png'
import service2 from '../Assets/service2.png'
import service3 from '../Assets/service3.png'
function Section2(){
    return(
        <div className="section2">
            <div className="section2-contents">
                <div className="section2-top">
                    <p className='section2-top-heading'>My <span className='section2-span'>Services</span></p>
                    <p className='section2-top-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis <br/> lacus nunc, posuere in justo vulputate, bibendum sodales</p>
                </div>
                <div className="section2-bottom">
                    <div className="service">
                        <div className="service-top">
                            <p>UI/UX Design</p>
                        </div>
                        <div className="service-bottom">
                            <img src={service1}/>
                        </div>
                    </div>
                    <div className="service">
                    <div className="service-top">
                            <p>Web Design</p>
                        </div>
                        <div className="service-bottom">
                            <img src={service2}/>
                        </div>
                    </div>
                    <div className="service">
                    <div className="service-top">
                            <p>Landing Page</p>
                        </div>
                        <div className="service-bottom">
                            <img src={service3}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section2;
