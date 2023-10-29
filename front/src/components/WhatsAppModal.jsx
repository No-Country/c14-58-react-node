import { Link } from "react-router-dom"
import { BsWhatsapp } from "react-icons/bs"

function WhatsAppModal({number}) {
  return (
    <> 
      <Link to={`https://api.whatsapp.com/send?phone=${number}`} style={{position: "absolute", bottom: "100px", right: "32px"}}>
      <BsWhatsapp style={{background:"#25d366", color: "white", padding: "8px", borderRadius: "30%"}} size={48}/>
      </Link>
    </>
  )
}

export default WhatsAppModal