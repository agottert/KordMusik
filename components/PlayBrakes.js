import React from "react";
import Head from "next/head";

export default props => (
  <div>
    <div className="wrapper_svg--play">
      <div className="lines_play" />
      <svg
        className="svg_play"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0  510 510"
        width="50"
        height="50"
      >
        <path
          d="M437.02 74.98C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.98C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.98C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z"
          fill="#DDDDDD"
        />
        <path
          d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
          fill="#aaacad"
        />
      </svg>
      <div className="lines_play" />
    </div>

    <style jsx>{`
      .wrapper_svg--play {
        display: flex;
        justify-content: center;
        margin-bottom: 4em;
        align-items: center;
        margin-top:2em;
      }
      .lines_play {
        width: 7em;
        border-bottom: solid #dddddd 0.2em;
        height: 1em;
      }

      .svg_play {
        padding-left: 0.5em;
        padding-right: 0.5em;
        padding-top: 1.2em;
      }
      @media (max-width: 650px) {
        .lines_play{
          width:4em;
        }
            
           
          }
    `}</style>
  </div>
);
