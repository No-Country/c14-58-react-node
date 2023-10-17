
import { IconContext } from "react-icons";
import {
  RiUploadLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import {  BiEdit } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import "./card.css";

export function Card({ data }) {


  return (
    <div className="card" style={{cursor:"pointer"}}>
      <img src={data.photo} alt="pet" className="card__photo" />
      <div className="card__type" style={{background:`${data.type == "Found" ? "green" : "red"}`}}>
        <IconContext.Provider value={{ size: "1.25rem" }}>
        <FaPaw />
        </IconContext.Provider>
        <p className="card__type-sale" style={{fontSize: "32px"}}> {data.type}</p>
      </div>
      <div>
        <div className="card__content">
          <div className="card__descriptions" style={{display:"flex", gap:"0px"}}>
            <p>86872 Jacob Gateway, Durganport, WV 48044</p>
            <p> CARACTERISTICAS</p>

          </div>
        </div>
        <div className="card__border"></div>
      </div>
    </div>
  );
}

