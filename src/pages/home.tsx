import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import HeroBannerTwo from "../components/hero-banner/hero-banner-2";
// import AboutAreaTwo from "../components/about-area/about-area-2";
// import StreamersArea from "../components/streamers/streamers-area";
// import FooterTwo from "../layout/footer/footer-2";
import CardsContainer from "../components/cards/cards-container";
import VideoArea from "../components/video/video-area";
import GalleryArea from "../components/gallery/gallery-area";
import RoadMapArea from "../components/road-map/road-map-area";
import TeamArea from "../components/team/team-area";
import Footer from "../layout/footer/footer";
import Safety from "../components/safety/safety";
import AboutTeam from "../components/about-team/about-team";

export default function Home() {
  return (
    <Wrapper>
      <SEOCom title="Boosting and Coaching" />

      <Header style_2={true} />

      <main className="main--area">
        <HeroBannerTwo />
        <CardsContainer />
        <Safety />
        <VideoArea />
        <RoadMapArea />

        <TeamArea />
        <AboutTeam />

        <div
          className="area-background"
          style={{ backgroundImage: `url(/assets/img/bg/area_bg01.jpg})` }}
        >
          <GalleryArea />
        </div>

        {/* <div
          className="area-background"
          style={{ backgroundImage: `url(/assets/img/bg/area_bg02.jpg)` }}
        >
          <AboutAreaTwo />

          <StreamersArea />
        </div> */}

        {/* <ProjectArea />

        <SocialArea />

        <BrandArea /> */}
      </main>

      {/* <FooterTwo /> */}
      <Footer />
    </Wrapper>
  );
}
