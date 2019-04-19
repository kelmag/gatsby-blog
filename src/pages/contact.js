import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
const ContactPage = () => {
  return (
    <Layout>
      <Head title="contact" />
      <h1>Contact</h1>
      <p>
        Make sure to contact us by email or phone number if you have any
        suggestions or questions
      </p>
      <div>
        <span>Phone : </span>
        <i>+212652525389</i>
      </div>
      <div>
        <span>Email : </span>
        <i>khaliilelmaghraoui@gmail.com</i>
      </div>
      <div>
        <span>Twitter : </span>
        <i>
          <a
            href="https://twitter.com/_kelmag"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow Me
          </a>
        </i>
      </div>
    </Layout>
  )
}

export default ContactPage
