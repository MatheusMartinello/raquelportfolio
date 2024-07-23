import { Box, Flex, Img, Text } from "@chakra-ui/react";
import img from "../../../assets/IMG_6085.jpg";
const TerapiaOnLine = () => {
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
          Se você tem uma rotina muito corrida, talvez a Terapia Online seja a
          solução perfeita. Quando precisamos nos deslocar até o consultório,
          perdemos um tempo no trânsito que poderia ser utilizado de outras
          formas. Além disso, ela tem os mesmos benefícios de uma terapia
          presencial, com as vantagens de poder ser realizada de qualquer lugar
          do mundo, inclusive no conforto da sua casa ou durante uma viagem que
          está fazendo, e de ser em horários mais flexíveis.
        </Text>
        <Text>
          {" "}
          Ela acontece por meio do Google Meet ou chamadas de vídeo do Whatsapp.
          Tem duração de 50 minutos.
        </Text>
      </Box>
    </Flex>
  );
};
export default TerapiaOnLine;
