import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
