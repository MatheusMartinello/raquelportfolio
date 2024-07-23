import {
  Box,
  Flex,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import Health from "./component/Health";
import Start from "./component/Start";
import Testemonium from "./component/Testemonium";
import { RxHamburgerMenu } from "react-icons/rx";
import "./styles.css";
import BlogNav from "./component/BlogNav";
const MenuItens = () => {
  const MenuItensLowWidth = [
    { element: <Start />, key: 1 },
    { element: <AboutMe />, key: 2 },
    { element: <Health />, key: 6 },

    // {
    //   element: <LinkTo title="Arteterapia" to="/arteterapia" />,
    //   key: 3,
    // },

    { element: <BlogNav />, key: 7 },
    { element: <Testemonium />, key: 8 },
    { element: <Contact />, key: 9 },
  ];
  const MenuItens = [
    { element: <Start />, key: 1 },
    { element: <AboutMe />, key: 2 },
    { element: <Health />, key: 3 },

    // { element: <Services />, key: 4 },
    { element: <Testemonium />, key: 5 },
    { element: <BlogNav />, key: 6 },
    { element: <Contact />, key: 7 },
  ];
  return (
    <>
      <Show below="sm">
        <Box position="absolute" top={"5px"} left={"9px"}>
          <Menu flip>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<RxHamburgerMenu />}
              variant="outline"
              border={"0px solid"}
            />
            <MenuList>
              {MenuItensLowWidth.map((item) => (
                <MenuItem key={item.key}>{item.element}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Show>
      <Hide below="sm">
        <Flex
          direction={"row"}
          justifyContent="space-between"
          mt="1.563rem"
          zIndex={1000}
        >
          {MenuItens.map((item) => {
            return <div key={item.key}>{item.element} </div>;
          })}
        </Flex>
      </Hide>
    </>
  );
};
export default MenuItens;
