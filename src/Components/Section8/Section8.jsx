import star from '../Assets/section8-star.png'
import './Section8.css'
function Section8(){
    return(
        <div className="section8">
            <div className="section8-content">
                <p>UX Design</p>
                <img style={{width:"34px",height:"34px",marginTop:"20px"}}src={star}/>
                <p>App Design</p>
                <img style={{width:"34px",height:"34px",marginTop:"20px"}} src={star}/>
                <p>Dashboard</p>
                <img style={{width:"34px",height:"34px",marginTop:"20px"}} src={star}/>
                <p>Wireframe</p>
                <img style={{width:"34px",height:"34px",marginTop:"20px"}} src={star}/>
                <p>User Experience</p>
            </div>
        </div>
    )
}
export default Section8;