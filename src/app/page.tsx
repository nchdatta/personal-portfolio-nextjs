import Certifications from "@/components/pages/home/certifications";
import Experience from "@/components/pages/home/experience";
import Objective from "@/components/pages/home/objective";
import Profile from "@/components/pages/home/profile";
import Qualifications from "@/components/pages/home/qualifications";
import RecentWorks from "@/components/pages/home/recent-works";
import TechSkills from "@/components/pages/home/tech-skills";
import Container from "@/components/shared/container";

const Home = async () => {
  return (
    <Container className="flex-1">
      <Profile />
      <Objective />
      <Experience />
      <TechSkills />
      <RecentWorks />
      <Qualifications />
      <Certifications />
    </Container>
  );
};

export default Home;
