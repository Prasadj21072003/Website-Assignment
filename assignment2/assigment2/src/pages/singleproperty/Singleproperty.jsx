import React, { useEffect, useState } from "react";
import "./singleproperty.scss";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LocationCityIcon from "@mui/icons-material/LocationCity";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SignpostIcon from "@mui/icons-material/Signpost";

export default function Singleproperty() {
  const propertyid = useParams().id;

  const property = useSelector((state) => state.property.property.property);

  const [singleproperty, setsingleproperty] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    property?.filter((item) => {
      if (item.id === propertyid) {
        setsingleproperty(item);
        return item;
      }
    });
  }, []);

  return (
    <div className="singleproduct">
      <div className="container">
        <div className="mediumcol">
          <img src={singleproperty?.image} alt="" />
        </div>
        <div className="largecol">
          <div className="upperdiv">
            <div className="heading">
              <h2>
                <PlaceOutlinedIcon className="icon" /> {singleproperty?.city}
              </h2>
            </div>
            <div className="area">
              <span>
                <LocationCityIcon className="icon" /> {singleproperty?.area}
              </span>
            </div>

            <div className="desc">
              <SignpostIcon className="icon" />
              <p>{singleproperty?.address}</p>
            </div>
            <div className="mid">
              <div className="col">
                <ApartmentIcon className="icon" />

                <span>3 Room</span>
              </div>
              <div className="col">
                <BedIcon className="icon" />

                <span>{singleproperty?.beds} Bed</span>
              </div>
              <div className="col">
                <ShowerIcon className="icon" />

                <span>{singleproperty?.baths} Bath</span>
              </div>
              <div className="col">
                <OpenWithIcon className="icon" />

                <span>{singleproperty?.floorspace}</span>
              </div>
            </div>
            <div className="price">
              <span>
                ${singleproperty?.price}
                <span className="month">/month</span>
              </span>
            </div>
          </div>
          <div className="add">
            <div className="button">
              <button>Rent Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
