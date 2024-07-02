import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";

import WorkInProgress from "../components/wip/wip";

export default function WorkInProgressPage() {
  return (
    <Wrapper>
      <SEOCom title="Work in progress" />

      <Header />

      <main className="main--area">
        <BreadcrumbArea title="Work in progress" subtitle="SOON" />
        <WorkInProgress />
      </main>

      <Footer />
    </Wrapper>
  );
}
