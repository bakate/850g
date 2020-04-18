import React from "react"
import Layout from "../components/Layout"
import Recipes from "../components/Recipes"
import SEO from "../components/SEO"



const IndexPage = () =>   ( <Layout>
    <SEO title="Home" />
    <Recipes/>
  </Layout>
  )




export default IndexPage
