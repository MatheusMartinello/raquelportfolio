import { Box, Flex, Grid, Img, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface DescriptionProps {
  title: string;
  text: string;
  img: string;
  linkTo: string;
}

const Description = ({ text, title, img, linkTo }: DescriptionProps) => {
  return (
    <Link to={linkTo} style={{ textDecoration: "none", width: "100%" }}>
      <Flex maxW={{ base: "100%", md: "23.482rem" }} h="40.438rem">
        <VStack bgColor={"#F6ECE8"} gap={0}>
          <Img src={img} objectFit="cover" />
          <VStack>
            <Text
              fontStyle={"italic"}
              fontWeight="400"
              fontSize="38px"
              fontFamily={"Playfair Display"}
              lineHeight="63.98px"
              color="#967675"
            >
              {title}
            </Text>
            <Text
              color="#967675"
              fontSize={{ base: "sm", md: "1rem" }}
              fontFamily="Poppins"
              px="1.725rem"
            >
              {text}
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </Link>
  );
};

export default Description;
