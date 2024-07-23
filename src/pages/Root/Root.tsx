import GridCard from "../../components/Card/GridCard";
import Depositions from "../../components/Depoiments/Depositions";
import DescriptionGrid from "../../components/Description/DescriptionGrid";
import HeroBar from "../../components/HeroBar/HeroBar";
import ImageAndText from "../../components/ImageAndText/ImageAndText";

const Root = () => {
  return (
    <>
      <HeroBar
        title="Conhecer a si mesma é o começo da cura"
        subtitle="Guio meus pacientes a se reconectarem com sua essência exercitando o auto
            cuidado, amor próprio, autoestima e confiança"
      />
      <GridCard />
      <DescriptionGrid />
      <ImageAndText />
      <Depositions />
    </>
  );
};

export default Root;
