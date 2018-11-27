import React from "react";
import Head from "next/head";

export default props => (
  <div>
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
        border-bottom: solid black 0.2em;
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
