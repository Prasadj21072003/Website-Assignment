import React, { useEffect, useState } from "react";
import "./pages.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addpage } from "../../redux/carreducer";
export default function Pages() {
  //const [currentpage, setcurrentpage] = useState(1);
  const currentpage = useSelector((state) => state.car.page);
  const dispatch = useDispatch();

  const Pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const location = useLocation();
  console.log(location.pathname.slice(6, 8));

  const navigate = useNavigate();

  useEffect(() => {
    location.pathname !== "/"
      ? navigate(`/page/${currentpage}`)
      : navigate(`/`);
  }, [currentpage]);

  return (
    <div className="page">
      <span>{currentpage} of 10</span>
      <div className="pagination">
        <button
          value="prev"
          onClick={() => {
            if (currentpage === 1) {
              dispatch(addpage(1));
              navigate(`/page/${currentpage}`);
            } else {
              dispatch(addpage(currentpage - 1));
              navigate(`/page/${currentpage}`);
            }
          }}
        >
          Previous
        </button>
        {Pages.map((page, i) => {
          return (
            <button
              key={i}
              className={page === currentpage ? "active" : ""}
              value={page}
              onClick={() => {
                dispatch(addpage(page));
                navigate(`/page/${currentpage}`);
              }}
            >
              {page}
            </button>
          );
        })}
        <button
          value="Next"
          onClick={() => {
            if (currentpage === 10) {
              dispatch(addpage(10));
              navigate(`/page/${currentpage}`);
            } else {
              dispatch(addpage(currentpage + 1));
              navigate(`/page/${currentpage}`);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
