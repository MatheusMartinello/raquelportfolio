import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Health = () => {
  return (
    <Link to="terapia-online">
      <button style={{ borderColor: "none" }}>
        <Text
          fontFamily={"Poppins"}
          fontSize="1rem"
          fontWeight={400}
          color="#111111"
          className="text-decoration"
        >
          Terapia On-Line
        </Text>
      </button>
    </Link>
  );
};
export default Health;
