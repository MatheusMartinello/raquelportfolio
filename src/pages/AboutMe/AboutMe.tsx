import { Box, Flex, Img, Text } from "@chakra-ui/react";
import HeroBarImg from "../../assets/raquelPictures/HeroBar2.jpg";
import RaquelJoy from "../../assets/raquelPictures/RaquelJoy.jpeg";
import WaButton from "../../components/WaButton/WaButton";
import "./style.css";
const AboutMe = () => {
  return (
    <Flex
      justifyContent={"center"}
      p={{ base: "0px", md: 20 }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Img
        alt="Imagem1"
        src={
          "https://i.pinimg.com/750x/6a/dc/dd/6adcdd1fcc4fcc85f8a4456079599928.jpg"
        }
        borderRadius="25px"
        maxH="350px"
        objectFit={"cover"}
        px={{ base: "25px", md: 0 }}
      />
      <Img
        alt="Imagem2"
        src={
          "https://i.pinimg.com/750x/69/46/7b/69467bb6a068a4cba11687e2058912d8.jpg"
        }
        objectFit={"cover"}
        borderRadius="25px"
        maxH="350px"
        position={"absolute"}
        zIndex="-1"
        left=" 0.5%"
        top="29%"
        display={{ base: "none", md: "block" }}
      />
      <Flex
        w="100%"
        p={{ base: "25px", md: "0 20" }}
        maxWidth="820px"
        fontFamily={"Poppins"}
        fontSize={{ base: "sm", md: "1rem" }}
        fontWeight={"300"}
        textAlign="left"
        flexDir={"column"}
        gap="15px"
      >
        <Text
          fontWeight={"normal"}
          casing={"inherit"}
          fontSize={{ base: "sm", md: "1rem" }}
        >
          Olá, muito prazer e seja bem vinda!
        </Text>
        <Text casing={"inherit"} fontSize={{ base: "sm", md: "1rem" }}>
          Me chamo Raquel, sou Psicóloga graduada pela PUC-PR, pós-graduada em
          <b> Arteterapia Junguiana </b>pela Integrarte, 
          <b>Especialista em Psicologia Clínica </b>e também 
          <b>Terapeuta Especializada em Mulheres</b>.
        </Text>
        <Text casing={"inherit"} fontSize={{ base: "sm", md: "1rem" }}>
          Meu amor pela terapia vem de longe. Quando comecei a minha trajetória
          de autoconhecimento na terapia, me senti extremamente acolhida, ouvida
          e segura. Foram inúmeros os desafios que me permiti enfrentar para
          estar lá e chegar onde estou hoje. Sou muito grata por ter tido uma
          vivência e um exemplo tão transformador em minha vida.
        </Text>
        <Text casing={"inherit"} fontSize={{ base: "sm", md: "1rem" }}>
          Depois de anos confirmando e percebendo a minha afinidade com essa
          profissão, me joguei nela de alma e coração. Desejando acolher e
          ajudar outras mulheres no seu processo, da mesma maneira que eu fui.
        </Text>
        <Text fontSize={{ base: "sm", md: "1rem" }}>
          Como Jung citou{" "}
          <b>"Quem olha para fora sonha, quem olha para dentro desperta"</b>.
          Esse é o caminhar da minha terapia, desbravar e acolher a luz e a
          sombra no caminhar para o autoconhecimento, autoafirmação, amor,
          autocuidado e autoestima.
        </Text>
        <Text fontSize={{ base: "sm", md: "1rem" }}>
          Sou uma mulher realizada, extremamente artística, mãe de pet, amo a
          natureza e sua energia, amo cozinhar algo delicioso e comer enquanto
          maratono uma série, estou sempre em contato com a minha criança
          interior e sua pureza.
        </Text>
        <Text fontSize={{ base: "sm", md: "1rem" }}>
          Posso dizer que{" "}
          <b>
            encontrei o meu caminho ajudando outras mulheres a encontrarem a
            essência delas
          </b>
          . Isso é maravilhoso.
        </Text>
        <div className="ellipse5"></div>
        <div className="ellipse6"></div>
        <Flex justifyContent={"center"} mt="2">
          <WaButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
