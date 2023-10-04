import React, { useEffect, useState } from "react";
import "./home.scss";
import Card from "../../components/card/Card";
import axios from "axios";

import { Link, useLocation } from "react-router-dom";

import { adddata } from "../../redux/propertyreducer";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";

export default function Home({ city }) {
  const property = useSelector((state) => state.property.property.property);
  const dispatch = useDispatch();
  const location = useLocation();
  const newcity = location.pathname.slice(1, 15);
  const [lastpostindex, setlastpostindex] = useState(6);
  const [data, setdata] = useState();
  const [selectcity, setselectcity] = useState();

  const getdata = async () => {
    try {
      const res = await axios.get("./property.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      dispatch(adddata(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  const newselectcity = (e) => {
    setselectcity(e.target.value);
    setlastpostindex(6);
  };

  useEffect(() => {
    getdata();
    setselectcity(city ? city : newcity);
    setlastpostindex(6);
  }, []);

  return (
    <div className="home">
      <div className="main">
        <div className="heading">
          <h1>Featured Listed Property</h1>
          <span>Real estate bought,sold,leased,or rented,and can be a </span>
          <span>
            valuable investment oppotunity.The value of real estate can be...
          </span>
        </div>
        <div className="nav">
          <div className="city">
            <Link to="/NewYork" style={{ textDecoration: "none" }}>
              <button
                onClick={newselectcity}
                value="New York"
                className={selectcity === "New York" ? "active" : ""}
              >
                New york
              </button>
            </Link>
            <Link to="/Mumbai" style={{ textDecoration: "none" }}>
              <button
                onClick={newselectcity}
                value="Mumbai"
                className={selectcity === "Mumbai" ? "active" : ""}
              >
                Mumbai
              </button>
            </Link>

            <Link to="/Paris" style={{ textDecoration: "none" }}>
              <button
                onClick={newselectcity}
                value="Paris"
                className={selectcity === "Paris" ? "active" : ""}
              >
                Paris
              </button>
            </Link>

            <Link to="/London" style={{ textDecoration: "none" }}>
              <button
                className={selectcity === "London" ? "active" : ""}
                onClick={newselectcity}
                value="London"
              >
                London
              </button>
            </Link>
          </div>
          <button>
            View All <ArrowForwardIcon className="icon" />
          </button>
        </div>
        <div className="cards">
          {property
            ?.filter((item) => {
              if (
                item.city?.toLowerCase().includes(selectcity?.toLowerCase())
              ) {
                return item;
              }
            })
            .slice(0, lastpostindex)
            .map((item) => (
              <Card prop={item} key={item.id} />
            ))}
        </div>
        <div className="pages">
          <div
            className="show"
            style={{ display: lastpostindex === 6 ? "block" : "none" }}
          >
            <button
              onClick={() => {
                setlastpostindex(9);
              }}
            >
              <HourglassTopOutlinedIcon className="icon" />
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
