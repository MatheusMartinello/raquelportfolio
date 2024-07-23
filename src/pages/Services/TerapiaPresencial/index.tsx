import { Box, Flex, Img, Text } from "@chakra-ui/react";
import img from "../../../assets/IMG_6083.jpg";
const TerapiaPresencial = () => {
  return (
    <Flex
      justifyContent={"center"}
      p={{ base: "0", md: 20 }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Img
        src={img}
        borderRadius="25px"
        maxH="350px"
        px={{ base: "25px", md: 0 }}
      />
      <Box
        maxW={{ base: "100%", md: "720px" }}
        p={{ base: "25px", md: "0 20" }}
        textAlign="justify"
        fontFamily={"Poppins"}
      >
        <Text>
          A terapia presencial é ideal para mulheres que prezam pelo contato
          direto e físico. Muitas vezes isso se torna primordial para o processo
          de identificação entre terapeuta e paciente, podendo trazer uma maior
          sensação de conforto e acolhimento.
        </Text>
        <Text py={5}>
          {" "}
          O encontro semanal pode se tornar um momento de autocuidado e de
          refúgio emocional da rotina para a paciente. Depois de um expediente
          corrido, pode ser reconfortante ter aquele espaço de silêncio e de
          compreensão. O deslocamento até o consultório também pode ser
          apreciado por quem gosta de dirigir.
        </Text>
        <Text>Exclusivamente para residentes de Curitiba-PR.</Text>
      </Box>
    </Flex>
  );
};

export default TerapiaPresencial;
