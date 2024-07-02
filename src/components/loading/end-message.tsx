type EndMessageProps = {
  description: string;
};

const EndMessage: React.FC<EndMessageProps> = ({ description }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#fff",
          margin: "0",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default EndMessage;
