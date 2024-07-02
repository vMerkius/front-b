import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import ContactArea from "../components/contact/contact-area";

export default function ContactPage() {
  return (
    <Wrapper>
      <SEOCom title="Contact us" />

      <Header />

      <main className="main--area">
        <BreadcrumbAreaThree title="Contact us" subtitle="Contact" />

        <ContactArea />
      </main>

      <Footer />
    </Wrapper>
  );
}
