import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
  <h1>Contact to abhi</h1>

  <form name="Contact Form" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="Contact Form" />
    <div>
      <label>Your Email:</label>
      <input type="email" name="email" />
    </div>
    <div>
      <label>Message:</label>
      <textarea name="message" />
    </div>
    <button type="submit">Send</button>
  </form>
</Layout>
)

export default IndexPage
