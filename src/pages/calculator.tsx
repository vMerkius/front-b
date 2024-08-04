import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import CalcWrapper from "../components/calculator/calc-wrapper";
import Faq from "./../components/faq/faq";
import Safety from "../components/safety/safety";
import faq_data_2 from "../data/faq-data2";
export default function CalculatorPage() {
  return (
    <Wrapper>
      <SEOCom title="Calculator" />

      <Header />

      <main className="main--area">
        <BreadcrumbAreaThree title="Lol Calculator" subtitle="Lol Calculator" />

        <CalcWrapper />
        <Faq faq_data={faq_data_2} />
        <Safety />
      </main>

      <Footer />
    </Wrapper>
  );
}
