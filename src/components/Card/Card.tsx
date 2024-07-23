import {
  Box,
  Grid,
  Text,
  VStack,
  Icon,
  Img,
  Flex,
  Show,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Eclipse from "../../assets/eclipse/Decoration.svg";
import CustomButton from "../Button/Button";
import LearnMore from "../LearnMore";
import LinkTo from "../NavBar/component/component/LinkTo/LinkTo";

interface CardProps {
  title: string;
  text: string;
  LinkTo: string;
}

const Card = ({ title, text, LinkTo }: CardProps) => {
  return (
    <Link
      to={LinkTo}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      style={{ textDecoration: "none" }}
    >
      <VStack spacing={1} align="flex-start">
        <Flex direction={"row"}>
          <Img src={Eclipse} mr="1" />
          <Text
            fontStyle={"italic"}
            fontWeight="400"
            fontSize="32px"
            color="#111111"
            fontFamily={"Playfair Display"}
            lineHeight="63.98px"
          >
            {title}
          </Text>
        </Flex>
        <Box paddingLeft={"2.5rem"} maxW="18rem" textAlign={"left"}>
          <Text
            fontSize={{ base: "sm", md: "1rem" }}
            color="#9D8888"
            fontFamily="Poppins"
          >
            {text}
          </Text>
        </Box>
        <Show above="sm">
          <Flex justifyContent="center" w="100%" p={5}></Flex>
        </Show>
      </VStack>
      <Flex alignItems={"flex-end"} justifyContent="center">
        <LearnMore />{" "}
      </Flex>
    </Link>
  );
};
export default Card;
