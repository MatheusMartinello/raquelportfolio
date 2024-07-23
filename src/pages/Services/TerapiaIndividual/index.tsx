import { Flex, Img, Text } from "@chakra-ui/react";
import img from "../../../assets/IMG_6084.jpg";
const TerapiaIndividual = () => {
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
      <Text
        maxW={"720px"}
        textAlign="justify"
        p={{ base: "25px", md: "0 20" }}
        fontFamily={"Poppins"}
      >
        Durante o processo de terapia é possível desenvolver o autoconhecimento
        através da conscientização de traumas, feridas emocionais provindas da
        infância, crenças limitantes e autossabotagens que permanecem no
        inconsciente e ressignificar-los. Eu e você trabalharemos juntas para
        resgatar a sua essência, exercitando virtudes como amor-próprio e
        autocuidado, curar a criança interior, regular suas emoções e
        comportamentos e melhorar sua autoestima. Sempre prezando muito pelo
        acolhimento e compreensão da paciente em sua totalidade, de forma ampla
        e profunda.
      </Text>
    </Flex>
  );
};

export default TerapiaIndividual;
