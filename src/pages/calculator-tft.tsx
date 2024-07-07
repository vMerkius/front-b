import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import CalcTftWrapper from "../components/calculator-tft/calc-tft-wrapper";

export default function CalculatorTftPage() {
  return (
    <Wrapper>
      <SEOCom title="Calculator" />

      <Header />

      <main className="main--area">
        <BreadcrumbAreaThree title="Tft Calculator" subtitle="Tft Calculator" />

        <CalcTftWrapper />
      </main>

      <Footer />
    </Wrapper>
  );
}
