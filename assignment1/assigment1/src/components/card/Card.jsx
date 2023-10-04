import React, { useEffect, useState } from "react";
import "./card.scss";
import PeopleIcon from "@mui/icons-material/People";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Card(prop) {
  const [fav, setfav] = useState(false);
  return (
    <div className="card">
      <div className="main">
        <img
          src={
            prop.prop.image
              ? prop.prop.image
              : "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
        />
        <div className="info">
          <div className="top">
            <h3>{prop.prop.title ? prop.prop.title : "Toyota RAV4"}</h3>
            <span>2019</span>
          </div>
          <div className="mid">
            <div className="left">
              <span>
                <PeopleIcon className="icon" />4 People
              </span>
              <span>
                <TimeToLeaveIcon className="icon" />
                5935cc
              </span>
            </div>
            <div className="right">
              <span>
                <LocalGasStationIcon className="icon" />
                Petrol
              </span>
              <span>
                <AirportShuttleIcon className="icon" />
                Manual
              </span>
            </div>
          </div>
          <hr />
          <div className="last">
            <h2>
              $440 <span>/month</span>
            </h2>
            <div className="buttons">
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
              <button className="rent">Rent now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
