import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style global jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
