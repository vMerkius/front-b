
type PaymentWrapperProps = {
  message: string;
  status: string;
};

const PaymentWrapper: React.FC<PaymentWrapperProps> = ({ message, status }) => {
  return ( 
    <section className="payment-area">
      <div className="container">
        <p className="title">{message}</p>
        {status === "success" && <p className="subtitle">Sit back and relax, we'll take care of the rest.</p>}
        {status === "canceled" && <p className="subtitle">Choose your service and please try again later.</p>}
      </div>
    </section>
    );
};

export default PaymentWrapper;
