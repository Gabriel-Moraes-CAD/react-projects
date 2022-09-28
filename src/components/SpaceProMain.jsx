import React from "react";
import SpaceProNavBar from "./SpaceProNavBar";
import "@splidejs/react-splide/css";
import SpaceProSpaceG from "./SpaceProSpaceG";
import SpaceProFigGrid from "./SpaceProFigGrid";
import SpaceProFooter from "./SpaceProFooter";

function SpaceProMain() {
  return (
    <div>
      <SpaceProNavBar />

      {/* Title + Background Image */}
      <div className="header-main">
        <div className="overlay-header d-flex justify-content-center align-items-center space-font">
          <h1>Discover Space </h1>
        </div>
      </div>

      <SpaceProSpaceG />
      <SpaceProFigGrid />
      <SpaceProFooter />
    </div>
  );
}

export default SpaceProMain;
