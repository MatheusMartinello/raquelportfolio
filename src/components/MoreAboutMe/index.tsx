import { Box, Container, Flex, Img, Show, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LearnMore from "../LearnMore";

const MoreAboutMe = () => {
  return (
    <Flex px={{ base: 4, md: 0 }} justifyContent="center">
      <Container
        bgColor={"#cca89a"}
        maxW="container.lg"
        px={{ base: 5, md: 10 }}
        borderRadius={"25px"}
        mt={10}
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent="space-evenly"
          textAlign={"center"}
          overflow={"hidden"}
        >
          <Show below="sm">
            <Text
              fontSize={"2xl"}
              fontFamily={"PlayFair Display"}
              fontWeight={"bold"}
              mt={2}
            >
              Antes do nosso encontro, um pouco sobre mim:
            </Text>
          </Show>
          <Img
            src={
              "https://i.pinimg.com/750x/6a/dc/dd/6adcdd1fcc4fcc85f8a4456079599928.jpg"
            }
            maxH={"420px"}
            borderRadius={"50% 50% 30% 30%"}
            p={2}
          />
          <Flex
            flexDir={"column"}
            textAlign="left"
            fontFamily={"Poppins"}
            p={{ base: 2, md: 10 }}
            gap={4}
          >
            <Show above="sm">
              <Text
                fontSize={"2xl"}
                fontFamily={"PlayFair Display"}
                fontWeight={"bold"}
              >
                Antes do nosso encontro, um pouco sobre mim:
              </Text>
            </Show>
            <Flex
              gap={4}
              fontSize={{ base: "sm", md: "md" }}
              flexDir={"column"}
              textAlign={{ base: "left", md: "left" }}
            >
              <Text fontSize={{ base: "sm", md: "md" }}>
                Eu me chamo Raquel, sou <b>Psicóloga Clínica </b>(CRP 08/32533)
                graduada pela Pontifícia Universidade Católica do Paraná,
                pós-graduada em Arteterapia Junguiana pela Integrarte e em
                Psicologia Clínica.
              </Text>

              <Text fontSize={{ base: "sm", md: "md" }}>
                Trabalho com a <b>abordagem Psicanalítica</b>, que valoriza o
                acolhimento e a compreensão do paciente em sua totalidade de
                forma ampla e profunda.
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                Durante os últimos anos e nas mais de 5 mil sessões acompanhando
                meus pacientes pude me especializar em <b>Ansiedade</b>,
                <b> Relacionamentos</b>, <b>Dependência Emocional</b> e{" "}
                <b>Depressão</b>.
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                Utilizo estratégias de <b>profundo impacto emocional</b> que têm
                a capacidade de <b>amparar, ressignificar</b> e{" "}
                <b>trazer alívio</b> para as dores emocionais mais profundas,
                fazendo com que elas <b>se tornem sua força</b>.
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                Será um prazer poder te auxiliar nesse processo!
              </Text>
            </Flex>
            <Flex w="100%" justifyContent={"center"}>
              <Link to={"/sobre-mim"} style={{ textDecoration: "none" }}>
                <LearnMore />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
export default MoreAboutMe;
