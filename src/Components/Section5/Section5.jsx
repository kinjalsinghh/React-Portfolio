import image from '../Assets/section5-img.png'
import arrow from '../Assets/section5-arrow-tilt.png'
import './Section5.css'
function Section5(){
    return(
        <div className="section5">
            <div className="section5-top">
                <div className="section5-top-heading">
                    <p>Lets have a look at <br/> my <span className='section5-span'>Portfolio</span></p>
                </div>
                <div className="section5-top-button">
                <button>See All</button>
                </div>
            </div>
            <div className="section5-bottom">
                <div className="section5-bottom-content1">
                    <img src={image}/>
                    <img src={image}/>
                </div>
                <div className="section5-bottom-content2">
                    <button>Landing page</button>
                    <button>Animation design</button>
                    <button>GlassMorphism</button>
                    <button>Cards</button>
                </div>
                <div className="section5-bottom-content3">
                   <div classname="section5-bottom-content-heading" style={{display:"flex",gap:"20px"}}>
                   <p style={{fontSize:"35px", fontWeight:"700"}} >Lirante - Food Delivery Solution</p>
                   <img style={{width:"58px", height:"58px", marginTop:"25px"}}src={arrow}/>
                   </div>
                   <p style={{fontSize:"18px",marginTop:"0px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum <br/> ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br/> lobortis orci elementum egestas lobortis.</p>
                </div>
            </div>
        </div>
    )
}
export default Section5;