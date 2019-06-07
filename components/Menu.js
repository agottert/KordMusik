import React from 'react';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    
    return (
      <div>

        <nav
          className={`menu${this.state.open ? ' open' : ''}`}
        >
          <div
            className="toggle-container"
            onClick={() => {
              this.setState(
                prev => ({
                  open: !prev.open,
                }),
              );
            }}
          >
            <div className="toggle" />
          </div>
          <ol>
            <li className="menu-item title">
              <a href="/">De Mi</a>
            </li>
            <li className="menu-item title">
                <a href="#0">La Enseñanza en mi Vida</a>
            </li>
            <li className="menu-item title">
                <a href="#0">Participaciones artisticas</a>
            </li>
            <li className="menu-item title">
                <a href="#0">La magia en voz</a>
            </li>
            <li className="menu-item title">
                <a href="#0">Contacto</a>
            </li>
           
          </ol>
        </nav>

        <style jsx>
          {`.menu {
              background: white;
              height: 3rem;
            }
            .menu-languages{
              display:none;
            }
            .select{
                display:flex;
                align-items:center;
                height:1em;}
            svg{
              padding-left:0.5em;
              cursor: pointer;
              transform: rotateX(0deg);
              transition: transform 0.25s ease-out;
              
            }
            .language{
              display:none;
            }
            .menu > ol > .menu-item:hover svg{
              transform: rotateX(180deg);
            }
            .menu .toggle-container {
              display: none;
              z-index: 10;
            }
            .title{
              font-size:1.2em;
            }
            .sub-menu{
              font-size:0.8em;
            }
            .menu ol {
              list-style-type: none;
              padding: 0;
            }
            .menu > ol {
              max-width: 700px;
              padding: 0 2rem;
              display: flex;
            }
            .menu > ol > .menu-item {
              flex: 1;
              padding: 0.5rem 0;
            }
            .menu > ol > .menu-item:after {
              content: "";
              position: absolute;
              margin:0 auto;
              width: 25px;
              height: 2px;
              bottom: 5px;
              background: rgb(165, 4, 81);
              will-change: transform;
              transform: scale(0);
              transition: transform 0.2s ease;
            }
            .menu > ol > .menu-item:hover:after {
              transform: scale(1);
            }
            .menu-item {
              position: relative;
              line-height: 1.5rem;
              font-size:1.2em;
            }
            .menu-item a {
              overflow: hidden;
              display: block;
              color: rgb(165, 4, 81);
            }
            .menu-item .sub-menu a{
              color:white;
            }
            .sub-menu a{
              font-size:0.8em;
            }
            
            .sub-menu .menu-item {
              padding: 0.75rem 0;
              background: rgb(165, 4, 81);
              opacity: 0;
              transform-origin: bottom;
              animation: enter 0.2s ease forwards;
            }
            .sub-menu .menu-item:nth-child(1) {
              animation-duration: 0.2s;
              animation-delay: 0s;
            }
            .sub-menu .menu-item:nth-child(2) {
              animation-duration: 0.3s;
              animation-delay: 0.1s;
            }
            .sub-menu .menu-item:nth-child(3) {
              animation-duration: 0.4s;
              animation-delay: 0.2s;
            }
            .sub-menu .menu-item:nth-child(4) {
              animation-duration: 0.5s;
              animation-delay: 0.3s;
            }
            .sub-menu .menu-item:nth-child(5) {
              animation-duration: 0.6s;
              animation-delay: 0.4s;
            }
            .sub-menu .menu-item:hover {
              background: rgb(178, 41, 106);
            }
            .sub-menu .menu-item a {
              padding: 0 0.75rem;
            }
            @media screen and (max-width: 800px) {
              svg{
                display:none;
              }
              .select{
                justify-content:center;
              }
              .menu-languages{
                display:block;
              }
              .language{
                display:block;
              }
            }
            @media screen and (max-width: 800px) {
              .menu {
                height:4rem;
              }
              .menu .toggle-container {
                display: block;
              }
              .menu ol {
                margin: 0 auto;
              }
              .menu-item {
                text-align: center;
              }
              .sub-menu .menu-item {
                background: #C06C84;
              }
              .menu-item a{
                color:white;
              }
              
              }
              
            }
            @media(max-width: 800px) {
              .menu {
                position: relative;
                background:rgb(165, 4, 81);
              }
              .menu .toggle-container {
                position: absolute;
                right: 1rem;
                height: 24px;
                top: calc(50% - 22px);
                padding: 10px;
              }
              .menu .toggle {
                position: relative;
                top: calc(50% - 2px);
                right: 0;
                width: 30px;
                height: 4px;
                background:white;
                box-shadow: 0 10px white, 0 -10px white;
              }
              .menu > ol {
                display: none;
                background: rgb(165, 4, 81);
                flex-direction: column;
                justify-content: space-evenly;
                height: 50vh;
                animation: fade 0.2s ease-out;
                color:white;
              }
              .menu > ol > .menu-item {
                flex: 0;
                opacity: 0;
                animation: enter 0.3s ease-out forwards;
              }
              .menu > ol > .menu-item:nth-child(1) {
                animation-delay: 0s;
              }
              .menu > ol > .menu-item:nth-child(2) {
                animation-delay: 0.1s;
              }
              .menu > ol > .menu-item:nth-child(3) {
                animation-delay: 0.2s;
              }
              .menu > ol > .menu-item:nth-child(4) {
                animation-delay: 0.3s;
              }
              .menu > ol > .menu-item:nth-child(5) {
                animation-delay: 0.4s;
              }
              .menu > ol > .menu-item + .menu-item {
                margin-top: 0.75rem;
              }
              .menu > ol > .menu-item:after {
                left: auto;
                right: 1rem;
                bottom: calc(50% - 2px);
              }
              .menu > ol > .menu-item:hover {
                z-index: 1;
              }
              .menu.open > ol {
                display: flex;
              }
              .menu.open .toggle {
                box-shadow: none;
              }
            }

            .sub-menu {
              position: absolute;
              width: 100%;
              top: 100%;
              left: 0;
              display: none;
              z-index: 1;
              color:white;
            }
            .menu-item:hover > .sub-menu {
              display: block;
            }
            @media screen and (max-width: 800px) {
              .sub-menu {
                width: 100vw;
                left: -2rem;
              }
              .menu > ol > .menu-item:after {
                width:0em;
                height:0em;
              }
            }

            html, body {
              font-family: Helvetica;
              margin: 0;
              background:rgb(165, 4, 81);
            }

            a {
              text-decoration: none;
            }

            @keyframes enter {
              from {
                opacity: 0;
                transform: scaleY(0.98) translateY(10px);
              }
              to {
                opacity: 1;
                transform: none;
              }
            }
            @keyframes fade {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

        
           
          `}
        </style>
      </div>
    );
  }
}

export default Menu;
