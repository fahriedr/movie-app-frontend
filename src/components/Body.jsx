import React from "react";
import BodyHeader from "./BodyHeader";
import BodyMain from "./BodyMain";

function Body() {
  return (
    <div className="container container-body text-light">
      <BodyHeader />
      <BodyMain />
    </div>
  );
}

export default Body;
