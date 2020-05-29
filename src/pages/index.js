import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Contact from "../components/contact"
import { Scroll } from "../components/scroll"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Scroll />
    <Banner />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
