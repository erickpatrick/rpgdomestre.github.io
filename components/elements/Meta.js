import Head from "next/head";

const DEFAULT_PAGE_TITLE = "RPG do Mestre";
const DEFAULT_PAGE_DESCRIPTION =
  "Onde o mestre cria, reinventa, modifica e publica RPG";

export function getBaseUrl() {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://www.rpgdomestre.com/";
}

const Meta = ({ title, description, keywords }) => {
  const currentTitle = title
    ? `${title} | ${DEFAULT_PAGE_TITLE}`
    : DEFAULT_PAGE_TITLE;

  const currentDescirption = description ?? DEFAULT_PAGE_DESCRIPTION;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="pt-br" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={currentDescirption} />
        <meta name="keywords" content={keywords} />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <base href={getBaseUrl()} />
        <title>{currentTitle}</title>
      </Head>
    </>
  );
};

export default Meta;
