import * as React from 'react'
import { Link } from "gatsby"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="">
      <title className="text-3xl font-bold underline">{pageTitle}</title>
      <header>{pageTitle}</header>
      <nav className="nav hidden md:block">
        <Link to="/home">Home</Link>
        <Link to="/secondPage">XiBears</Link>
        <Link to="/secondPage">Ligen</Link>
        <Link to="/secondPage">XiBowl</Link>
        <Link to="/secondPage">Spieler</Link>
        <Link to="/secondPage">Kontakt</Link>
      </nav>
      <div className="burger-menu text-right pr-5 md:hidden">
        <Link to="/home">Home</Link>
        <Link to="/secondPage">XiBears</Link>
        <Link to="/secondPage">Ligen</Link>
        <Link to="/secondPage">XiBowl</Link>
        <Link to="/secondPage">Spieler</Link>
        <Link to="/secondPage">Kontakt</Link>
        </div>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout