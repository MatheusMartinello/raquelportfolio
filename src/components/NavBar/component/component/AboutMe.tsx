import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
    <Link to={"sobre-mim"}>
      <button>
        <Text
          fontFamily={"Poppins"}
          color="#111111"
          fontSize={"1rem"}
          fontWeight="400"
          className="text-decoration"
        >
          Sobre mim
        </Text>
      </button>
    </Link>
  );
};

export default AboutMe;
