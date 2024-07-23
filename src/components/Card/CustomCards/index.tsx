import {
  Box,
  Flex,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "@reach/router";
import Eclipse from "../../../assets/eclipse/Decoration.svg";

const CustomCards = () => {
  return (
    <Flex
      display="grid"
      textAlign="left"
      fontFamily={"Poppins"}
      p={10}
      bgColor={"rgba(250, 226, 214, 0.4)"}
      borderRadius={"25px"}
      minH={{ base: 0, md: "340px" }}
      minW={{ base: "320px", md: "320px" }}
    >
      <Flex direction={"row"} alignItems={"center"}>
        <Img src={Eclipse} mr="1" />
        <Text
          fontStyle={"italic"}
          fontWeight="400"
          fontSize="38px"
          color="#111111"
          fontFamily={"Playfair Display"}
          lineHeight="63.98px"
        >
          Especialidades
        </Text>
      </Flex>
      <Box
        fontSize={{ base: "sm", md: "1rem" }}
        fontWeight="300"
        color="#9D8888"
        fontFamily="Poppins"
      >
        <Flex>
          <UnorderedList>
            <ListItem>
              <Text fontSize={{ base: "sm", md: "1rem" }}>Ansiedade</Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "sm", md: "1rem" }}>Relacionamentos</Text>
            </ListItem>

            <ListItem>
              <Text fontSize={{ base: "sm", md: "1rem" }}>
                Dependência Emocional{" "}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "sm", md: "1rem" }}>Depressão</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Box>
    </Flex>
  );
};
export default CustomCards;
