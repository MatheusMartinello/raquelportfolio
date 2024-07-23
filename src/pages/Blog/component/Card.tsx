import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useHref } from "react-router-dom";

interface CardProps {
  title: string;
  img: string;
  resume: string;
  to: string;
}

const BlogCard = ({ title, img, resume, to }: CardProps) => {
  const url = useHref({});
  return (
    <Link to={to}>
      <Card
        direction={{ base: "column", sm: url === "/blog" ? "row" : "column" }}
        overflow="hidden"
        variant="outline"
        fontFamily={"Poppins"}
        maxW={url === "/blog" ? "100%" : "md"}
        maxH="620px"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          objectFit={"cover"}
          maxW={{ base: "100%", sm: url === "/blog" ? "200px" : "100%" }}
          src={img}
          maxH={url === "/blog" ? "100%" : "300px"}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md" fontSize={"1xl"}>
              {title}
            </Heading>

            <Text
              py="10"
              fontSize={{ base: "sm", md: "1rem" }}
              textAlign="left"
            >
              {resume}
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
};

export default BlogCard;
