import React from "react";
import PlayBreaks from "../components/PlayBrakes.js";
import { CSSTransition } from "react-transition-group";
import Layout from "../components/Layout.js";
import Footer from '../components/Footer'
import Header from '../components/Header';


//let playedVideo = false;

{/*class VideoIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playedVideo,
    };
    setTimeout(() => {
      playedVideo = true;
      this.setState(() => ({
        playedVideo,
      }));
    }, 3500);
  }
  render() {
    return (
      <CSSTransition
        in={!this.state.playedVideo}
        timeout={200}
        classNames="animation-fade"
        unmountOnExit
      >
        <div className="wrapper">
          <video autoPlay muted className="video">
            <source
              src="../static/Video/Kord Music LOGO FULL ANIMATION.mp4"
              type="video/mp4"
            />
          </video>
          
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
      </CSSTransition>
    );
  }
} */}

export default class KordIndex extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Layout>
            <Header tracksRoute='#tracks'/>
            <div id="about" className="wrapper_about">
              <div className="wrapper_about--first">
                <div className="text_bold text_bold--about">De Mi</div>
                <div className='text'>
                    <p>Carolina descubrió su gran placer por la música y especialmente por la música proveniente del cuerpo, a través del canto. 
                    Aunque el camino del canto parecía ser un camino sobre el que transitar, descubriría a muy temprana edad un Nuevo Kamino que le cambiaría su vida por siempre.
                    Así fue que finalizada su adolescencia inició sus estudios formales de canto en prestigiosos Institutos como el Conservatorio Superior de Música Manuel de Falla y el Centro de Altos Estudios Musicales. Mientras que La Enseñanza Iniciática brindada por el psicoanalista e investigador de Culturas Milenarias, José Luis Parise, revolucionaría lo que para ella era conocido hasta ese momento tanto en niveles profesionales como personales.
                    </p>
                    <p>Carolina se forma como Enseñante de La Enseñanza Iniciática en la Escuela E.D.I.P.O. y como maestra de canto con los aportes perfeccionamientos técnicos musicales de reconocidos artistas y profesores como: Graciana Causo, José Luis Sarré, Mirta Arrúa Lichi, Manfred Schwarzkopf, Grace Guajardo, Silvana Tomé.
                    </p>
                    <p>En estos momentos Carolina se encuentra trabajando en producciones audiovisuales del grupo creativo E.O.K. Desarrollándose ella como actriz, música y cantante en la serie animada: El Origen del Universo y como productora musical y cantante en la película Axiomas en la que participan prestigiosas figuras como: Jorge Marrale, César Bordón, Luz Cipriota y Maximiliano Guerra. Con la especial dirección de Marcela Luchetta.</p>
                    <p>También junto a su compañero Manuel Villar Lifac fundaron su propia productora musical Kordmusik, montando su estudio en donde Carolina graba y brinda clases particulares a todos aquellos que quieran hacer del canto una herramienta con la cual acceder al despertar personal a través de la voz propia.
                    </p>            
                    </div>        
                </div>
              </div>
            </Layout>
            </div>
            <Footer/>
          
        
        <style jsx>{`
          .wrapper{
            background-image: url('../static/Images/carobla.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          p{
            margin-bottom: 2em;
          }
          .wrapper_about--first{
            display:flex;
            justify-content: space-between;
          }
          
          .wrapper_about {
            background-color:rgba(192,192,192,0.3);
            font-size: 1.2em;
            font-family: "Roboto";
            line-height: 2em;
            font-weight: 300;
          }
          .text {
            text-align: right;
            padding:2em;
            color:white;
            width:50%;
          }
          .text_bold {
            font-weight: bold;
          }
          .text_bold--about {
            font-size: 2em;
            margin:1em 2em;
            color:white;
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

          }
          
          
          
          
          
          
        `}</style>
        <style jsx>{`
        @media (max-width: 900px) {
          .wrapper_about--first{
              flex-direction:column;
            }
          .text_bold--about{
            margin:0em;
            padding-top:1em;
            padding-left:0.5em;
          }
          .text{
            width:90%;
            margin: 0em 1em;
            text-align:left;
            padding:1em;
          }

        }
          @media (max-width: 650px) {
            .wrapper_about {
              padding: 1em;
              font-size: 1.2em;
            }
            .wrapper_tracks {
              grid-auto-rows: 16em;
              grid-gap: 0em;
            }
            .text{
              margin:0em;
              padding:1em;
            }
           
          }
          @media (max-width: 500px) {
            .wrapper_about {
              padding: 1em;
              font-size: 1.2em;
            }
            .wrapper_about {
              padding-bottom: 0em;
            }
          }
          @media (max-width: 450px) {
           
            .wrapper_tracks, .wrapper_track,  {
              padding: 0em;
            }
            .wrapper_track {
              grid-gap: 0em;
            }
            .wrapper:actions, .wrapper {
              padding: 0em;
            }
          }`}</style>
      </div>
    );
  }
}
