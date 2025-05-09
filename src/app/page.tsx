import Objective from "@/components/home/objective";
import Profile from "@/components/home/profile";
import Qualifications from "@/components/home/qualifications";
import RecentWorks from "@/components/home/recent-works";
import TechSkills from "@/components/home/tech-skills";
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
