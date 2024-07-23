import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <Link to="/">
      <button>
        <Text
          fontFamily={"Poppins"}
          fontSize={"1rem"}
          fontWeight="400"
          color="#111111"
          onClick={() => {}}
          className="text-decoration"
        >
          Início
        </Text>
      </button>
    </Link>
  );
};
export default Start;
