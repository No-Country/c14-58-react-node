import {MdOutlinePets} from "react-icons/md"
export default function About(){
  return(
    <div style={{background:"#525252", padding:"16px 32px", color:"#efefef"}}>
      <div style={{maxWidth:"800px", margin:"0 auto"}}>
      <h2 style={{textAlign:"center", fontSize:"64px"}}>About Us</h2>

      <div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis illum error iste officia praesentium! Unde cumque minima nostrum, nemo ducimus magnam. Blanditiis est vitae praesentium? Exercitationem quod eaque error atque.</p>
      <a href="">Learn More</a>
      </div>
     
      <div style={{display:"flex", gap:"32px", justifyContent: "center"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}><MdOutlinePets size={64}/><span>Perdidos</span></div>
        <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}><MdOutlinePets size={64}/><span>Encontrados</span></div>
        <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}><MdOutlinePets size={64}/><span>Postear perdidos</span></div>
      </div>
      </div>
    </div>

  )
}