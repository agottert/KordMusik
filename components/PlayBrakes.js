import React from "react";
import Head from "next/head";

export default props => (
  <div>
    <div className="wrapper_svg--play">
      <div className="lines_play" />
      <div className="circle svg_play">
        <svg className="svg"
          
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0  510 510"
          width="50"
          height="50"
        >
          <path
            d="M251 142.597v226.806L378.578 256 251 142.597zm30 66.806L333.422 256 281 302.597v-93.194zM191 146h30v220h-30z"
            fill="#fffff"
          />
        </svg>
      </div>
      <div className="lines_play" />
    </div>

    <style jsx>{`
      .wrapper_svg--play {
        display: flex;
        justify-content: center;
        align-items: center;
        
      }
      .lines_play {
        width: 7em;
        border-bottom: solid 0.15em rgb(246, 161, 95);
        height: 1em;
      }
      .circle {
        border-radius: 50%;
        border: solid 0.15em rgb(246, 161, 95);
        width:3em;
        height:3em;
      }
      .svg_play {
        margin-left: 0.5em;
        margin-right: 0.5em;
        margin-top: 1.2em;
      }
      @media (max-width: 650px) {
        .lines_play {
          width: 4em;
        }
      .circle{
        width:2.5em;
        height:2.5em;
      }
      .svg{
        width:2.5em;
        height:2.5em;
      }
      .wrapper_svg--play{
        margin-top:0em;
      }
      }
    `}</style>
  </div>
);
