import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";

export default function AccVerifiedPage() {
    return (
        <Wrapper>
            <SEOCom title="Account Verified" />
            <Header />

            <main className="main--area">
                <BreadcrumbAreaThree title="Account Verified" subtitle="Account Verification" />
            </main>

            <section className="verified-area">
                <div className="container">
                    <p className="title">You can now login to your account.</p>
                </div>
            </section>

            <Footer />
        </Wrapper>
    );
}
