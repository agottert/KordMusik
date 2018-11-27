import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout'
import PlayIcon from '../components/PlayIcon'
import Footer from '../components/Footer'


export default class  Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
     
  }
  render() {
    return (
      <div>
        <Layout>

        
        <svg
        className="svg_play"
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
     <PlayIcon/>
     <Footer/>
     

             

        </Layout>
        
        
        <style jsx>{`
          .svg_play{
            transform: rotate(180deg);
          }
         
          
        `}</style>
      </div>
    );
  }
}
