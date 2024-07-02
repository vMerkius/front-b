// import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import SEOCom from "../components/seo";
import Footer from "../layout/footer/footer";
import Wrapper from "../layout/wrapper";
import Dashboard from "../components/dashboard/dashboard";

export default function DashboardPage() {
  return (
    <Wrapper>
      <SEOCom title="Dashboard" />
      {/* <Header /> */}

      <main className="main--area">
        {/* <BreadcrumbArea
          title="WELCOME TO BOOSTERS DEN"
          subtitle="USER PANEL"
          bg="/assets/img/bg/breadcrumb_bg03.jpg"
          brd_img="/assets/img/others/breadcrumb_img03.png"
        /> */}

        <Dashboard />
      </main>

      <Footer />
    </Wrapper>
  );
}
