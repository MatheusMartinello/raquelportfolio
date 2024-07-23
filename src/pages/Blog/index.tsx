import { Box, Container, List, ListItem, Text } from "@chakra-ui/react";
import { useHref, useParams } from "react-router-dom";
import Card from "./component/Card";
import BlogHorrizontal from "./component/Horizontal";
import BlogList from "./component/List";

const Blog = () => {
  const url = useHref({});

  return (
    <Container w="100%" maxW={"100%"} my={"6"}>
      {url === "/blog" ? <BlogList /> : <BlogHorrizontal />}
    </Container>
  );
};

export default Blog;
