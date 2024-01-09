import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
      <div className="box">
          <h1>Embed SDK</h1>
          <p>The Sisense Embed SDK is a JavaScript library used for embedding Sisense Dashboards into web applications and facilitating the interaction between the host page and the embedded dashboard.</p>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <h1>Compose SDK</h1>
          <p>Compose SDK provides a flexible developer toolkit that gives you the tools to embed analytics in a code-first, scalable, modular way. Build analytics and data-driven experiences into your products faster, reduce maintenance burden, and save development time over coding from scratch.</p>
        </div>
        <img src={require("assets/csdk.png")} alt="Compose SDK logo"></img>
      </div>
    </div>
  )
}

export default Header