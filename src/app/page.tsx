import Experience from "@/components/pages/home/experience";
import Objective from "@/components/pages/home/objective";
import Profile from "@/components/pages/home/profile";
import Qualifications from "@/components/pages/home/qualifications";
import RecentWorks from "@/components/pages/home/recent-works";
import TechSkills from "@/components/pages/home/tech-skills";
import Container from "@/components/shared/container";
import homeData from "@/data/homepage.json" assert { type: "json" };
import { type HomePage } from "@/services/types";

const Home = async () => {
  const {
    profile,
    objective,
    qualifications,
    techSkills,
    recentWorks,
    experiences,
  } = homeData as HomePage;

  return (
    <Container className="flex-1">
      <Profile profile={profile} />
      <Objective objective={objective} />
      <Experience experiences={experiences} />
      <TechSkills techSkills={techSkills} />
      <RecentWorks recentWorks={recentWorks} />
      <Qualifications qualifications={qualifications} />
    </Container>
  );
};

export default Home;
