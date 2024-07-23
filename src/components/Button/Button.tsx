import "./style.css";
interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton = ({ onClick, text }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        boxShadow: "rgba(150, 79, 76, 0.32) -1px 18px 14px -8px",
        border: "1px solid #CFADAC",
        color: "#CFADAC",
        maxWidth: "185px",
        borderRadius: "0.375rem",
        height: "60px",
        fontWeight: "400",
        fontSize: "16px",
        width: "100%",
        fontFamily: "Poppins",
      }}
      className="customButton"
    >
      {text}
    </button>
  );
};

export default CustomButton;
