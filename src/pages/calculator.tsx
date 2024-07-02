import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import CalcWrapper from "../components/calculator/calc-wrapper";

export default function CalculatorPage() {
  return (
    <Wrapper>
      <SEOCom title="Calculator" />

      <Header />

      <main className="main--area">
        <BreadcrumbAreaThree
          title="Rank Calculator"
          subtitle="Rank Calculator"
        />

        <CalcWrapper />
      </main>

      <Footer />
    </Wrapper>
  );
}
