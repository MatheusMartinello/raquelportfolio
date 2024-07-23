import { Box, Container, Grid, Img, Text } from "@chakra-ui/react";
import Eclipse from "../../assets/eclipse/Decoration.svg";
import MenuItens from "./component/MenuItens";

const NavBar = () => {
  return (
    <nav>
      <Box
        border={"1px solid #EDEDED"}
        width="100%"
        pt={8}
        pb={{ base: 1, md: 4 }}
      >
        <Container maxW="1000px" display={"revert"}>
          <Grid alignItems={"center"} justifyContent="center">
            <Img src={Eclipse} p={0} m={"auto"} />
            <Text
              fontWeight={400}
              fontSize={{ base: "1.245rem", md: "3rem" }}
              color="#111111"
            >
              Raquel Teodorovicz
            </Text>
            <Text
              color={"#9D8888"}
              fontFamily="Poppins"
              fontWeight={"300"}
              fontSize="1rem"
              mt={{ base: "0", md: "-10px" }}
            >
              Psicóloga Clínica | CRP 08/32533
            </Text>
          </Grid>
          <MenuItens />
        </Container>
      </Box>
    </nav>
  );
};
export default NavBar;
