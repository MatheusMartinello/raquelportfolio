import { Box, Flex, Text, Icon, Collapse } from "@chakra-ui/react";
import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";

export function PaymentSelector() {
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
          COMO É FEITO O PAGAMENTO?
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
          <Text fontWeight={300} fontSize={{ base: "md", md: "1rem" }}>
            O pagamento deve ser feito antecipado através de PIX ou
            transferência bancária nos seguintes formatos:
          </Text>
          <Text fontWeight={300} fontSize={{ base: "md", md: "1rem" }}>
            - Por sessão
          </Text>
          <Text fontWeight={300} fontSize={{ base: "md", md: "1rem" }}>
            - Pacote de 4 sessões
          </Text>
          <Text fontWeight={300} fontSize={{ base: "md", md: "1rem" }}>
            Para mais detalhes entre em contato.
          </Text>
        </Flex>
      </Collapse>
    </Box>
  );
}
