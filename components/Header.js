import React from "react";
import Link from "next/link";

export default props => (
  <div className="wrapper_total--actions">
    <div className="wrapper_actions">
      <div className="wrapper_textSvg">
        <svg
          className="svg_header"
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
        <Link href={props.tracksRoute}>
          <a className="header_tracks">Tracks</a>
        </Link>
      </div>
      <div className="wrapper_textSvg">
        <svg className="svg_header"
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
        <Link href="/bio">
          <a className="header_bio">Bio</a>
        </Link>
      </div>
      <div className="wrapper_textSvg">
        <svg className="svg_header"
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
        <Link>
          <a className="header_contact" href="#contact">
            Contacto
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .wrapper_textSvg {
        display: flex;
        align-items: center;
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
        width: 70vw;
      }
      .wrapper_total--actions {
        display: flex;
        justify-content: center;
        align-items: center;
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
    `}</style>
    <style jsx>
      {`
        @media (max-width: 900px) {
          .wrapper_actions {
            padding: 2em 2em;
          }
        }

        @media (max-width: 450px) {
          .wrapper_actions {
            padding: 0.5em 0em;
          }
        }

        @media (max-width: 450px) {
          .wrapper_actions {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 10em;
          }
          .svg_header {
            width:40px;
            height:40px;
          }
          .header_bio,
          .header_contact,
          .header_tracks {
            font-size:1.5em;
          }
          .header_bio:hover, .header_contact:hover, .header_tracks:hover{
             font-size:1.9em;
          }
          .wrapper_total--actions {
            margin-top:1em;
            margin-bottom:0em;
          }
        }
      `}
    </style>
  </div>
);
