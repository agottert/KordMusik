import React from "react";
import Head from "next/head";
import PlayBreaks from "../components/PlayBrakes.js";
import { CSSTransition } from "react-transition-group";

const VideoIntro = () => (
  <div className="wrapper">
    <video autoPlay muted className="video">
      <source
        src="../static/Video/Kord Music LOGO FULL ANIMATION.mp4"
        type="video/mp4"
      />
    </video>
    {/*language=CSS*/}
    <style jsx>{`
      .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: black;
      }
      .video {
        min-height: 100%;
        width: 100%;
        overflow: hidden;
      }
    `}</style>
    <style jsx global>{`
      body {
        overflow: hidden;
      }
    `}</style>
  </div>
);

export default class KordIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playedVideo: false
    };
    setTimeout(() => {
      this.setState(() => ({
        playedVideo: true
      }));
    }, 3500);
  }

  render() {
    return (
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
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/> 
        </Head>
        <CSSTransition
          in={!this.state.playedVideo}
          timeout={200}
          classNames="animation-fade"
          unmountOnExit
        >
          <VideoIntro />
        </CSSTransition>

        <div className="wrapper">
          <div className="wrapper_header">
            <div>
              <img
                className="pic_logo"
                src="../../static/Images/Kord Music LOGO CHICO.png"
              />
            </div>
            <span className="slogan">FILM SCORING FOR THE WORLD</span>
          </div>
          <div className="wrapper_actions">
            <div className="wrapper_textSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0  510 510"
              >
                <path
                  d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
                  fill="#aaacad"
                  style={{fill: 'black'}}
                />
              </svg>
              <a className="header_tracks" href="#tracks">
                Tracks
              </a>
            </div>
            <div className="wrapper_textSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0  510 510"
                
              >
                <path
                  d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
                  fill="#aaacad"
                  
                  style={{fill: 'black'}}
                />
              </svg>
              <a className="header_contact" href="#contact">
                Contacto
              </a>
            </div>
          </div>
          <div id="about" className="wrapper_about">
          <span className="text_bold text_bold--about">Nosotros</span>
            <div className="wrapper_about--first">
              Somos una productora de música independiente para todo tipo de medios
              audiovisuales. Los servicios que brinda la productora son
              acompañar, conectar, unificar, realzar, dar vida y color a cada
              obra artística. Trabajamos con un equipo que garantiza por sobre
              todo escuchar las ideas de cada creador para asegurar la mejor y
              más original pieza musical.
            </div>
          </div>
          <PlayBreaks />
          {
            <div id="tracks" className="wrapper_tracks">
              <div id="tracks" className="track track_1">
                <iframe
                  className="track_iframe"
                  width="100%"
                  height="200"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/473374122&color=%23f28f4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
              </div>
              <div className="track ">
                <iframe
                  className="track_iframe"
                  width="100%"
                  height="200"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/473371467&color=%23f28f4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
              </div>
              <div className="track">
                <iframe
                  className="track_iframe"
                  width="100%"
                  height="200"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/499988046&color=%23f28f4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
              </div>
              <div className="track">
                <iframe
                  className="track_iframe"
                  width="100%"
                  height="200"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/467282298&color=%23f28f4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
              </div>
              <div className="track">
                <iframe
                  className="track_iframe"
                  width="100%"
                  height="200"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/467280897&color=%23f28f4d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
              </div>
            </div>
          }
          <PlayBreaks />
          <div id="contact" className="wrapper_contact">
            <div className="wrapper_wapp">
              <svg
                className="svg_wapp"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 100 100"
              >
                <path
                  d="M90 43.841c0 24.213-19.779 43.841-44.182 43.841a44.256 44.256 0 0 1-21.357-5.455L0 90l7.975-23.522a43.38 43.38 0 0 1-6.34-22.637C1.635 19.628 21.416 0 45.818 0 70.223 0 90 19.628 90 43.841zM45.818 6.982c-20.484 0-37.146 16.535-37.146 36.859 0 8.065 2.629 15.534 7.076 21.61L11.107 79.14l14.275-4.537A37.122 37.122 0 0 0 45.819 80.7c20.481 0 37.146-16.533 37.146-36.857S66.301 6.982 45.818 6.982zm22.311 46.956c-.273-.447-.994-.717-2.076-1.254-1.084-.537-6.41-3.138-7.4-3.495-.993-.358-1.717-.538-2.438.537-.721 1.076-2.797 3.495-3.43 4.212-.632.719-1.263.809-2.347.271-1.082-.537-4.571-1.673-8.708-5.333-3.219-2.848-5.393-6.364-6.025-7.441-.631-1.075-.066-1.656.475-2.191.488-.482 1.084-1.255 1.625-1.882.543-.628.723-1.075 1.082-1.793.363-.717.182-1.344-.09-1.883-.27-.537-2.438-5.825-3.34-7.977-.902-2.15-1.803-1.792-2.436-1.792-.631 0-1.354-.09-2.076-.09s-1.896.269-2.889 1.344c-.992 1.076-3.789 3.676-3.789 8.963 0 5.288 3.879 10.397 4.422 11.113.541.716 7.49 11.92 18.5 16.223C58.2 65.771 58.2 64.336 60.186 64.156c1.984-.179 6.406-2.599 7.312-5.107.9-2.512.9-4.663.631-5.111z"
                  fill="#fffff"
                />
              </svg>
              <span>+54 9 11 5634-2217</span>
            </div>
            <div className="wrapper_mail">
              <svg
                className="svg_mail"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 382.117 382.117"
                width="60px"
                height="60px"
              >
                <path
                  d="M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41  c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354  c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001  c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987  L62.87,84.397h256.378L191.059,192.987z"
                  fill="#fffff"
                />
              </svg>
              <a className="svg_mail--a" href="mailto:info@kordmusik">
                info@kordmusik.net
              </a>
            </div>
          </div>
          <div className="footer">
            <span>© 2018 KordMusik</span>
          </div>
        </div>
        <style jsx>{`
          .wrapper_tracks {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-auto-rows: 19em;
            grid-auto-flow: dense;
            grid-gap: 3em;
            background-color:black;
            padding: 2.5em 5em;
            border-top: solid 0.5em #f6a15f;
            border-bottom: solid 0.5em #f6a15f;
          }
          .wrapper_about {
            color:white;
            font-size: 2em;
            font-family: "Alegreya Sans";
            line-height: 1.5em;
            padding: 3em 3em 1em 3em;
            text-align: justify;
            font-weight: 300;
            background-color: black;
            border-bottom:solid 0.3em #f6a15f;
            border-top:solid 0.3em #f6a15f;
          }
          .wrapper_about--first {
            margin-bottom: 1em;
            margin-top:1em;
          }
          .wrapper_textSvg{
            display:flex;
            align-items: center;

          }
          .pic_logo {
            width: 40em;
          }
          .text_bold {
            font-weight: bold;
          }
          .text_bold--about{
            font-size:1.5em;
            
          }
          .yellow {
            background-color: yellow;
            height: 6em;
            width: 6em;
          }
          .wrapper_svg--play {
            display: flex;
            justify-content: center;
            margin-bottom: 4em;
            align-items: center;
          }
          .svg_mail,
          .svg_wapp {
            padding-right: 0.5em;
          }
          .svg_mail path:hover {
            fill: #f6a15f;
          }
          .svg_wapp path:hover {
            fill: #f6a15f;
          }

          .lines_play {
            width: 7em;
            border-bottom: solid black 0.2em;
            height: 1em;
          }
          .wrapper_header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: black;
            text-align: center;
            color: white;
            padding-bottom: 1em;
            border-bottom:solid 0.5em #f6a15f;
            border-top:solid 0.5em #f6a15f;
          }
          .svg_play {
            padding-left: 0.5em;
            padding-right: 0.5em;
            padding-top: 1.2em;
          }
          .slogan {
            font-size: 2em;
            font-family: 'Raleway', sans-serif;
            padding-bottom: 1em;
          }
          .wrapper_actions {
            display: flex;
            justify-content: space-evenly;
            font-family: "Alegreya Sans";
            background-color: white;
            align-items: center;
            padding: 2em 7em;
            font-weight: 300;
            line-height: 2.5em;
            
          }

          
          .header_contact,
          .header_tracks {
            text-decoration: none;
            color: black;
            transition: 0.3s;
            font-size: 1.8em;
            transition-timing-function: ease;
            padding-right:0.6em;
          }
          .header_about:hover {
            font-size: 2.5em;
            color: #ec3733;
          }
          .header_tracks:hover {
            font-size: 2.5em;
            color: #58f8ad;
          }
          .header_contact:hover {
            font-size: 2.5em;
            color: #ebd731;
          }
          .wrapper_contact {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 3em;
            padding: 0em 3em 4em;
          }
          .wrapper_wapp,
          .wrapper_mail {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Alegreya Sans";
            color: black;
            font-size: 2em;
          }
          .wrapper_mail a:hover {
            color: #f6a15f;
          }
          .svg_mail--a {
            text-decoration: none;
            color: black;
            text-decoration-style: none;
          }

          .wrapper_wapp span:hover {
            color: #f6a15f;
          }
          .footer {
            background-color: #f6a15f;
            font-family: "Alegreya Sans";
            height: 2em;
            padding-left: 2em;
            font-size: 1.2em;
            display: flex;
            align-items: center;
          }
          @media (max-width: 900px) {
            .wrapper_contact {
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              height: 10em;
            }
            .wrapper_actions {
              padding: 2em 2em;
            }
          }
          @media (max-width: 650px) {
            .pic_logo {
              width: 30em;
            }
            .wrapper_about {
              padding: 2em 2em;
              font-size: 1.2em;
            }
            .wrapper_tracks {
              grid-auto-rows: 16em;
              grid-gap: 0em;
            }
          }
          @media (max-width: 500px) {
            .pic_logo {
              width: 20em;
            }
            .wrapper_about {
              padding: 2em 2em;
              font-size: 1.2em;
            }
            .svg_mail,
            .svg_wapp {
              width: 2.5em;
            }
            .wrapper_about {
              padding-bottom: 0em;
            }
            .footer{
              justify-content: center;
              padding-left:0em;
            }

          }

          @media (max-width: 450px) {
            .wrapper_actions {
              padding: 2em 0em;
            }
            .wrapper_wapp,
            .wrapper_mail {
              font-size: 1.1em;
            }
            .wrapper_contact {
              padding: 0em;
              font-size: 1.1em;
              height: 8em;
            }

            .wrapper_tracks {
              padding: 0em;
            }
            .wrapper_track {
              grid-gap: 0em;
              padding: 0em;
            }
            .wrapper:actions {
              padding: 0em;
            }
            .wrapper_header {
              padding: 2em 0em;
            }
            .wrapper {
              padding: 0em;
            }
            .pic_logo {
              width: 15em;
            }
            .slogan {
              font-size: 1.8em;
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
  }
}
