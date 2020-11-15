import React from "react"
import Header from './Header'

const Layout = ({ children }) => {

  return (
    <div>
      <Header/>
      <div className="global-wrapper">
        <main>{children}</main>
        <footer style={{ position: "absolute",
                          bottom:0,
                          left:"50%"}}>
          Made with 💖 | {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}

export default Layout
