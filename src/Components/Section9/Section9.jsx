import img1 from '../Assets/section9-img1.png'
import img2 from '../Assets/section9-img2.png'
import img3 from '../Assets/section9-img3.png'
import arrow from '../Assets/section9-arrow.png'
import './Section9.css'
function Section9(){
    return(
        <div className="section9">
            <div className="section9-contents">
            <div className="section9-heading">
                <p>From my <br/>blog post</p>
                <button>See All</button>
            </div>
            <div className="section9-contents-bottom">
                <div className="section9-content">
                    <img src={img1}/>
                    <img style={{marginTop:"-140px",marginLeft:"300px"}} src={arrow}/>
                    <p className='type-of-design'>UI/UX design</p>
                    <div className='section9-content-name'>
                        <p>Jayesh Patil</p>
                        <p>10 Nov, 2023</p>
                    </div>
                    <p className='section9-content-details'>
                    Design Unraveled: Behind <br/>the Scenes of UI/UX Magic
                    </p>
                </div>
                <div className="section9-content">
                    <img src={img2}/>
                    <img style={{marginTop:"-140px",marginLeft:"300px"}} src={arrow}/>
                    <p className='type-of-design'>App design</p>
                    <div className='section9-content-name'>
                        <p>Jayesh Patil</p>
                        <p>10 Nov, 2023</p>
                    </div>
                    <p className='section9-content-details'>
                    Design Unraveled: Behind <br/>the Scenes of UI/UX Magic
                    </p>
                </div>
                <div className="section9-content">
                    <img src={img3}/>
                    <img style={{marginTop:"-140px",marginLeft:"300px", marginBottom:"20px"}} src={arrow}/>
                    <p className='type-of-design'>App design</p>
                    <div className='section9-content-name'>
                        <p>Jayesh Patil</p>
                        <p>10 Nov, 2023</p>
                    </div>
                    <p className='section9-content-details'>
                    Design Unraveled: Behind <br/>the Scenes of UI/UX Magic
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Section9;