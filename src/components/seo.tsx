import { Helmet } from "react-helmet-async";
// prop type
type IProps = {
  title: string;
  description?: string;
};
const SEOCom = ({ title, description = "Boosters Den" }: IProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} - Boosters Den` : "Boosters Den"}</title>
      <meta name="robots" content="index, follow" />
      <meta name="description" content="Boosters Den" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:title" content={title || "Boosters Den"} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Boosters Den"} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEOCom;
