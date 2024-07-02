import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import CoachingWrapper from "../components/coaching/coaching-wrapper";

export default function CoachingPage() {
  return (
    <Wrapper>
      <SEOCom title="Coaching" />

      <Header />

      <main className="main--area">
        <BreadcrumbAreaThree title="Coaching" subtitle="Coaching" />

        <CoachingWrapper />
      </main>

      <Footer />
    </Wrapper>
  );
}
