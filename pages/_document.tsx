import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* TODO switch this to local @next/font */}
        <link rel="stylesheet" href="https://use.typekit.net/eri7ofr.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
