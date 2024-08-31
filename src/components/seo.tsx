import { Helmet } from "react-helmet-async";

// prop type
type IProps = {
  title: string;
};
const SEOCom = ({ title }: IProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} - Boosters Den` : "Boosters Den"}</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="Boosters Den" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
  );
};

export default SEOCom;
