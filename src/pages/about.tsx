import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import AboutAreaThree from "../components/about-area/about-area-3";
import ServicesArea from "../components/services/services-area";
import TeamArea from "../components/team/team-area";
import AboutTeam from "../components/about-team/about-team";

export default function AboutPage() {
  return (
    <Wrapper>
      <SEOCom title="About" />

      <Header />

      <main className="main--area">
        <BreadcrumbArea title="ABOUT US" subtitle="ABOUT US" />

        <AboutAreaThree />

        <ServicesArea />

        <TeamArea />
        <AboutTeam />
      </main>

      <Footer />
    </Wrapper>
  );
}
