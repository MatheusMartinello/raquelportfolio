import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface LinkToProps {
  title: string;
  to: string;
}

const LinkTo = ({ title, to }: LinkToProps) => {
  return (
    <Link to={to}>
      <Text
        fontFamily={"Poppins"}
        fontSize={"1rem"}
        fontWeight="400"
        color="#111111"
        onClick={() => {}}
      >
        {title}
      </Text>
    </Link>
  );
};
export default LinkTo;
