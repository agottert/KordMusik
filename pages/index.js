import React from "react";
import PlayBreaks from "../components/PlayBrakes.js";
import { CSSTransition } from "react-transition-group";
import Layout from "../components/Layout.js";
import Footer from '../components/Footer'

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
        <CSSTransition
          in={!this.state.playedVideo}
          timeout={200}
          classNames="animation-fade"
          unmountOnExit
        >
          <VideoIntro />
        </CSSTransition>

        <div className="wrapper">
          <Layout>
            <div className="wrapper_total--actions">
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
                    style={{ fill: "black" }}
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
                    style={{ fill: "black" }}
                  />
                </svg>
                <a className="header_bio" href="#contact">
                  Bio
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
                    style={{ fill: "black" }}
                  />
                </svg>
                <a className="header_contact" href="#contact">
                  Contacto
                </a>
              </div>
            </div>
            </div>
            <div id="about" className="wrapper_about">
              <span className="text_bold text_bold--about">Nosotros</span>
              <div className="wrapper_about--first">
                Somos una productora de música independiente para todo tipo de
                medios audiovisuales. Los servicios que brinda la productora son
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
            <Footer/>
          </Layout>
        </div>
        <style jsx>{`
          .wrapper_tracks {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-auto-rows: 19em;
            grid-auto-flow: dense;
            grid-gap: 3em;
            background-color: black;
            padding: 2.5em 5em;
            border-top: solid 0.5em #f6a15f;
            border-bottom: solid 0.5em #f6a15f;
          }
          .wrapper_about {
            color: white;
            font-size: 2em;
            font-family: "Alegreya Sans";
            line-height: 1.5em;
            padding: 3em 3em 1em 3em;
            text-align: justify;
            font-weight: 300;
            background-color: black;
            border-bottom: solid 0.3em #f6a15f;
            border-top: solid 0.3em #f6a15f;
          }
          .wrapper_about--first {
            margin-bottom: 1em;
            margin-top: 1em;
          }
          .wrapper_textSvg {
            display: flex;
            align-items: center;
          }
          .pic_logo {
            width: 40em;
          }
          .text_bold {
            font-weight: bold;
          }
          .text_bold--about {
            font-size: 1.5em;
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
            border-bottom: solid 0.5em #f6a15f;
            border-top: solid 0.5em #f6a15f;
          }
          .svg_play {
            padding-left: 0.5em;
            padding-right: 0.5em;
            padding-top: 1.2em;
          }
          .slogan {
            font-size: 2em;
            font-family: "Raleway", sans-serif;
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

          .header_bio,
          .header_contact,
          .header_tracks {
            text-decoration: none;
            color: black;
            transition: 0.3s;
            font-size: 1.8em;
            transition-timing-function: ease;
            padding-right: 0.6em;
          }
          .header_bio:hover {
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
          
          .wrapper_total--actions{
              display:flex;
              justify-content: center;
              align-items:center;
            }
          @media (max-width: 900px) {
            
            .wrapper_actions {
              padding: 2em 2em;
            }
          }
          @media (max-width: 650px) {
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
            .wrapper_about {
              padding: 2em 2em;
              font-size: 1.2em;
            }
            .wrapper_about {
              padding-bottom: 0em;
            }
          }
          @media (max-width: 450px) {
            .wrapper_actions {
              padding: 2em 0em;
            }
            .wrapper_tracks, .wrapper_track,  {
              padding: 0em;
            }
            .wrapper_track {
              grid-gap: 0em;
            }
            .wrapper:actions, .wrapper {
              padding: 0em;
            }
          }
          @media (max-width: 450px) {
            .wrapper_actions{
              display:flex;
              flex-direction:column;
              justify-content: center;
              align-items:flex-start;
              width:10em;
            }
          }
        `}</style>
      </div>
    );
  }
}
