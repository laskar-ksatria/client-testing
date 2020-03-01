import React from "react";
import ProfileHeaderLeftComp from "./profileHeaderLeftComp/ProfileHeaderLeftComp";
import ProfileHeaderRightComp from "./profileHeaderRightComp/ProfileHeaderRightComp";

function CardProfileHeaderBody() {
  return (
    <div className="card-body met-pro-bg">
      <div className="met-profile">
        <div className="row">

          <ProfileHeaderLeftComp profileName="Ivan Julian" profileEmail="ivanjulian@gmail.com" profileCountry="Indonesia"/>

          <ProfileHeaderRightComp />
    
        </div>
      </div>
    </div>
  );
};

export default CardProfileHeaderBody