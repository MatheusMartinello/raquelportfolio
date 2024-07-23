import { Container, List, ListItem } from "@chakra-ui/react";
import Card from "./Card";
const BlogList = () => {
  return (
    <Container>
      <List spacing={8}>
        <ListItem>
          <Card
            title={"Vantagens da terapia Online"}
            img={
              "https://i.pinimg.com/564x/70/30/a6/7030a6411dec80764e730c01196a6326.jpg"
            }
            resume={
              "Se você tem uma rotina muito corrida, talvez a Terapia Online seja a solução perfeita. Quando precisamos nos deslocar até o consultório perdemos um tempo no trânsito que poderia ser utilizado de outras formas. Além disso... "
            }
            to="/blog/vantagens-terapia-online"
          />
        </ListItem>
        <ListItem>
          <Card
            title={
              "O que acontece durante a terapia com uma Psicóloga de Mulheres?"
            }
            img={
              "https://i.pinimg.com/564x/4c/6c/b0/4c6cb0a5547a6d4b42469584746d78f1.jpg"
            }
            resume={
              "Iniciar o processo de terapia pode ser bastante amedrontador e pode até ser motivo ansiedade para quem desconhece de seu funcionamento. Questionamentos podem"
            }
            to="/blog/o-que-acontece"
          />
        </ListItem>
        <ListItem>
          <Card
            title={"Medo ou Ansiedade? Como diferenciar?"}
            img={
              "https://i.pinimg.com/564x/69/85/4d/69854dda140eba2ad7b8872b9e5f6798.jpg"
            }
            resume={
              "O medo é focado no presente e geralmente é racional, uma vez que se trata de uma resposta a uma situação ou a um evento ameaçador. A sua emoção é relacionada "
            }
            to="/blog/o-que-estou-sentindo"
          />
        </ListItem>
      </List>
    </Container>
  );
};
export default BlogList;
