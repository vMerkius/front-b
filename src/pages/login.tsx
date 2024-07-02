import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import LoginWrapper from "../components/login/login-wrapper";

export default function LoginPage() {
  return (
    <Wrapper>
      <SEOCom title="Login" />

      <Header />

      <main className="main--area">
        <div
          className="area-background"
          style={{ backgroundImage: `url(/assets/img/bg/area_bg01.jpg})` }}
        ></div>
        <LoginWrapper />

        {/* <RoadMapArea /> */}
      </main>

      <Footer />
    </Wrapper>
  );
}
