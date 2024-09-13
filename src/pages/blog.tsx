import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import BlogArea from "../components/blog/blog-area";


export default function BlogPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Blog" />
      {/* seo title */}

      {/* header start */}
      <Header />
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
        <BreadcrumbAreaThree title="BLOG STANDARD" subtitle="BLOG LIST" />
        {/* breadcrumb area end */}

        {/* blog area start */}
        <BlogArea />
        {/* blog area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
}
