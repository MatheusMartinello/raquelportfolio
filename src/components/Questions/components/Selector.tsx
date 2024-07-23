import { Flex, Text, Icon, Collapse, Box, Container } from "@chakra-ui/react";
import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";

interface SelectorProps {
  title: string;
  text: string;
}

const Selector = ({ title, text }: SelectorProps) => {
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
          {title}
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
          maxW="958px"
        >
          <Text fontWeight={300} fontSize={{ base: "sm", md: "md" }}>
            {text}
          </Text>
        </Flex>
      </Collapse>
    </Box>
  );
};
export default Selector;
