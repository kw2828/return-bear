import React from "react";
import { Link } from "gatsby";
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Layout from "../components/layout";
import HeroPage from "./hero"
import Footer from "../components/footer"


export default class IndexPage extends React.Component {

  render() {
    return (
      <div> 
        <Layout>
          <HeroPage />
        </Layout>
      </div>
    );
  }
}