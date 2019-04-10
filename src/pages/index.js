import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Scoreboard from '../components/Scoreboard';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Scoreboard />
  </Layout>
)

export default IndexPage
