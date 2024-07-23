import { Box, Button, Flex, Grid, Img, Text } from "@chakra-ui/react";
import Eclipse from "../../assets/eclipse/Decoration.svg";
import Questions from "../Questions/Questions";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const BottomOfPage = () => {
  return (
    <>
      <Questions />

      <Flex
        backgroundColor="#23242C"
        color={"#ffffff"}
        w="100%"
        p="20"
        fontFamily={"Poppins"}
        justifyContent={"space-between"}
        alignItems="center"
        flexDir={{ base: "column", md: "row", lg: "row" }}
        gap="4.5rem"
        textAlign={"left"}
      >
        <Box maxW={"720px"}>
          <Grid w="100%" gap={15}>
            <Flex dir="row">
              <Img src={Eclipse} mr="1" sizes="3rem" color={"#ffffff"} />
              <Text
                fontWeight={400}
                fontSize="3rem"
                // fontFamily="Playfair Display"
              >
                Raquel Teodorovicz
              </Text>
            </Flex>

            <Text
              fontSize={{ base: "sm", md: "1rem" }}
              fontFamily="Poppins"
              fontWeight={"semibold"}
            >
              Guio meus pacientes a se reconectarem com sua essência exercitando
              o auto cuidado, amor próprio, autoestima e confiança
            </Text>
            <Button
              leftIcon={<FaWhatsapp />}
              variant="outline"
              colorScheme={"pink"}
              onClick={() =>
                window.open("https://wa.me/message/D47343AJPSTPG1")
              }
            >
              (41) 99178-7153
            </Button>
            <Button
              leftIcon={<AiOutlineMail />}
              variant="outline"
              colorScheme={"pink"}
            >
              raquelartepsi@gmail.com
            </Button>
          </Grid>
        </Box>
        <Flex
          justifyContent={"space-evenly"}
          width="100%"
          display={{ base: "block", md: "flex" }}
        >
          <Grid>
            <Flex dir="row">
              <Img src={Eclipse} mr="1" sizes="3rem" color={"#ffffff"} />
              <Text fontSize={{ base: "md", md: "1rem" }}>Especialidades</Text>
            </Flex>
            <Text fontSize={{ base: "sm", md: "1rem" }}>Ansiedade</Text>
            <Text fontSize={{ base: "sm", md: "1rem" }}>Relacionamentos</Text>
            <Text fontSize={{ base: "sm", md: "1rem" }}>
              Compulsão Alimentar
            </Text>
            <Text fontSize={{ base: "sm", md: "1rem" }}>
              Dependência emocional
            </Text>
            <Text fontSize={{ base: "sm", md: "1rem" }}>
              Equilíbrio Emocional
            </Text>
            <Text fontSize={{ base: "sm", md: "1rem" }}>Depressão</Text>
          </Grid>
          <Grid>
            <Flex dir="row" opacity={0} display={{ base: "none", md: "flex" }}>
              <Img src={Eclipse} mr="1" sizes="3rem" color={"#ffffff"} />
              <Text fontSize={{ base: "md", md: "1rem" }}>Termos</Text>
            </Flex>
            <Text fontSize={{ base: "sm", md: "1rem" }}>Autoconhecimento</Text>
            <Text fontSize={{ base: "sm", md: "1rem" }}>Traumas</Text>
            <Text fontSize={{ base: "sm", md: "1rem" }}>
              Crescimento pessoal
            </Text>
            <Text fontSize={{ base: "sm", md: "1rem" }}>
              Feridas Emocionais
            </Text>
            <Text fontSize={{ base: "sm", md: "1rem" }}>
              Ressignificação de Crenças Limitantes
            </Text>
            <Text fontSize={{ base: "sm", md: "1rem" }}>
              Identificação de Autossabotagens
            </Text>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};
export default BottomOfPage;
