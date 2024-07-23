import {
  Box,
  Flex,
  Text,
  Img,
  Container,
  UnorderedList,
  ListItem,
  Show,
} from "@chakra-ui/react";
import img from "../../../assets/arteterapia/IMG_7823.jpg";
import img2 from "../../../assets/arteterapia/IMG_7824.jpg";
import MoreAboutMe from "../../../components/MoreAboutMe";
import WaButton from "../../../components/WaButton/WaButton";
const Arteterapia = () => {
  return (
    <Container
      fontFamily={"Poppins"}
      fontSize="1.425rem"
      fontWeight={"regular"}
      textAlign="justify"
      // p={{ base: "25px", md: "75px" }}
      display={"flex"}
      my={10}
      flexDir={"column"}
      gap="10px"
      maxW="container.lg"
    >
      <Img
        src={img}
        borderRadius="25px"
        maxH="350px"
        px={{ base: "25px", md: 0 }}
        display="none"
      />
      <Text fontWeight={"bold"} fontFamily="Playfair Display" fontSize={26}>
        Arteterapia, quando a Arte entra em cena para auxiliar na cura.
      </Text>
      <Text>
        &nbsp;&nbsp; Na Arteterapia utilizamos da expressão artística como meio
        terapêutico ao invés da fala. Com ela podemos nos expressar de maneira
        livre e espontânea, sem julgamentos. Entrando em contato com as nossas
        emoções mais internas e inconscientes.
      </Text>
      <Text>
        &nbsp;&nbsp; Além de ser uma forma de terapia extremamente relaxante,
        ela proporciona inúmeros benefícios:
      </Text>
      <Flex justifyContent={"space-between"}>
        <UnorderedList px={10}>
          <ListItem>
            <Text>
              Ajuda na expressão e <b>comunicação de sentimentos</b>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Trabalha a <b>criatividade</b> e espontaneidade
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <b>Diminui</b> o estresse e a <b> ansiedade</b>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <b>Auxiliam na depressão</b>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Auxilia no equilíbrio e <b>autocura emocional</b>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Aumenta a <b>autoestima</b>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Contribui para a <b>concentração, atenção e memória</b>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <b>Trabalha o perfeccionismo</b> e a autocrítica
            </Text>
          </ListItem>
        </UnorderedList>
        <Show above="sm">
          <Img
            src={img}
            borderRadius="25px"
            maxH="350px"
            px={{ base: "25px", md: 0 }}
          />{" "}
        </Show>
      </Flex>
      <Text>
        &nbsp;&nbsp;Através das artes e símbolos trazidos pelo paciente durante
        as vivências é possível identificar traumas, descobrir crenças
        limitantes, conteúdos de sonhos, autossabotagens, medos, memórias
        infantis, crenças limitantes e conflitos atuais. A partir desse momento
        é iniciado um processo de compreensão, acolhimento e ressignificação das
        questões encontradas.
      </Text>
      <Text>
        &nbsp;&nbsp;É uma terapia muito vantajosa para aqueles que sentem
        dificuldade em falar sobre si e seus traumas. A arte se torna um canal
        que facilita a comunicação, pois através do uso da expressão plástica
        começam a desenvolver a verbalização ao explicar e falar a respeito de
        suas produções artísticas.
      </Text>
      <Text>
        &nbsp;&nbsp; Durante o processo de arteterapia utilizamos das mais
        diferentes técnicas para a expressão livre e artística, alguns exemplos:
      </Text>
      <Flex justifyContent={"space-between"}>
        <UnorderedList px={10}>
          <ListItem>
            <Text>Pintura em tela</Text>
          </ListItem>
          <ListItem>
            <Text>Meditação</Text>
          </ListItem>
          <ListItem>
            <Text>Aquarela</Text>
          </ListItem>
          <ListItem>
            <Text>Argila/Barro</Text>
          </ListItem>
          <ListItem>
            <Text>Colagem </Text>
          </ListItem>
          <ListItem>
            <Text>Fotografia</Text>
          </ListItem>
          <ListItem>
            <Text>Música </Text>
          </ListItem>
          <ListItem>
            <Text>Bordado </Text>
          </ListItem>
        </UnorderedList>
        <Show above="sm">
          <Img
            src={img2}
            borderRadius="25px"
            maxH="350px"
            px={{ base: "25px", md: 0 }}
          />
        </Show>
      </Flex>
      <Text>
        &nbsp;&nbsp; É um lindo processo de autoconhecimento através da arte.
      </Text>
      <Text>
        &nbsp;&nbsp; As sessões de arteterapia são feitas no formato presencial
        em Curitiba-PR e tem duração de 2h cada.
      </Text>
      <Flex justifyContent={"center"}>
        {" "}
        <WaButton />
      </Flex>
      <MoreAboutMe />
    </Container>
  );
};

export default Arteterapia;
