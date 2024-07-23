import { Flex, Grid, Select, Text, Icon, VStack } from "@chakra-ui/react";
import { BenefitsSelector } from "./components/CustomSelector/BenefitsSelector";
import { PaymentSelector } from "./components/CustomSelector/PaymentSelector";
import Selector from "./components/Selector";
const Questions = () => {
  return (
    <Grid
      justifyContent={"center"}
      backgroundColor="#f6ece7"
      pb="20"
      width={"100%"}
      mt={5}
    >
      <Flex justifyContent={"center"}>
        <Text
          fontFamily={"Playfair Display"}
          fontSize={{ base: "3.352rem", md: "5.938rem" }}
          fontWeight={"bold"}
        >
          Perguntas Frequentes
        </Text>
      </Flex>
      <Flex w="100%" flexDir="column" gap={5}>
        <Selector
          title="QUANDO DEVO PROCURAR UM PSICÓLOGO?"
          text="Quando você observar que está passando por alguma dificuldade em compreender seus pensamentos, emoções e sentimentos. A psicoterapia é o caminho para se conhecer melhor, lidar de maneira mais madura e consciente com as emoções e resolver os próprios conflitos e com os outros."
        />
        <BenefitsSelector />
        <Selector
          title="QUANTO TEMPO DURA O TRATAMENTO?"
          text="O processo não tem um tempo definido. Pode variar de acordo com o desenvolvimento emocional da paciente."
        />
        <Selector
          title="ACEITA PLANO DE SAÚDE?"
          text="Atualmente trabalho apenas com atendimento particular."
        />
        <PaymentSelector />
      </Flex>
    </Grid>
  );
};

export default Questions;
