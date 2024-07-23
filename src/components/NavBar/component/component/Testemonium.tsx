import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Testemonium = () => {
  return (
    <Link to="depoimentos">
      <button>
        <Text
          fontFamily={"Poppins"}
          fontSize="1rem"
          color="#111111"
          fontWeight={400}
          className="text-decoration"
        >
          Depoimentos
        </Text>
      </button>
    </Link>
  );
};

export default Testemonium;
