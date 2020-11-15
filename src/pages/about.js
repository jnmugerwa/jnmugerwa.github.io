import React from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';
import SEO from "../components/SEO"

function AboutPage() {
  return (
    <div>
      <Header/>
      <SEO title="About"/>
      <Bio/>
      <footer style={{ position: "fixed",
                          bottom:0,
                          left:"50%"}}>
          Made with 💖 | {new Date().getFullYear()}
        </footer>
    </div>
  )
}

export default AboutPage
