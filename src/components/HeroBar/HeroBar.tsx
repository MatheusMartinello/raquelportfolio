import { Box, Container, Flex, Img, Text } from "@chakra-ui/react";
import HeroBarImg from "../../assets/raquelPictures/newr.jpeg";
import bgImage from "../../assets/backimage/IMG_6063.jpg";
import CustomButton from "../Button/Button";
import "./style.css";
import { useHref } from "react-router-dom";

interface HeroBarProps {
  title: string;
  subtitle?: string;
}

const HeroBar = ({ title, subtitle }: HeroBarProps) => {
  const url = useHref({});
  const fontSize = new Map([
    ["/", { base: "1.725rem", md: "49px" }],
    ["/terapia-online", { base: "1.725rem", md: "30px" }],
  ]);
  const bgColor = new Map([
    ["/", "transparent"],
    ["/terapia-online", "rgba(250, 226, 214, 0.4)"],
  ]);
  const fontSizeSub = new Map([
    ["/", "1rem"],
    ["/terapia-online", "1rem"],
  ]);
  const fontHeight = new Map([
    ["/", { base: "40px", md: "60px" }],
    ["/terapia-online", { base: "40px", md: "40px" }],
  ]);
  const justify = new Map([
    ["/", { base: "center", md: "center" }],
    ["/terapia-online", { base: "space-evenly", md: "space-evenly" }],
  ]);
  const justifyButton = new Map([
    ["/", { base: "center", md: "flex-start" }],
    ["/terapia-online", { base: "center", md: "center" }],
  ]);

  const marginTop = new Map([
    ["/", { base: 0, md: "30px" }],
    ["/terapia-online", { base: 0, md: "0px" }],
  ]);
  const padding = new Map([
    ["/", { base: "0", md: "210px" }],
    ["/terapia-online", { base: 0, md: "0px" }],
  ]);
  const fontColor = new Map([
    ["/", "#967675"],
    ["/terapia-online", "#000"],
  ]);
  const maxW = new Map([
    ["/", "2xl"],
    ["/terapia-online", "2xl"],
  ]);
  const img = new Map([
    [
      "/",
      "https://i.pinimg.com/750x/3e/48/77/3e487789d87059bf3b9d4bf29798c4a5.jpg",
    ],
    [
      "/terapia-online",
      "https://i.pinimg.com/750x/97/6b/60/976b60169205e3efed32130bbefcbf8c.jpg",
    ],
  ]);

  return (
    <div className="div-com-elipses">
      <Flex
        alignItems={{ base: "", md: "center" }}
        mt={{ base: "1rem", md: "1rem" }}
        justifyContent={justify.get(url)}
        textAlign={{ base: "center", md: "left" }}
        mb={{ base: 10, md: 20 }}
        flexDirection={{ base: "column", md: "unset" }}
        // position="relative"
      >
        {/* <div className="ellipse1"></div>
        <div className="ellipse2"></div> */}
        <Container
          flexDir={"column"}
          justifyContent="center"
          gridGap={{ base: "20px", md: "10px" }}
          mt={marginTop.get(url)}
          maxW={maxW.get(url)}
          p={5}
          borderRadius="25px"
          m={0}
          bgColor={bgColor.get(url)}
        >
          <Text
            fontSize={fontSize.get(url.toString())}
            color="#111111"
            mt={{ base: "9.5px", md: 0 }}
            // pr={{ base: "20px", md: "100px" }}
            fontStyle="normal"
            lineHeight={fontHeight.get(url)}
            fontFamily="Playfair Display"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Box mt={4}>
            {subtitle?.split("\n").map((value, index) => (
              <Text
                fontWeight={300}
                fontSize={fontSizeSub.get(url)}
                color={fontColor.get(url)}
                pr={padding.get(url)}
                mt={2}
                fontFamily="Poppins"
                textAlign={"left"}
                dangerouslySetInnerHTML={{ __html: value }}
                key={index}
              ></Text>
            ))}
          </Box>
          <Box
            mt="25px"
            display={"flex"}
            justifyContent={justifyButton.get(url)}
          >
            {" "}
            <CustomButton
              onClick={() =>
                window.open("https://wa.me/message/D47343AJPSTPG1")
              }
              text="Agende sua sessão"
            />
          </Box>
        </Container>
        <Container
          display={{ base: "flex", md: "contents" }}
          justifyContent={{ base: "center", md: "" }}
          py={{ base: "0", md: "15" }}
          paddingTop={{ base: 0, md: 0 }}
          position={"relative"}
        >
          <Img
            src={img.get(url)}
            w={{ base: "60%", md: "23%" }}
            zIndex={1}
            borderRadius="25px"
          />
          <Img
            src={bgImage}
            zIndex={0}
            width={{ base: "25%", md: "15%" }}
            position={"absolute"}
            top={{ base: "9.7%", md: "45.6%" }}
            right={{ base: "14%", md: "5.25%" }}
            display={{ base: "none", md: url == "/" ? "block" : "none" }}
          />
        </Container>
        {url === "/" ? <></> : null}
      </Flex>
    </div>
  );
};
export default HeroBar;
