
import { IconContext } from "react-icons";
import {
  RiBuildingLine,
  RiCoinsLine,
  RiMoneyDollarCircleLine,
  RiUploadLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import { BiArea, BiBath, BiBed, BiEdit } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import "./card.css";

export function Card({ data }) {
  const Actions = () => {
    return (
      <div className="card__actions">
        <IconContext.Provider value={{ size: "1.5rem" }}>
          {data.active ? (
            <>
              <div className="card__action-container">
                <BiEdit />
                <p className="card__action">Edit</p>
              </div>
              <div className="card__action-container">
                <AiOutlineCloseCircle />
                <p className="card__action">Close</p>
              </div>
            </>
          ) : (
            ""
          )}
          {!data.active ? (
            <>
              <div className="card__action-container">
                <RiUploadLine />
                <p className="card__action">Restore</p>
              </div>
              <div className="card__action-container">
                <RiDeleteBin6Line />
                <p className="card__action">Delete</p>
              </div>
            </>
          ) : (
            ""
          )}
        </IconContext.Provider>
      </div>
    );
  };

  return (
    <div className="card" style={{cursor:"pointer"}}>
      <img src={data.photo} alt="property" className="card__photo" />
      <div className="card__type">
        <IconContext.Provider value={{ size: "1.25rem" }}>
        <FaPaw />
        </IconContext.Provider>
        <p className="card__type-sale" style={{fontSize: "32px"}}> {data.typeSale}</p>
      </div>
      <div>
        <div className="card__content">
          <div className="card__descriptions" style={{display:"flex", gap:"0px"}}>
            <p>86872 Jacob Gateway, Durganport, WV 48044</p>
            <p> CARACTERISTICAS</p>

          </div>
        </div>
        {data.role == "tenant" ? "" : <Actions></Actions>}
        <div className="card__border"></div>
      </div>
    </div>
  );
}

