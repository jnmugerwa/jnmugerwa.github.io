import React from "react"
import '../styles/styles.scss'
// Import components
import Layout from '../components/Layout';
import SEO from "../components/SEO"

const IndexPage = () => (
  <div className="body">
    <SEO title="Home"/>
    <Layout/>
  </div>
)

export default IndexPage
