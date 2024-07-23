import React from "react";
import "./styles.css";
interface GrayLinesProps {
  children?: React.ReactNode;
}

const GrayLines: React.FC<GrayLinesProps> = ({ children }) => {
  return <div className="gray-lines">{children}</div>;
};

export default GrayLines;
