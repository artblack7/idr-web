import "../styles/fonts.css";
import "../styles/core.css";
import "../styles/elements.css";
import "../styles/global.css";
import "../styles/cards.css";
import "../styles/main.css";
import "../styles/blog.css";
import "../styles/extra.css";
import "../styles/slideshow.css";
import "../node_modules/flickity/css/flickity.css";

import React, { useEffect, useState } from 'react';
import type { AppProps } from "next/app";
import TagManager from 'react-gtm-module';

export default function App({ Component, pageProps }: AppProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  return (
      <div className="root">
        <Component {...pageProps} />
      </div>
  );
}
