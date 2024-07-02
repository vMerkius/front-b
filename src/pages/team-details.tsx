import Wrapper from "../layout/wrapper";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import TeamInfoArea from "../components/team/team-info-area";
import TeamDetailsArea from "../components/team/team-details-area";
import VideoArea from "../components/video/video-area";
import TeamArea from "../components/team/team-area";
import SEOCom from "../components/seo";

export default function TeamDetailsPage() {
  return (
    <Wrapper>
      <SEOCom title="Team Details" />

      <Header />

      <main className="main--area">
        <BreadcrumbArea
          title="SHAKH DANIAL"
          subtitle="TEAM DETAILS"
          bg="/assets/img/bg/breadcrumb_bg01.jpg"
          brd_img="/assets/img/team/breadcrumb_team.png"
        />

        <TeamInfoArea />

        <TeamDetailsArea />

        <VideoArea />

        <TeamArea />
      </main>

      <Footer />
    </Wrapper>
  );
}
