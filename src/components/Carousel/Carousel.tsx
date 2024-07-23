import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { AiOutlineHeart } from "react-icons/ai";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import "./style.css";
// Settings for the slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    {
      text: `A Raquel é um ser iluminado, uma profissional assertiva, dedicada, humana.No primeiro contato com ela eu tinha certeza de ter encontrado a pessoa certa... A forma como ela expõe as nossas fraquezas, e enaltece nossos pontos positivos, é direta, clara, honesta, dignas de uma profissional humana, de fato preocupada com os pacientes, isso faz com que enxerguemos com muita facilidade, e transforma nossa caminhada rumo à cura da nossa alma, muito mais leve, por mais difícil que seja a situação. Agradeço muito a Deus por ter cruzado nossos caminhos e que assim permaneça por muito tempo, afinal amizade, carinho, afeto e cuidado, nunca são demais, e ela tem de sobra para oferecer.`,
      title: "K.C.",
    },
    {
      text: `Sinceramente, a terapia pra mim é uma luz nos meus pensamentos inexplorados ou até mesmo a calmaria no mar agitado. Comecei a fazer terapia porque me via ansiosa o tempo inteiro e queria mudar isso, a Raquel é uma profissional extremamente dedicada e atenciosa aos pacientes, que sempre se preocupou muito comigo, tenho muita gratidão por ela ter me ajudado a ter um pouco mais de equilíbrio emocional. Me culpabilizava muito pelas coisas, mesmo quando não eram do meu controle, hoje já tenho uma percepção muito melhor sobre isso e consigo “trazer pra consciência” (frase que ela fala constantemente). Percebi que tinha tantas concepções deturpadas sobre mim, que me limitavam de fazer coisas comuns do dia a dia e de acordo com a sessões, a Raquel foi me ajudando a compreendê-los, trazendo mais autoconhecimento para minha vida.`,
      title: "L.C.",
    },
    {
      text: `A terapia pede um local seguro e confortável que a Raquel sempre conseguiu me proporcionar, mesmo com nossas sessões sendo online. Profissional responsável e comprometida, a experiência das nossas sessões tem sido verdadeiramente engrandecedora na minha jornada de auto-conhecimento e só tenho a agradecer por toda dedicação e cuidado.`,
      title: "L.S.",
    },
    {
      text: `Olá, gostaria de expressar aqui minha gratidão a profissional Raquel...ou melhor ao ser humano Raquel. Dra. Raquel entrou em minha vida após um procedimento cirúrgico realizado em abril/22. No começo pensei...meu Deus...uma menina. Como será? Menina só na aparência. Que profissional. Posso dizer com toda certeza, que ela me ajudou a mudar minha vida para melhor. Cada terapia uma alegria e um aprendizado. Obrigada pelo seu comprometimento, sua delicadeza e firmeza quando necessário.`,
      title: `D.L.`,
    },
    {
      text: `A Dra Raquel foi uma sorte que chegou em meio ao caos. Desde a primeira consulta, me passou a confiança para poder seguir meu processo de aprendizado, descobertas, desafios, etc. Agradeço imensamente todas as consultas, todas a as palavras que me ajudou a entender e criar as estratégias para que conseguisse ter uma qualidade de vida melhor. Só tenho a agradecer e parabenizar seu trabalho, pois você é muito mais que a psicóloga, é a esperança de dias melhores. 💓🙏🏽👏🏼`,
      title: "F.M.",
    },
    {
      text: ` Através da terapia venho (re)conhecendo um Eu, que sempre esteve aqui e hoje está sendo aflorado. A Raquel vem sendo imprescindível neste processo de autoconhecimento, sempre atenciosa, acolhedora e solicita. Agradeço muito por ter me ajudado até o momento e pelo auxílio que ainda dará no meu processo.`,
      title: "I.A.",
    },
  ];

  return (
    <Box mt="75px" w="100%">
      <Flex alignItems={"center"} position={"relative"}>
        <hr />
        <div
          style={{
            position: "absolute",
            zIndex: -1,
            right: "407px",
          }}
        >
          <Text
            fontSize={"110px"}
            fontWeight="700"
            fontFamily={"Playfair Display"}
            color="#efefef"
          >
            Depoimentos
          </Text>
        </div>

        <Text
          fontFamily={"Playfair Display"}
          fontWeight="900"
          fontSize={36.85}
          // lineHeight="49.12"
          textAlign={"center"}
        >
          Depoimentos
        </Text>
        <hr />
      </Flex>
      <Container position={"relative"} height={"600px"} mt={"35px"}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <div className="ellipse3"></div>
        <div className="ellipse4"></div>
        <IconButton
          aria-label="right-arrow"
          colorScheme="gray"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="gray"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((item) => (
            <>
              <Box
                textAlign={"left"}
                fontFamily="Poppins"
                fontWeight={400}
                fontSize={{ base: "sm", md: "lg" }}
                bgColor="#f8f9fabf"
                borderRadius={"25px"}
                p={2}
                py={5}
              >
                <Text fontSize={{ base: "sm", md: "lg" }}>{item.text}</Text>
              </Box>
              <Flex
                justifyContent={{ base: "center", md: "flex-start" }}
                alignItems={"center"}
                mt={{ base: "0px", md: "30px" }}
                w={"100%"}
              >
                <AiOutlineHeart
                  color="rgb(220 220 234)"
                  style={{ marginRight: "10px" }}
                />
                <Text alignItems={"center"} justifyContent="center">
                  {item.title}
                </Text>
              </Flex>
            </>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
