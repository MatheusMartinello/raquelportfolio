import { Box, Button, Text } from "@chakra-ui/react";

interface LearnMoreProps {
  onClick: void;
}

const LearnMore = () => {
  return (
    <Box mt="3">
      <Button
        bgColor={"#f6ece7"}
        fontSize={{ base: "sm", md: "md" }}
        fontFamily="Poppins"
        alignItems="center"
        color="#9D8888"
        colorScheme={"none"}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <Text
          fontSize={{ base: "sm", md: "md" }}
          display="flex"
          alignItems={"center"}
        >
          <i
            style={{
              border: "solid #9D8888",
              borderWidth: "0 3px 3px 0",
              display: "inline-block",
              padding: "3px",
              transform: "rotate(-45deg)",
              WebkitTransform: "rotate(-45deg)",
              marginRight: "5px",
              marginBottom: "2px",
            }}
          ></i>
          Saiba mais
        </Text>
      </Button>
    </Box>
  );
};

export default LearnMore;
