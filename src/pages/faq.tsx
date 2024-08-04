import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";

import Faq from "../components/faq/faq";
import faq_data from "../data/faq-data";

export default function ContactPage() {
  return (
    <Wrapper>
      <SEOCom title="FaQ" />

      <Header />

      <main className="main--area">
        <BreadcrumbAreaThree title="FaQ" subtitle="FaQ" />

        <Faq faq_data={faq_data} />
      </main>

      <Footer />
    </Wrapper>
  );
}
