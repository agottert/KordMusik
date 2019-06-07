import React from "react";
import Link from "next/link";

export default props => (
  <div className="wrapper_total--actions">
    <div className="wrapper_actions">
      
      <div className="wrapper_textSvg">
        <svg className="svg_header"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0  510 510"
        >
          <path
            d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
            fill="#aaacad"
            style={{ fill: "white" }}
          />
        </svg>
        <Link href="#contact">
          <a className="header_contact">De mi</a>
        </Link>
      </div>
      <div className="wrapper_textSvg">
        <svg className="svg_header"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0  510 510"
        >
          <path
            d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
            fill="#aaacad"
            style={{ fill: "white" }}
          />
        </svg>
        <Link>
          <a className="header_contact" href="#contact">
            La Enseñanza en mi Vida
          </a>
        </Link>
      </div>
      <div className="wrapper_textSvg">
        <svg className="svg_header"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0  510 510"
        >
          <path
            d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
            fill="#aaacad"
            style={{ fill: "white" }}
          />
        </svg>
        <Link>
          <a className="header_contact" href="#contact">
            Participaciones artisticas
          </a>
        </Link>
      </div>
      <div className="wrapper_textSvg">
        <svg className="svg_header"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0  510 510"
        >
          <path
            d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
            fill="#aaacad"
            style={{ fill: "white" }}
          />
        </svg>
        <Link>
          <a className="header_contact" href="#contact">
            La Magia en Voz
          </a>
        </Link>
      </div>
      <div className="wrapper_textSvg">
        <svg className="svg_header"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0  510 510"
        >
          <path
            d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
            fill="#aaacad"
            style={{ fill: "white" }}
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
        margin:0em 1em;
      }
      .wrapper_actions {
        display: flex;
        justify-content: space-evenly;
        font-family: "Alegreya Sans";
        margin-bottom:1em;
        
        align-items: center;
        
        font-weight: 300;
        line-height: 2.5em;
        
      }
      .wrapper_total--actions {
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0.5em 0em;
      }

      
      .header_contact
      {
        text-decoration: none;
        color: white;
        transition: 0.3s;
        font-size: 1.4em;
        transition-timing-function: ease;
        padding-right: 0.6em;
      }
      .header_bio:hover {
        
        color: #ec3733;
      }
      .header_tracks:hover {
        
        color: #58f8ad;
      }
      .header_contact:hover {
        
        color: rgb(247,180,1);
      }
    `}</style>
    <style jsx>
      {`
      @media (max-width: 1100px) {
        .header_contact{
          font-size:1.3em;
          
        }
      }

      @media (max-width: 1000px) {
        .wrapper_actions{
          flex-direction:column;
          align-items:flex-start;
      
        }}

      `}
    </style>
  </div>
);
