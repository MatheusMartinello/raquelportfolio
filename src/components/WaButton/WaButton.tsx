import React from "react";
import { theme } from "../../styles/theme";
import "./style.css";

const WaButton = () => {
  return (
    <button
      onClick={() => window.open("https://wa.me/message/D47343AJPSTPG1")}
      style={{
        boxShadow: "rgba(150, 79, 76, 0.32) -1px 18px 14px -8px",
        border: "1px solid #CFADAC",
        color: "#CFADAC",
        maxWidth: "230px",
        borderRadius: "0.375rem",
        height: "61px",
        fontWeight: "400",
        fontSize: "16px",
        width: "100%",
        fontFamily: "Poppins",
        padding: 10,
      }}
      className="customButton"
    >
      Agende uma consulta já!
    </button>
  );
};

export default WaButton;
