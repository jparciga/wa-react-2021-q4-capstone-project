
import "./Banner.css"


function Banner({banner_img,banner_img_alt,banner_title}){ 

    return(
    <div>
       <table class="bannertable">
           <tr class="banner">
            <td class="bannerlogo"><img src={banner_img} alt={banner_img_alt} class="bannerlogoimg"></img></td>
            <td class="bannertitle"><h1> {banner_title} </h1></td>
            </tr>
        </table>
    </div>
)

}

export default Banner;