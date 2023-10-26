
import { IconContext } from "react-icons";
import { FaPaw } from "react-icons/fa";
import "./card.css";
import { useNavigate } from "react-router-dom";

export function Card({ data }) {
  const navigate = useNavigate()

  return (
    <div className="card" style={{cursor:"pointer"}} onClick={()=>navigate('/pets/2')}>
      <img src={data.image} alt="pet" className="card__photo" />
      <div className="card__type" style={{background:`${data.status == "found" ? "green" : "red"}`}}>
        <IconContext.Provider value={{ size: "1.25rem" }}>
        <FaPaw />
        </IconContext.Provider>
        <p className="card__type-sale" style={{fontSize: "32px"}}> {data.status}</p>
      </div>
      <div>
        <div className="card__content">
          <div className="card__descriptions" style={{display:"flex", gap:"0px"}}>
            <h4 className="font-semibold text-2xl">{data.title}</h4>
            <p>{data.description}</p>

          </div>
        </div>
        <div className="card__border"></div>
      </div>
    </div>
  );
}

