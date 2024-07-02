import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import { useEffect, useState } from "react";
import PaymentWrapper from "../components/payments/payment-wrapper";

export default function PaymentPage() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            setStatus("success");
            setMessage("You will receive an email confirmation in a moment.");
        } else if (query.get("canceled")) {
            setStatus("canceled");
            setMessage("We couldn't process the payment.");
        }
    }, []);

  return (
    <Wrapper>
      <SEOCom title="Boosting Payment" />
      <Header />

      <main className="main--area">
        {status === "success" && (
            <BreadcrumbAreaThree title="Thanks for your order" subtitle="Payment Successful" />
        )}

        {status === "canceled" && (
            <BreadcrumbAreaThree title="Order Canceled" subtitle="Whoops something went wrong" />
        )}
      </main>

      <PaymentWrapper message={message} status={status} />

      <Footer />
    </Wrapper>
  );
}
