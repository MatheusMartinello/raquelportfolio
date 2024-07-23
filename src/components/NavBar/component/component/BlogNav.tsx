import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BlogNav = () => {
  return (
    <Link to="/blog">
      <button>
        <Text
          fontFamily={"Poppins"}
          fontSize="1rem"
          fontWeight={400}
          color="#111111"
          className="text-decoration"
        >
          Blog
        </Text>
      </button>
    </Link>
  );
};
export default BlogNav;
