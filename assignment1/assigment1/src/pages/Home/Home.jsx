import React, { useEffect, useState } from "react";
import "./home.scss";
import Card from "../../components/card/Card";
import axios from "axios";
import Pages from "../../components/pages/Pages";
import { useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { adddata, addpage, addsearch } from "../../redux/carreducer";
import { useDispatch, useSelector } from "react-redux";

export default function Home({ id }) {
  const cars = useSelector((state) => state.car.cars);
  const currentpage = useSelector((state) => state.car.page);
  const dispatch = useDispatch();
  const location = useLocation();
  const [search, setsearch] = useState("");
  const [newsearch, setnewsearch] = useState("");
  const [page, setpage] = useState("");

  const newcurrentpage = page ? page : currentpage;
  const postperpage = 6;
  const lastpostindex = postperpage * newcurrentpage;
  const firstpostindex = lastpostindex - postperpage;

  const fetchdata = async () => {
    try {
      const res = await axios.get("./carsdata.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      dispatch(adddata(res?.data.cars));
      console.log(res?.data.cars);
    } catch (error) {
      console.log(error);
    }
  };

  const searching = (e) => {
    dispatch(addsearch(e.target.value));
    setsearch(e.target.value);
    if (e.target.value !== "") {
      setpage(1);
    } else {
      setpage("");
    }
  };

  useEffect(() => {
    fetchdata();
  }, [location.pathname]);

  return (
    <div className="home">
      <div className="main">
        <div className="nav">
          <div className="searchbar">
            <SearchIcon className="icon" />
            <input type="text" placeholder="Search car" onChange={searching} />
          </div>
          <span>Relevance</span>
          <span>All brands</span>
        </div>
        <div className="cards">
          {cars
            ?.filter((item) => {
              if (item.title?.toLowerCase().includes(search?.toLowerCase())) {
                return item;
              } else if (search === "") {
                return item;
              }
            })
            .slice(firstpostindex, lastpostindex)
            .map((item) => (
              <Card prop={item} key={item.id} />
            ))}
        </div>
        <div className="pages">
          <Pages />
        </div>
      </div>
    </div>
  );
}
