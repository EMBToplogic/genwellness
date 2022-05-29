import Head from "next/head";
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width'></meta>
      <meta name='description' content={description}></meta>
      <meta charset='utf-8'></meta>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Generali - Road to Wellness 2022",
  description: "Keep up to date with the latest web dev news",
};

export default Meta;
