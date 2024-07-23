import { Box, Flex } from "@chakra-ui/react";
import GridCard from "../../components/Card/GridCard";
import Depositions from "../../components/Depoiments/Depositions";
import DescriptionGrid from "../../components/Description/DescriptionGrid";
import HeroBar from "../../components/HeroBar/HeroBar";
import ImageAndText from "../../components/ImageAndText/ImageAndText";
import MoreAboutMe from "../../components/MoreAboutMe";

const HomePage = () => {
  return (
    <Box px={{ base: 2, md: 5 }}>
      <HeroBar
        title="Conhecer a si mesma é o começo da cura"
        subtitle={`Descubra o caminho para uma vida mais leve e significativa.\nAjudo você a encontrar o equilíbrio e se reconectar com sua essência exercitando o auto cuidado, amor próprio e autoestima em um<b> ambiente seguro </b>e<b> acolhedor</b>.
        Sua jornada para o bem-estar começa aqui!`}
      />
      <GridCard />
      <ImageAndText />

      <MoreAboutMe />
      <Depositions />
      <DescriptionGrid />
    </Box>
  );
};

export default HomePage;
