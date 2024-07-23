import { Box, Flex, Text, Icon, Collapse } from "@chakra-ui/react";
import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
export function BenefitsSelector() {
  const [isOpen, setIsOpen] = React.useState(false);
  const visible = !isOpen ? "hidden" : "visible";
  const opacity = !isOpen ? "0" : "1";
  return (
    <Box px={3}>
      <Flex
        border={"solid 1px black"}
        py="3"
        px="5"
        borderRadius={10}
        alignItems="center"
        justifyContent={"space-between"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text
          fontFamily={"Poppins"}
          fontSize={{ base: "sm", md: "md" }}
          fontWeight={"light"}
        >
          QUAL OS BENEFÍCIOS DA TERAPIA ONLINE?
        </Text>
        <Icon children={<BiDownArrowAlt size={"22px"} />} />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          borderBottom={"solid black 1px"}
          borderLeft={"solid black 1px"}
          borderRight={"solid black 1px"}
          py="3"
          px="5"
          visibility={visible}
          opacity={opacity}
          borderRadius={10}
          mt="-1px"
          transition={"opacity 0.5s ease-in"}
          fontFamily="Poppins"
          textAlign={"left"}
          flexDir="column"
          maxW="958px"
          gap="10px"
          fontWeight={300}
          fontSize={{ base: "sm", md: "md" }}
        >
          <Text fontWeight={300} fontSize={{ base: "sm", md: "1rem" }}>
            Essa modalidade de intervenção ajuda pessoas que possuem uma rotina
            cheia, expedientes diferenciados, estudantes, idosos e profissionais
            da área da saúde, além de não demandar o deslocamento os horários
            são mais flexíveis.
          </Text>
          <Text fontWeight={300} fontSize={{ base: "sm", md: "1rem" }}>
            - Em caso de viagem, condição de saúde que não permite que o cliente
            saia de casa e até mudança de país, ainda é possível realizar as
            sessões. É muito útil para quem mora em cidades pequenas e áreas
            rurais, onde não há muitos profissionais disponíveis ou o
            deslocamento é limitado.
          </Text>
        </Flex>
      </Collapse>
    </Box>
  );
}
