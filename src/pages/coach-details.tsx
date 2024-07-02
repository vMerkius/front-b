import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import CoachDetailsWrapper from "../components/coach-details/coach-details-wrapper";

export default function CoachDetailsPage() {
  return (
    <Wrapper>
      <SEOCom title="Coach Details" />

      <Header />

      <main className="main--area">
        {/* <BreadcrumbAreaThree title="Coach Details" subtitle="Coach Details" /> */}

        <CoachDetailsWrapper />
      </main>

      <Footer />
    </Wrapper>
  );
}
