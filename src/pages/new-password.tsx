import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import NewPasswordWrapper from "../components/login/new-password-wrapper";
import { useParams } from "react-router-dom";

export default function NewPasswordPage() {
  const { resetToken } = useParams();
  const resetTokenString = resetToken?.toString() ?? '';
  
  return (
    <Wrapper>
      <SEOCom title="New Password" />

      <Header />

      <main className="main--area">
        <div
          className="area-background"
          style={{ backgroundImage: `url(/assets/img/bg/area_bg01.jpg})` }}
        ></div>
        <NewPasswordWrapper resetToken={resetTokenString} />
      </main>

      <Footer />
    </Wrapper>
  );
}