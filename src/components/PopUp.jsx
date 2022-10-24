import React from "react";
import "./Popup.css";
import { AiOutlineClose } from "react-icons/ai";

function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <AiOutlineClose color="black" size="20px" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
