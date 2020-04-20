// import { Authenticator } from "aws-amplify-react"
import React from "react"
import Layout from "../components/Layout"
import Recipes from "../components/Recipes"
import SEO from "../components/SEO"



  const IndexPage = () =>   (
    <Layout>
    <SEO title="Home" />
  {/* < Authenticator  >
    <Greetings
      inGreeting={(username) => 'Hello ' + username}
      outGreeting="Stp, Crées-toi un compte..."
    />
  </Authenticator > */}
    <Recipes/>
  </Layout>
  )



export default IndexPage
