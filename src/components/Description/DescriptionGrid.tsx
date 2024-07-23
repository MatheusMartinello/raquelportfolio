import { Box, Container, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import Description from "./Description";
import img1 from "../../assets/IMG_6083.jpg";
import img2 from "../../assets/IMG_6084.jpg";
import img3 from "../../assets/IMG_6085.jpg";
import img4 from "../../assets/IMG_6087.jpg";
import Blog from "../../pages/Blog";

const DescriptionGrid = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        w="100%"
        mb="20px"
        py={10}
        position={"relative"}
      >
        <hr />
        <Box
          style={{
            position: "absolute",
            zIndex: -1,
            right: "41%",
          }}
          display={{ base: "none", md: "block" }}
        >
          <Text
            fontSize={"110px"}
            fontWeight="700"
            fontFamily={"Playfair Display"}
            color="#efefef"
          >
            Blog
          </Text>
        </Box>

        <Text
          fontFamily={"Playfair Display"}
          fontWeight="900"
          fontSize={36.85}
          // lineHeight="49.12"
          textAlign={"center"}
        >
          Blog
        </Text>
        <hr />
      </Flex>
      <Blog />
    </>
  );
};

export default DescriptionGrid;
