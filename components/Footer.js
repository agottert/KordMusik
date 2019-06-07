import React from "react";
import Head from "next/head";
import PlayBreaks from '../components/PlayBrakes'
import Link from 'next/link'

export default () => (
  <div>
     <div className="brakes">
     <PlayBreaks/>
     </div>
    
    <div id="contact" className='wrapper'>
     <div className='wrapper_contact'>
        <div className="wrapper_wapp">
          <a  className='link_wap'href='https://api.whatsapp.com/send?phone=5491156342217'>
            <svg
              className="svg_wapp"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 100 100"
            >
              <path
                d="M90 43.841c0 24.213-19.779 43.841-44.182 43.841a44.256 44.256 0 0 1-21.357-5.455L0 90l7.975-23.522a43.38 43.38 0 0 1-6.34-22.637C1.635 19.628 21.416 0 45.818 0 70.223 0 90 19.628 90 43.841zM45.818 6.982c-20.484 0-37.146 16.535-37.146 36.859 0 8.065 2.629 15.534 7.076 21.61L11.107 79.14l14.275-4.537A37.122 37.122 0 0 0 45.819 80.7c20.481 0 37.146-16.533 37.146-36.857S66.301 6.982 45.818 6.982zm22.311 46.956c-.273-.447-.994-.717-2.076-1.254-1.084-.537-6.41-3.138-7.4-3.495-.993-.358-1.717-.538-2.438.537-.721 1.076-2.797 3.495-3.43 4.212-.632.719-1.263.809-2.347.271-1.082-.537-4.571-1.673-8.708-5.333-3.219-2.848-5.393-6.364-6.025-7.441-.631-1.075-.066-1.656.475-2.191.488-.482 1.084-1.255 1.625-1.882.543-.628.723-1.075 1.082-1.793.363-.717.182-1.344-.09-1.883-.27-.537-2.438-5.825-3.34-7.977-.902-2.15-1.803-1.792-2.436-1.792-.631 0-1.354-.09-2.076-.09s-1.896.269-2.889 1.344c-.992 1.076-3.789 3.676-3.789 8.963 0 5.288 3.879 10.397 4.422 11.113.541.716 7.49 11.92 18.5 16.223C58.2 65.771 58.2 64.336 60.186 64.156c1.984-.179 6.406-2.599 7.312-5.107.9-2.512.9-4.663.631-5.111z"
                fill="#fffff"
              />
            </svg>
            </a>
            <a className="phone"href='https://api.whatsapp.com/send?phone=5491156342217'>+54 9 11 5634-2217</a>
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
              width="40px"
              height="40px"
            >
              <path
                d="M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41  c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354  c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001  c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987  L62.87,84.397h256.378L191.059,192.987z"
                fill="#fffff"
              />
            </svg>
            <a className="svg_mail--a" href="mailto:info@kordmusik">
              carolinagottert@gmail.com
            </a>
          </div>
     </div>
     <div className='wrapper_contact'>
        <div className="wrapper_face">
            <svg xmlns="https://www.w3.org/2000/svg" width="40" height="40" 
                viewBox="0 0 100 100" class="jsx-2027664075 face_svg">
                <title class="jsx-2027664075">Facebook</title>
                <desc class="jsx-2027664075">Link to Facebook</desc>
                <path fill="#fffff" d="M90 15.001C90 7.119 82.884 0 75 0H15C7.116 0 0 7.119 0 15.001v59.998C0 82.881 7.116 90 15.001 90H45V56H34V41h11v-5.844C45 25.077 52.568 16 61.875 16H74v15H61.875C60.548 31 59 32.611 59 35.024V41h15v15H59v34h16c7.884 0 15-7.119 15-15.001V15.001z" class="jsx-2027664075"></path>
            </svg>
            <a className="svg_mail--a" href="https://www.facebook.com/lamagiaenvoz/">
            La magia en voz
            </a>
          </div>

          <div className="wrapper_instagram">
            <svg fill="#fffff" xmlns="https://www.w3.org/2000/svg" 
                width="40" height="40" viewBox="0 0 180 180" 
                class="jsx-2027664075 insta_svg"><title class="jsx-2027664075">Instagram</title>
                <desc class="jsx-2027664075">Link to Instagram</desc><path fill="#fffff" 
                d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z" 
                class="jsx-2027664075"></path><path fill="#fffff" d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 0 0-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z" class="jsx-2027664075"></path>
            </svg>
            <a className="svg_mail--a" href="https://www.instagram.com/karogott/">
              @karogott
            </a>
          </div>
     </div>
    </div>
    <div className="footer">
      <span>© 2019 Carolina Göttert</span>
    </div>

    <style jsx>{`
      .wrapper{
        display:flex;
        justify-content: space-evenly;}
      .svg_mail,
      .svg_wapp {
        padding-right: 0.5em;
      }
      .wrapper_mail svg:hover {
        fill: #f6a15f;
      }
      .wrapper_wapp svg:hover {
        fill: #f6a15f;
      }
      .wrapper_instagram svg:hover {
        fill: #f6a15f;
      }
      .wrapper_face svg:hover {
        fill: #f6a15f;
      }
      .wrapper_contact {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-bottom: 3em;
            padding: 0em 2em 0em;
          }
          .wrapper_wapp,
          .wrapper_mail, .wrapper_instagram, .wrapper_face {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Roboto";
            color: black;
            font-size: 1.5em;
            margin-bottom:1em;
          }
          .wrapper_mail a:hover {
            color: #f6a15f;
          }
          .wrapper_face a:hover {
            color: #f6a15f;
          }
          .wrapper_instagram a:hover {
            color: #f6a15f;
          }

          .svg_mail--a {
            text-decoration: none;
            color: black;
            text-decoration-style: none;
          }
           a{
             margin-left:1em;
           }
          .link_wap{
            margin-left:0;
            margin-top:0.2em;
            
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
          .brakes{
            margin-top:1em;
            margin-bottom: 2em;
          }
          .phone{
            text-decoration: none;
            color:black;
          }
          .phone:hover{
            color: #f6a15f;
          }


          @media (max-width: 700px) {
            
            .wrapper_contact {
              height: 10em;
              font-size:0.8em;
          }
          .svg_mail,
            .svg_wapp {
              width: 2em;
            }
          }
            @media (max-width: 600px) {
              .wrapper{
              flex-direction:column;
              
            }
              .wrapper_contact{
              margin-bottom:0em;
              }
            .svg_wapp{padding-right:0em;}
            .svg_mail{
              padding-right:0em;
            }
            .svg_mail,
            .svg_wapp {
              width: 2em;
            }
            .footer {
              justify-content: center;
              padding-left: 0em;
            }
            }
            
          }
    `}</style>
  </div>
);
