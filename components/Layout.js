import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = props => (
  <div>
    <Head>
      <title>Kordmusik - Film Scoring for the World</title>
      <link
        rel="shortcut icon"
        type="image/png"
        href="../static/Images/kordfavicon.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Satisfy"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Julius+Sans+One"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alegreya+Sans"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alegreya+Sans:300,400"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poiret+One"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script|Poiret+One"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script|Open+Sans+Condensed:300|Poiret+One"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Marvel|Nanum+Pen+Script|Open+Sans+Condensed:300|Poiret+One"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Marvel|Nanum+Pen+Script|Open+Sans+Condensed:300|Poiret+One|Roboto+Condensed"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway"
        rel="stylesheet"
      />
    </Head>
    <div className="wrapper_header">
      <div>
        <Link href="/">
        <img
          className="pic_logo"
          src="../../static/Images/Kord Music LOGO CHICO.png"
        />
      </Link>
      </div>
      <span className="slogan">FILM SCORING FOR THE WORLD</span>
    </div>

    <div>{props.children}</div>

    <style jsx>{`
      .pic_logo {
        width: 40em;
      }
      .wrapper_header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: black;
        text-align: center;
        color: white;
        padding-bottom: 1em;
        border-bottom: solid 0.5em #f6a15f;
        border-top: solid 0.5em #f6a15f;
        cursor:pointer;
      }
      .slogan {
        font-size: 2em;
        font-family: "Raleway", sans-serif;
        padding-bottom: 1em;
      }
      `}</style>

     <style jsx>{`
      @media (max-width: 650px) {
        .pic_logo {
          width: 30em;
        }
      }
      @media (max-width: 500px) {
        .pic_logo {
          width: 20em;
        }
      }
      @media (max-width: 450px) {
        .wrapper_header {
          padding: 0em 0em;
        }

        .pic_logo {
          width: 15em;
        }
        .slogan {
          font-size: 1em;
        }
      }
    `}</style>
    <style jsx global>{`
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      body {
        height: 100%;
      }
      .animation-fade-enter {
        opacity: 0.01;
      }
      .animation-fade-enter-active {
        opacity: 1;
        transition: opacity 200ms ease-in;
      }
      .animation-fade-exit {
        opacity: 1;
      }
      .animation-fade-exit-active {
        opacity: 0.01;
        transition: opacity 200ms ease-in;
      }
    `}</style>
  </div>
);

export default Layout;
