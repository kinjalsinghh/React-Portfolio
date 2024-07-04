import email from '../Assets/section7-email.png'
import stars from '../Assets/star.png'
import awards from '../Assets/award.png'
import shield from '../Assets/shield-tick.png'
import './Section7.css'
function Section7(){
    return(
        <div className="section7">
            <div className="section7-contents">
                <div className="section7-top">
                    <p>Have an Awesome Project <br/> Idea?<span className="section7-span">Let's Discuss</span></p>
                </div>
                <div className="section7-bottom">
                    <div className="section7-bottom-email">
                        <img style={{zIndex:"1", marginRight:"-70px"}} src={email}/>
                        <input type="text" placeholder="Enter Email address"/>
                        <button>Send</button>
                    </div>
                    <div className="section7-bottom-features">
                       <div className="fea1">
                        <img style={{height:"24px",width:"24px", marginTop:"12px"}} src={stars}/>
                        <p>4.9/5 Average Ratings</p>
                       </div>
                       <div className="fea2">
                        <img style={{height:"24px",width:"24px", marginTop:"12px"}} src={awards}/>
                        <p>25+ Winning Awards</p>
                       </div>
                       <div className="fea3">
                        <img style={{height:"24px",width:"24px", marginTop:"12px"}} src={shield}/>
                        <p>Certified Product Designer</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section7;