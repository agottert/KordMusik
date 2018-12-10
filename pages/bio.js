import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCaroText: false,
      showManuText: false,
      showPics: true
    };

    this.showCaroInfo = this.showCaroInfo.bind(this);
    this.showManuInfo = this.showManuInfo.bind(this);
    this.showCaroManuPics = this.showCaroManuPics.bind(this);
  }
  showCaroInfo() {
    this.setState({
      showCaroText: true,
      showPics: false
    });
  }
  showManuInfo() {
    this.setState({
      showManuText: true,
      showPics: false
    });
  }
  showCaroManuPics() {
    this.setState({
      showCaroText: false,
      showManuText: false
    });
  }

  render() {
    if (this.state.showCaroText) {
      return (
        <div>
          <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Alegreya+Sans"
              rel="stylesheet"
            />
          </Head>
          <Layout>
            <div className="title_caro">
              <div className="wrapper_caro--circular">
                <img
                  className="caro_circular"
                  src="../static/Images/caroCircular.png"
                />
              </div>
              <div className="wrapper_title--caro">
                <h2>Carolina Göttert</h2>
                <h3>Productora y Directora Ejecutiva</h3>
              </div>
            </div>
            <div className="wrapper_text">
              <div>
                <p>
                  Directora ejecutiva del documental “Enseñanza Pachacutek” de
                  Damián Chiapella, basado en la obra del investigador y
                  conferencista José Luis Parise.
                </p>
                <p>
                  Posee una extensa formación en Psicoanálisis integrado el
                  estudio de las culturas originarias dictada por el reconocido
                  investigador José Luis Parise, con quien ha realizado viajes
                  internacionales como por ejemplo a la República Árabe de
                  Egipto y también a Barcelona para la presentación del libro
                  “Anécdotas de Magia Iniciática”.
                </p>
                <p>
                  Lanzó su single solista “Te Invito” el cual grabó con el
                  reconocido violoncellista Patricio Villarejo, a través del
                  sello discográfico Poley Records del productor Osi Tejerina
                  actualmente asociado a Warner Chappell.
                </p>
                <p>
                  Ganó el concurso de Broadway Experience recibiendo una beca
                  para su formación como cantante profesional en New York en
                  Flux Studios NYC.
                </p>
                <p>
                  Ha participado como vocalista en los álbumes “EP”, “La
                  Brújula” y “Que el viaje en canoa te oriente” (en el que han
                  participado musicos tales como Litto Nebbia, Marcelo
                  Moguilevsky y Ricardo Tapia) de la agrupación Kanu, conformada
                  por Alejo Nóbili y Eliana De Piero.
                </p>
                <p>
                  Ha participado como pianista, percusionista y vocalista en la
                  grabación del álbum homónimo de la agrupación de World Music
                  Kunturi Ensamble, en el que ha registrado su single “Nuevo
                  Tiempo”.
                </p>
                <p>
                  Ha sido vocalista en el disco “Más allá del tiempo” del autor
                  Carlos Rodas. • Participó como vocalista en el disco “Galaxia
                  Social” de Julieta Barreyro que ha sido presentado en
                  escenario importantes de Buenos Aires tales como The Roxy y
                  Hard Rock Café.
                </p>
                <p>
                  Se ha formado como cantante lírica en el Conservatorio Manuel
                  de Falla. • Ha estudiado Artes Multimediales en la Universidad
                  Nacional de las Artes.
                </p>
              </div>

              <svg
                className="svg_return"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0  510 510"
                width="80"
                height="80"
                onClick={this.showCaroManuPics}
              >
                <path
                  d="M437.02 74.98C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.98C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.98C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z"
                  fill="rgb(246, 161, 95)"
                />
                <path
                  d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
                  fill="#fffff"
                />
              </svg>
            </div>
          </Layout>

          <style jsx>{`
            .wrapper_text {
              padding: 0em 4em;
              font-size: 1.8em;
              font-family: "Alegreya Sans";
              line-height: 1.5em;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            p::before {
              content: "▶";
              font-size: 0.7em;
              color: rgb(246, 161, 95);
              padding-right: 5px;
            }
            .svg_return {
              margin: 2em 3em;
              cursor: pointer;
              overflow: hidden;
              transition: ease-in;
              transition-property: background-color;
              border-radius: 50%;
              transform: rotate(180deg);
            }
            .title_caro {
              display: flex;
              padding-top: 2em;
              padding-left: 5em;
              padding-right: 5em;
              font-family: "Alegreya Sans";
              align-items: center;
            }
            .wrapper_title--caro {
              margin-left: 2em;
            }
            .svg_return:hover {
              background-color: rgba(192, 192, 192, 0.7);
            }
            .title_caro {
              color: rgb(246, 161, 95);
              font-size: 1.5em;
              margin-bottom: 1em;
            }
            .caro_circular {
              width: 10em;
              height: 10em;
            }
            h2 {
              font-size: 2em;
            }
            @media (max-width: 1100px) {
              .wrapper_text {
                font-size: 1.5em;
                padding: 2em 4em;
              }
              .svg_return {
                width: 70px;
                height: 70px;
              }
            }
            @media (max-width: 900px) {
              .wrapper_text {
                font-size: 1.5em;
                padding: 2em 3em;
              }
              .caro_circular {
                width: 8em;
                height: 8em;
              }
            }
            @media (max-width: 700px) {
              .wrapper_text {
                font-size: 1.4em;
                padding: 0em 1.7em;
              }
              h2 {
                font-size: 1.3em;
              }
              .title_caro {
                padding: 1em 1em;
              }
            }
            @media (max-width: 600px) {
              .caro_circular {
                width: 6em;
                height: 6em;
              }
              h2 {
                font-size: 1.4em;
              }
              .wrapper_title--caro {
                margin-left: 0.5em;
              }
            }

            @media (max-width: 400px) {
              .caro_circular {
                width: 3.5em;
                height: 3.5em;
              }
              .title_caro {
                display: flex;
                align-items: center;
                margin: 0.5em;
                padding-top: 1em;
                font-family: "Alegreya Sans";
              }
              h2 {
                font-size: 1.1em;
              }
              h3 {
                font-size: 0.7em;
              }
              
              .wrapper_text {
                padding-top: 0em;
              }
              .wrapper_title--caro {
                margin-left: 0.5em;
              }
            }
          `}</style>
        </div>
      );
    } else if (this.state.showManuText) {
      return (
        <div>
          <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Alegreya+Sans"
              rel="stylesheet"
            />
          </Head>
          <Layout>
            <div className="title_manu">
              <div className="wrapper_manu--circular">
                <img
                  className="manu_circular"
                  src="../static/Images/manuCircular.png"
                />
              </div>
              <div className="wrapper_title--manu">
                <h2>Villar Lifac</h2>
                <h3>Director Musical de Kordmusik:</h3>
              </div>
            </div>
            <div className="wrapper_text">
              <div>
                <p>
                  Multiinstrumentista, Compositor, Productor, Arreglador y
                  Sesionista especializado tanto en música académica como
                  popular.
                </p>

                <p>
                  {" "}
                  Ha realizado grabaciones discográficas y conciertos en vivo
                  con reconocidos músicos de Argentina tales como: Rodolfo
                  Mederos, Patricio Villarejo, Litto Nebbia, Pedro Aznar, Rata
                  Blanca, Adriana Varela, Pablo Agri, Franco Luciani, Juan Cruz
                  de Urquiza, Juan Pablo Di Leone, Roberto Tapia, Marcelo
                  Moguilevsky y muchos otros.
                </p>
                <p>
                  Ha realizado arreglos orquestales para la Kashmir Orquesta
                  (Dir. Patricio Villarejo) en donde además es contrabajista
                  solista.
                </p>
                <p>
                  {" "}
                  Ha viajado con el bandoneonista Rodolfo Roballos a Melbourne,
                  Australia, a dirigir The Melbourne Tango Orchestra, en el
                  marco de La Academia Tango Club con el endorsement de The
                  Melbourne Polytechnic.
                </p>
                <p>
                  Ha realizado la Gira Argentina con El Muro, grupo radicado en
                  Berlín, integrado por los músicos de Noruega Karl Espegaard y
                  Åsbjørg Ryeng, y los músicos argentinos Juan Pablo De Lucca y
                  Juan Villarreal.{" "}
                </p>
                <p>
                  Luego de haber estudiado Sitar y música Indostánica en
                  Varanasi, India, con Swami Jugalgiri Maharaj, se ha dedicado a
                  fusionar la música de la India y los sonidos del Sitar con la
                  música popular internacional a través de diversos trabajos
                  discográficos.
                </p>
                <p>
                  {" "}
                  En el ámbito de la música académica contemporánea ha sido
                  contrabajista solista de la Orquesta Música Nueva (Dir.
                  Ricardo Hegman) tocando obras de reconocidos compositores como
                  Ariel Hagman, Julián Galay, Nahuel Carfi, Marcelo Katz, y
                  Julio Viera entre otros. En ese marco ha sido miembro del
                  Jurado del Concurso de Composición del Festival Internacional
                  Musica Nueva Horacio Salgán 2012.
                </p>
                <p>
                  Ha sido Profesor en la Licenciatura de Artes Musicales de
                  Universidad Maimónides.
                </p>
                <p>
                  Ha integrado la Sinfónica Juvenil Nacional José de San Martín
                  con la cual ha dado varios conciertos en la sala “Ballena
                  Azul” con directores tales como César Iván Lara y Tarcisio
                  Barreto. Discografía:
                </p>

                <div className="list">
                  <p>
                    "Amanecer" - Varietal - 2010 • "Bien Debute" - Bien Debute -
                    2010
                  </p>
                  <p>"Baladas a Puro Chass" - Coro Cosa de Negros - 2011</p>
                  <p>
                    "Orquesta Música Nueva" - Hegman / Carfi / Galay / Hagman -
                    2012
                  </p>
                  <p>"Canciones sobre el Silencio" - Nicolás Rallis - 2012</p>
                  <p>"Secuencias de la Noche" - Pablo Marconi - 2013</p>
                  <p> "Toda una vida" - Nora Malatesta - 2013</p>
                  <p>"Pulso Sur" - Tanino Duo - 2014</p>
                  <p>
                    {" "}
                    "Después de Todo" - Juan Pablo De Lucca Quinteto - 2015
                  </p>
                  <p>
                    "Por la Noche Iluminada" - Rolando de Marco Cuarteto – 2016
                  </p>
                  <p>“LaBrújula” Kanu - 2016 </p>
                  <p>"Vuelo Estepario" Vuelo Estepario- 2017</p>
                  <p>"Constantinopla" Alejo Nóbili - 2017 </p>
                  <p>“Kunturi Ensamble” - Kunturi Ensamble – 2017</p>
                  <p>“La Academia Tango Club” La Academia Tango Club - 2018</p>
                  <p>“Más allá del tiempo” - Carlos Rodas - 2018</p>
                  <p>
                    “Que el viaje en canoa te oriente” KANU (Alejo Nóbili y
                    Eliana De Piero) - 2018
                  </p>
                  <p> "Identidad" Patricio Villarejo - 2018</p>
                </div>
              </div>
              <svg
                className="svg_return"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0  510 510"
                width="80"
                height="80"
                onClick={this.showCaroManuPics}
              >
                <path
                  d="M437.02 74.98C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.98C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.98C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z"
                  fill="rgb(246, 161, 95)"
                />
                <path
                  d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
                  fill="#fffff"
                />
              </svg>
            </div>
          </Layout>
          <style jsx>{`
          .wrapper_text {
              padding: 0em 4em;
              font-size: 1.8em;
              font-family: "Alegreya Sans";
              line-height: 1.5em;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            p::before {
              content: "▶";
              font-size: 0.7em;
              color: rgb(246, 161, 95);
              padding-right: 5px;
            }
            .svg_return {
              margin: 2em 3em;
              cursor: pointer;
              overflow: hidden;
              transition: ease-in;
              transition-property: background-color;
              border-radius: 50%;
              transform: rotate(180deg);
            }
            .title_manu {
              display: flex;
              padding-top: 2em;
              padding-left: 5em;
              padding-right: 5em;
              font-family: "Alegreya Sans";
              align-items: center;
            }
            .wrapper_title--manu {
              margin-left: 2em;
            }
            .svg_return:hover {
              background-color: rgba(192, 192, 192, 0.7);
            }
            .title_manu {
              color: rgb(246, 161, 95);
              font-size: 1.5em;
              margin-bottom: 1em;
            }
            .manu_circular {
              width: 10em;
              height: 10em;
            }
            h2 {
              font-size: 2em;
            }
            @media (max-width: 1100px) {
              .wrapper_text {
                font-size: 1.5em;
                padding: 2em 4em;
              }
              .svg_return {
                width: 70px;
                height: 70px;
              }
            }
            @media (max-width: 900px) {
              .wrapper_text {
                font-size: 1.5em;
                padding: 2em 3em;
              }
              .manu_circular {
                width: 8em;
                height: 8em;
              }
            }
            @media (max-width: 700px) {
              .wrapper_text {
                font-size: 1.4em;
                padding: 0em 1.7em;
              }
              h2 {
                font-size: 1.3em;
              }
              .title_manu {
                padding: 1em 1em;
              }
            }
            @media (max-width: 600px) {
              .manu_circular {
                width: 6em;
                height: 6em;
              }
              h2 {
                font-size: 1.4em;
              }
              .wrapper_title--manu {
                margin-left: 0.5em;
              }
            }

            @media (max-width: 400px) {
              .manu_circular {
                width: 3.5em;
                height: 3.5em;
              }
              .title_manu {
                display: flex;
                align-items: center;
                margin: 0.5em;
                padding-top: 1em;
                font-family: "Alegreya Sans";
              }
              h2 {
                font-size: 1.1em;
              }
              h3 {
                font-size: 0.7em;
              }
              
              .wrapper_text {
                padding-top: 0em;
              }
              .wrapper_title--manu {
                margin-left: 0.5em;
              }
            }
            
          `}</style>
        </div>
      );
    }
    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Alegreya+Sans"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <div className="header">
          <Header contactRoute="#contact" tracksRoute="/"/>
          </div>
          <div className="wrapper">
            <div className="wrapper_bio">
              <div className="caro">
                <div className="text_caro" />
                <div className="wrapper_name">
                  <div className="wrapper_imgCaro" onClick={this.showCaroInfo}>
                    <img
                      src="../static/Images/caroPosta.JPG"
                      className="caro_img"
                    />
                  </div>
                  <div className="name" onClick={this.showCaroInfo}>
                    Carolina Göttert
                  </div>
                </div>
              </div>
              <div className="wrapper_svgs">
                <div className="wrapper_svg">
                  <svg
                    className="svg_playCaro"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0  510 510"
                    width="50"
                    height="50"
                    onClick={this.showCaroInfo}
                  >
                    <path
                      d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
                      fill="#fffff"
                    />
                  </svg>
                </div>
                <div className="wrapper_svg">
                  <svg
                    className="svg_playManu"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0  510 510"
                    width="50"
                    height="50"
                    onClick={this.showManuInfo}
                  >
                    <path
                      d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
                      fill="#fffff"
                    />
                  </svg>
                </div>
              </div>
              <div className="manu">
                <div className="wrapper_name">
                  <div className="wrapper_imgManu" onClick={this.showManuInfo}>
                    <img
                      src="../static/Images/manuPosta.JPG"
                      className="manu_img"
                    />
                  </div>
                  <div className="name" onClick={this.showManuInfo}>
                    Manuel Villar Lifac
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </Layout>

        <style jsx>{`
          .header{margin-top:1em;}
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 2em;
          }
          .name:hover {
            color: rgb(246, 161, 95);
            cursor: pointer;
          }

          .caro_img,
          .manu_img {
            width: 20em;
          }
          .wrapper_imgCaro,
          .wrapper_imgManu {
            padding: 1.5em;
            background-color: rgb(246, 161, 95);
            margin: 2em;
            cursor: pointer;
          }
          .svg_playCaro {
            transform: rotate(180deg);
          }
          .svg_playCaro,
          .svg_playManu {
            cursor: pointer;
            padding: 0.5em;
          }
          .wrapper_bio {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .wrapper_name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: "Alegreya Sans";
          }
          .name {
            font-size: 1.5em;
          }
          .wrapper_svg:hover {
            border-radius: 50%;
            background-color: rgba(192, 192, 192, 0.5);
          }
          .wrapper_svg {
            border-radius: 50%;
            border: solid 0.15em rgb(246, 161, 95);
            margin: 0em 0.5em;
          }
          .wrapper_svgs {
            display: flex;
          }
          .wrapper_svg {
            width: 4em;
            height: 4em;
            transition: ease-in 0.3s;
            transition-property: background-color;
            border-radius: 50%;
          }
          @media (max-width: 1000px) {
            .caro_img,
            .manu_img {
              width: 15em;
            }
          }
          @media (max-width: 800px) {
            .wrapper_svg {
              display: none;
            }
            .caro_img,
            .manu_img {
              width: 15em;
            }
            .wrapper_bio {
              flex-direction: column;
            }
          }
          @media (max-width: 600px) {
            .caro_img,
            .manu_img {
              width: 12em;
            }
          }
        `}</style>
      </div>
    );
  }
}
