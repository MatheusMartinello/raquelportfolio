import { Box, Flex } from "@chakra-ui/react";
import Card from "./Card";
import CustomCards from "./CustomCards";

const GridCard = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={{ base: "center", md: "space-evenly" }}
      px={{ base: "0", md: 20 }}
      py={{ base: 0, md: 16 }}
      gap={{ base: "10px", md: 0 }}
      flexDir={{ base: "column", md: "row", lg: "row" }}
    >
      <Box
        display={{ base: "flex", md: "flex" }}
        p={{ base: 5, md: 10 }}
        borderRadius={"25px"}
        bgColor={"rgba(250, 226, 214, 0.4)"}
        minH={{ base: 0, md: "320px" }}
        minW={{ base: "320px", md: "380px" }}
        mb={{ base: "0", md: 0 }}
      >
        <Card
          title="Terapia On-Line"
          text="Cuide de si. Vamos juntas trilhar a sua jornada em busca do autocuidado, amor próprio e autocura emocional!"
          LinkTo="/terapia-online"
        />
      </Box>
      {/* <Box
        display={"flex"}
        p={10}
        bgColor={"rgba(250, 226, 214, 0.4)"}
        borderRadius={"25px"}
        minH={{ base: 0, md: "320px" }}
        minW={{ base: "320px", md: "380px" }}
        mb={{ base: "2", md: 0 }}
      >
        <Card
          text="Na Arteterapia utilizamos da expressão artística como meio terapêutico ao invés da fala. Com ela..."
          title="Arteterapia"
          LinkTo="/arteterapia"
        />
      </Box> */}
      <CustomCards />
    </Flex>
  );
};

export default GridCard;
