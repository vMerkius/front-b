import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import BlogArea from "../components/blog/blog-area";


export default function BlogPage() {
  return (
    <Wrapper>
      <SEOCom title="Expert coaching and elo boosting tips for lol and tft" />
      <Header />
      <main className="main--area">
        <BreadcrumbAreaThree title="Boosters Den Blog" subtitle="lol elo boosting and coaching news & articles" />
        <BlogArea />
      </main>
      <Footer />
    </Wrapper>
  );
}
