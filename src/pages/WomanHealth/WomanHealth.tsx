import {
  Container,
  Flex,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import img from "../../assets/images/Sunlight.jpeg";
import HeroBar from "../../components/HeroBar/HeroBar";
import MoreAboutMe from "../../components/MoreAboutMe";
import WaButton from "../../components/WaButton/WaButton";
import Depoiments from "../Depoiments/Depoiments";

const WomanHealth = () => {
  const text = `Os atendimentos de Psicoterapia Online são pautados pela abordagem <b>Analítica</b>.
 
  A análise possibilita o acolhimento e compreensão do paciente em sua totalidade, de forma ampla e profunda.

  Durante os atendimentos, você terá liberdade para poder falar sobre tudo que quiser sem julgamentos e em <b>total sigilo</b>.

  As sessões acontecem através de vídeos chamadas, com duração média de <b>50 minutos</b>.
  
  Seja qual for a sua necessidade:
  
  <ul>
  <li style="padding-left: 15px">Ansiedade</li>
  <li style="padding-left: 15px">Depressão</li>
  <li style="padding-left: 15px">Dependência Emocional</li>
  <li style="padding-left: 15px">Relacionamentos</li>
  </ul>
 ou qualquer outro tipo sofrimento,  estou aqui para lhe apoiar.
  Tenho as ferramentas e experiência profissional para ajudar você a <b>viver melhor se tornar a sua melhor versão</b>.
  A terapia é um espaço de total acolhimento e <b>incríveis transformações</b>, será um prazer poder te auxiliar nesse processo!`;
  return (
    <>
      <HeroBar title="Terapia Online Individual" subtitle={text} />
      <Flex alignItems={"center"} w="100%">
        <hr />
        <Text
          fontWeight={"bold"}
          fontFamily="Playfair Display"
          fontSize={{ base: "3xl", md: "5xl" }}
          w={{ base: "300%", md: "75%" }}
        >
          Quando devo buscar Terapia?
        </Text>
        <hr />
      </Flex>
      <Container
        fontFamily={"Poppins"}
        fontSize={{ base: "md", md: "1rem" }}
        fontWeight={"300"}
        textAlign="justify"
        p={{ base: "6", md: "75px" }}
        display={"flex"}
        flexDir={"column"}
        gap="15px"
        maxW="container.lg"
      >
        {/* <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
           Quando falamos de Saúde Mental da Mulher são infinitos os
          aspectos a serem considerados. Hoje em dia a mulher carrega um{" "}
          <b>acúmulo de funções</b>, <b>padrões</b>, <b>regras</b>,{" "}
          <b>obrigações</b> e <b>crenças externas e internas</b> que contribuem
          para o <b>adoecimento emocional</b>. Viemos de geração em geração
          negando a nossa feminilidade, por tanto, <b>negando a nós mesmas</b> e
          nossas potencialidades.
        </Text>
        <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
           Junto a isso, somos rodeadas de expectativas e metas
          extremamente aceleradas e fluidas, torna-se raro o momento em que
          paramos e <b>olhamos para si com o devido cuidado e afeto</b>.
          Entendendo se de fato as decisões que estamos tomando, o que estamos
          sentindo e pensando estão funcionando a nosso favor ou não.
        </Text> */}
        <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
          Você já se deparou tendo os seguintes comportamentos, pensamentos e
          sentimentos?
        </Text>
        <Flex justifyContent={"space-evenly"} w="100%">
          <UnorderedList px={{ base: 4, md: 10 }} textAlign={"left"}>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Sente <b>EXAUSTÃO</b> diária, no trabalho e em casa.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Falta de vontade de sair com seus amigos
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                <b>ANSIEDADE</b> diária
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Sente um <b>VAZIO</b> dentro de si
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Sentimento de <b>INSUFICIÊNCIA</b>
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"bold"}>
                SOLIDÃO
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Sensação de estar paralisada
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Se percebe <b>PRESA</b> em uma relação
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Tolera situações que lhe machucam
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                <b>VERGONHA</b> de si e de sua feminilidade
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Crises de choro
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                <b>NUNCA</b> está <b>SATISFEITA</b> com sigo mesma
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Não se sente merecedora
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                <b>FRUSTRAÇÃO </b>em relacionamentos
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                <b>REPENSA</b> e <b>CRITICA</b> tudo o que faz e fala
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Sente necessidade de agradar a todos
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Sente <b>INSEGURANÇA</b>
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"bold"}>
                ANGÚSTIA
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Se compara constantemente
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
                Tem <b>MEDO</b> de se expor e se arriscar
              </Text>
            </ListItem>
          </UnorderedList>
          <Flex display={{ base: "none", md: "grid" }} justifyContent="center">
            <Img src={img} borderRadius="25px" ml={"25px"} maxH="490px" />
          </Flex>
        </Flex>

        <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
          Estes e outros sentidos são sinais que você está em <b>desconexão</b>{" "}
          com a sua <b>essência</b> e sua <b>totalidade</b>. Vivendo no
          automático e se deixando ser regida por <b>crenças limitantes</b>{" "}
          desconhecidas do seu consciente, em constante <b>auto sabotagem</b>{" "}
          com as suas reais vontades, desejos e objetivos.
        </Text>
        <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
          &nbsp; <b>Juntas</b>, acolheremos a sua totalidade e iniciaremos um
          processo de <b>ressignificação de traumas</b> e quaisquer obstáculos
          que seu inconsciente tenha criado. Alcançaremos valores como{" "}
          <b>AUTOCUIDADO</b>, <b>AMOR PRÓPRIO</b>, <b>AUTORRESPONSABILIDADE</b>,{" "}
          <b>AUTOESTIMA</b> e principalmente possibiliOs atendimentostaremos a
          sua real conexão com sua essência. Estando no controle de sua mente e
          corpo.
        </Text>
        <Text fontSize={{ base: "md", md: "1rem" }} fontWeight={"300"}>
          <u>Será maravilhoso fazer parte disso com você!</u>
        </Text>
        <UnorderedList
          px={{ base: 8, md: 16 }}
          py={3}
          borderRadius={"25px"}
          bgColor={"rgba(250, 226, 214, 0.4)"}
          mx={{ base: 0, md: 24 }}
          mt={5}
        >
          <Text
            fontSize={{ base: "md", md: "1rem" }}
            fontWeight={"300"}
            textAlign="left"
          >
            <a
              href={"/blog/vantagens-terapia-online"}
              style={{ textDecoration: "None" }}
            >
              <button style={{ width: "100%" }}>
                <Text
                  className="text-decoration"
                  color={"rgb(207, 173, 172)"}
                  p={5}
                >
                  Saiba mais sobre as vantagens da Terapia Online!
                </Text>
              </button>
            </a>
          </Text>
        </UnorderedList>
      </Container>
      <Flex w="100%" justifyContent="center" pb="10">
        <WaButton />
      </Flex>
      <MoreAboutMe />
      <Depoiments />
    </>
    // </Flex>
  );
};

export default WomanHealth;
