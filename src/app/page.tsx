import Objective from "@/components/pages/home/objective";
import Profile from "@/components/pages/home/profile";
import Qualifications from "@/components/pages/home/qualifications";
import RecentWorks from "@/components/pages/home/recent-works";
import TechSkills from "@/components/pages/home/tech-skills";
import Container from "@/components/shared/container";

const Home = () => {
  return (
    <Container className="flex-1">
      <Profile />
      <Objective />
      <Qualifications />
      <TechSkills />
      <RecentWorks />
    </Container>
  );
};

export default Home;
