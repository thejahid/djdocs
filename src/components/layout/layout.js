import React from "react"
import Navbar from "./navbar/navbar"

const Layout = ({ children }) => {
  return (
    <div className="d-flex" id="wrapper">
        <Navbar />
        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button className="btn btn-primary" onClick={() => {
                  document.getElementById("wrapper").classList.toggle("toggled")
                }}>Toggle Menu</button>
            </nav>
            <div className="container-fluid">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout
