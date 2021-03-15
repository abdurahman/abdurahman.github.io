import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Credentials from "../components/credentials"
import Summary from "../components/summary"
import Info from "../components/info"

const IndexPage = () => (
  <Layout>
    <SEO title="Abdurahman Ahmed's Portfolio" />
    <Header></Header>
    <Work></Work>
    <Credentials></Credentials>
    <Info></Info>
    <Summary></Summary>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
