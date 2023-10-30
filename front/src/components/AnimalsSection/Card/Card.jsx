/* eslint-disable react/prop-types */

import { IconContext } from "react-icons";
import { FaPaw } from "react-icons/fa";
import "./card.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {PiCatLight, PiDogFill} from "react-icons/pi"
import {BiFemaleSign, BiMaleSign} from "react-icons/bi"

export function Card({ data }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Link to={`/pets/${data.id}`}>
      <div className="card" style={{ cursor: "pointer" }}>
        <img src={data.image} alt="pet" className="card__photo" />
        <div
          className="card__type"
          style={{ background: `${data.status == "found" ? "green" : "red"}` }}
        >
          <IconContext.Provider value={{ size: "1.25rem" }}>
            <FaPaw />
          </IconContext.Provider>
          <p className="card__type-sale" style={{ fontSize: "32px" }}>
            {" "}
            {data.status}
          </p>
        </div>
        <div>
          <div className="card__content">
            <div
              className="card__descriptions"
              style={{ display: "flex", gap: "0px" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-2xl">{data.title}</h4>
                  <p>
                      {location.pathname === "/home"
                      
                      ? `${data.description.slice(0, 20)} ...`
                      : data.post_date}
                  </p>
                </div>
                <div>
                  {(data.specie === "cat")?<PiCatLight size={32}/> :<PiDogFill size={32}/>}
                  {(data.genre === "male")?<BiMaleSign size={32}/> :<BiFemaleSign size={32}/>}
                </div>
              </div>
            </div>
          </div>
          <div className="card__border"></div>
        </div>
      </div>
    </Link>
  );
}
