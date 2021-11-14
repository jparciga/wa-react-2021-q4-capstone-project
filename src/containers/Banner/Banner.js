import logo from './../../imgs/mugiwara.jpg';
import "./Banner.css"
function Banner(props){ 
    return(
    <div class="header">
        <div>
    <img src={logo} alt="logo" />
        <h1 >MugiStore!</h1>
        </div>
    </div>
)
}

export default Banner;