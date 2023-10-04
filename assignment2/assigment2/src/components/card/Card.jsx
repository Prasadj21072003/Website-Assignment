import React, { useState } from "react";
import "./card.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Link } from "react-router-dom";

export default function Card(prop) {
  const [fav, setfav] = useState(false);

  return (
    <div className="card">
      <div className="maincard">
        <div className="first">
          <span className="forrent">For Rent</span>
          <button
            className="fav"
            onClick={() => {
              setfav(!fav);
            }}
          >
            {fav ? (
              <FavoriteIcon className="icon" />
            ) : (
              <FavoriteBorderIcon className="icon" />
            )}
          </button>
          <img
            src={
              prop.prop.image
                ? prop.prop.image
                : "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            }
            alt=""
          />
        </div>
        <div className="info">
          <div className="top">
            <h3>{prop.prop?.address}</h3>
            <span>
              <PlaceOutlinedIcon className="icon" /> {prop.prop?.city}
            </span>
          </div>
          <div className="mid">
            <div className="col">
              <ApartmentIcon className="icon" />

              <span>3 Room</span>
            </div>
            <div className="col">
              <BedIcon className="icon" />

              <span>{prop.prop?.beds} Bed</span>
            </div>
            <div className="col">
              <ShowerIcon className="icon" />

              <span>{prop.prop?.baths} Bath</span>
            </div>
            <div className="col">
              <OpenWithIcon className="icon" />

              <span>{prop.prop?.floorspace}</span>
            </div>
          </div>
          <hr />
          <div className="last">
            <h2>
              ${prop.prop?.price} <span>/month</span>
            </h2>
            <div className="buttons">
              <Link to={`/property/${prop.prop.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
