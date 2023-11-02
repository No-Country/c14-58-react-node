import { Link } from "react-router-dom"
import { BsWhatsapp } from "react-icons/bs"

function WhatsAppModal({number}) {
  return (
    <> 
      <Link to={`https://api.whatsapp.com/send?phone=${number}`} style={{display: "inline-block"}}>
      <BsWhatsapp style={{background:"#25d366", color: "white", padding: "8px", borderRadius: "30%"}} size={42}/>
      </Link>
    </>
  )
}

export default WhatsAppModal