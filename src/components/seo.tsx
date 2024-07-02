import { Helmet } from "react-helmet-async";

// prop type
type IProps = {
  title: string;
};
const SEOCom = ({ title }: IProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} - BoostersDEN` : "BoostersDEN"}</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="BoostersDEN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
  );
};

export default SEOCom;
