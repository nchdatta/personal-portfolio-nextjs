import HireMe from "@/components/pages/hire/hire-me";
import Container from "@/components/shared/container";
import hireMeData from "@/data/hireme.json" assert { type: "json" };
import { HireMeDetail } from "@/services/types";

const HireMePage = () => {
  const data = hireMeData as HireMeDetail[];
  return (
    <Container>
      <HireMe data={data} />
    </Container>
  );
};

export default HireMePage;
