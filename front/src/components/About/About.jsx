import {MdOutlinePets} from "react-icons/md"
import { Link } from "react-router-dom"
export default function About(){
  return(
    <div style={{background:"#525252", padding:"16px 32px", color:"#efefef"}}>
      <div style={{maxWidth:"800px", margin:"0 auto", display:"flex", flexDirection:"column", gap:"16px"}}>
      <h2 style={{textAlign:"center", fontSize:"64px"}}>About us</h2>

      <div>
      
      <p className="text-xl p-2"> <MdOutlinePets style={{color:"white", display:"inline"}} size={16}/> Mascotopia: Connecting Lost Pets & Finders
Join us in reuniting lost pets with their families. Share your furry friend's details, connect with caring finders, and bring joy to homes.</p>
      <Link to="/about" className="ml-6">Read More... </Link>
      </div>
     
      <div style={{display:"flex", gap:"64px", justifyContent: "center"}}>
        <Link to="/pets?status=lost">
          <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}><MdOutlinePets size={64}/><span>Lost</span></div>
        </Link>
        <Link to="/pets?status=found">
          <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}><MdOutlinePets size={64}/><span>Found</span></div>
        </Link>
        
      </div>
      </div>
    </div>

  )
}