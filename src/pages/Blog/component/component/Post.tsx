import {
  CardHeader,
  Container,
  Flex,
  Image,
  Img,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Post = () => {
  const post = [
    {
      id: "o-que-estou-sentindo",
      title: "Medo ou Ansiedade? Como diferenciar?",
      img: "https://i.pinimg.com/564x/69/85/4d/69854dda140eba2ad7b8872b9e5f6798.jpg",
      text: `O medo é focado no presente e geralmente é racional, uma vez que se trata de uma resposta a uma situação ou a um evento ameaçador. A sua emoção é relacionada ao aqui e agora, por exemplo: sua casa está pegando fogo e você sente medo, porém quando o fogo se apaga o seu medo diminui. O fator desencadeante do seu sentimento finalizou, portanto, a sua reação é a mesma. Ele vem de ameaças reais do mundo.
      Já a ansiedade é focada no futuro, e pode facilmente se tornar irracional, pois não está ligada a eventos reais, mas sim da imaginação evocando cenários hipotéticos. Nesse momento você começa a ter sintomas e sentimentos mesmo sem estar em perigo iminente. Podemos identificar como ansiosos os pensamentos negativos que começam com “E se...”. Por exemplo: “E se não gostarem de mim?”, “E se eu tiver uma crise quando chegar la?” e “E se eu bater o carro”.`,
    },
    {
      id: "o-que-acontece",
      title: "O que acontece durante a terapia com uma Psicóloga de Mulheres?",
      img: "https://i.pinimg.com/564x/4c/6c/b0/4c6cb0a5547a6d4b42469584746d78f1.jpg",

      text: `Iniciar o processo de terapia pode ser bastante amedrontador e pode até ser motivo ansiedade para quem desconhece de seu funcionamento. Questionamentos podem surgir “Como deve ser estar nessa situação? Como é? O que acontece?” essas e outras dúvidas que certamente passam pela cabeça de todos. Portanto venho compartilhar com vocês o que acontece em uma sessão com uma Psicóloga de Mulheres e porque é um processo maravilhoso a ser trilhado e vivenciado.
        Durante a terapia, a Psicóloga de Mulheres serve como uma guia e facilitadora para a autocura emocional da paciente. Trabalhamos juntas, tendo uma visão da totalidade da mulher, levando em consideração corpo, mente e campo emocional. Compreendendo o movimento fisiológico, emocional e comportamental de cada fase do ciclo menstrual.
      É feita uma investigação e identificação sobre a causa do seu sofrimento, possibilitando a sua ressignificação de crenças limitantes. A terapeuta a ensina a como gerir emoções, escuta sem julgar, facilita a cicatrização de feridas emocionais, proporciona mudanças positivas em sua vida, acolhe a sua vulnerabilidade e a ensina a acolher a si própria e sua individualidade.
      Ela abraça a mulher em todas as suas dimensões.`,
    },
    {
      id: "vantagens-terapia-online",
      title: "Vantagens da terapia Online",
      img: "https://i.pinimg.com/564x/70/30/a6/7030a6411dec80764e730c01196a6326.jpg",

      text: `Se você tem uma rotina muito corrida, talvez a Terapia Online seja a solução perfeita. Quando precisamos nos deslocar até o consultório, perdemos um tempo no trânsito que poderia ser utilizado de outras formas. Além disso, ela tem os mesmos benefícios de uma terapia presencial, com as vantagens de poder ser realizada de qualquer lugar do mundo, inclusive no conforto da sua casa ou durante uma viagem que está fazendo, e de ser em horários mais flexíveis.
      Ela acontece por meio do Google Meet ou chamadas de vídeo do Whatsapp.
      Tem duração de 50 minutos.`,
    },
  ];
  const { id } = useParams();
  const currentPost = post.find((value) => value.id == id);

  return (
    <Container centerContent maxW="4xl">
      <Flex w="100%" justifyContent={"center"} alignItems={"center"}>
        <Image
          objectFit="cover"
          maxH={{ base: "100%", sm: "600px" }}
          src={currentPost?.img}
          alt="Caffe Latte"
        />
        <Flex flexDir="column" p={5} ml={3}>
          <Text fontWeight={"bold"} fontSize={"3xl"} mb="3">
            {currentPost?.title}
          </Text>
          {currentPost?.text.split("\n").map((value) => (
            <Text
              fontFamily={"Poppins"}
              textAlign="justify"
              mt={1}
              lineHeight={6}
            >
              &nbsp;&nbsp; {value}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Post;
