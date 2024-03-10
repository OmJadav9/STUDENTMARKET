import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Cycles">Cycles</option>
              <option value="Electronics">Electronics</option>
              <option value="Books">Books</option>
              <option value="Household">Household</option>
              <option value="matress">matress</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Cycles")} >Cycles</span>
            <span onClick={()=>setCategory("Electronics")} >Electronics</span>
            <span onClick={()=>setCategory("Books")} >Books</span>
            <span onClick={()=>setCategory("Household")} >Household</span>
            <span onClick={()=>setCategory("matress")} >matress</span>
            <span onClick={()=>setCategory("other")} >other</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
