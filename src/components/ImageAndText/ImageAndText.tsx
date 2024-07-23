import { Flex, Grid, HStack, Img, Text } from "@chakra-ui/react";
import CustomButton from "../Button/Button";
import Image from "../../assets/images/image1.jpg";
const ImageAndText = () => {
  return (
    <Flex
      justifyContent={"center"}
      mb="25px"
      display={{ base: "none", md: "flex" }}
    >
      <HStack px={{ base: 0, md: 40 }} w="100%">
        <Img w="31%" display={{ base: "none", md: "block" }} src={Image} />
        <Flex
          px={{ base: "0px", md: "20" }}
          flexDirection="column"
          textAlign="left"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            fontFamily={"Playfair Display"}
            fontSize={{ base: "65px", md: "85px" }}
            fontWeight={700}
            lineHeight={{ base: "65px", md: "110px" }}
          >
            Por que Fazer Terapia?
          </Text>
          <Text
            fontFamily={"Poppins"}
            color="#967675"
            fontWeight={300}
            mt={{ base: 3, md: 5 }}
            mb={5}
          >
            Se o seu desejo é encontrar a sua força interior e se tornar uma
            pessoa consciente de si, com autoestima elevada, confiante e com
            amor próprio a terapia é o caminho.
          </Text>
          <Text mb="5" fontFamily={"Poppins"} color="#967675" fontWeight={300}>
            {" "}
            A terapia pode te ajudar a se tornar uma pessoa com maturidade
            emocional sem ser refém de suas feridas emocionais e crenças
            limitantes. Através dela é possível desenvolver o autoconhecimento
            através da conscientização de traumas, feridas emocionais provindas
            da infância, crenças limitantes e autossabotagens que permanecem no
            inconsciente e ressignificar-los
          </Text>
          <CustomButton
            text="Entre em Contato"
            onClick={() => {
              window.open("https://wa.me/message/D47343AJPSTPG1");
            }}
          />
        </Flex>
      </HStack>
    </Flex>
  );
};

export default ImageAndText;
