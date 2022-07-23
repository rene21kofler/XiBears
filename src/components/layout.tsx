import * as React from 'react'
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  return (
    <div style={{display: "grid"}} className="text-white">
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
          "../images/background.jpg"
        }
        formats={["auto", "webp", "avif"]}
      />
      <div 
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        <title className="text-3xl font-bold underline">{pageTitle}</title>
        <header>{pageTitle}</header>
        <nav className="nav hidden md:block">
          <Link className="pr-2" to="/">Index</Link>
          <Link className="pr-2" to="/home">Home</Link>
          <Link className="pr-2" to="/secondPage">XiBears</Link>
          <Link className="pr-2" to="/secondPage">Ligen</Link>
          <Link className="pr-2" to="/secondPage">XiBowl</Link>
          <Link className="pr-2" to="/players">Spieler</Link>
          <Link className="pr-2" to="/secondPage">Kontakt</Link>
        </nav>
        <div className="burger-menu text-right pr-5 md:hidden">
          <Link className="pr-2" to="/">Index</Link>
          <Link className="pr-2" to="/home">Home</Link>
          <Link className="pr-2" to="/secondPage">XiBears</Link>
          <Link className="pr-2" to="/secondPage">Ligen</Link>
          <Link className="pr-2" to="/secondPage">XiBowl</Link>
          <Link className="pr-2" to="/players">Spieler</Link>
          <Link className="pr-2" to="/secondPage">Kontakt</Link>
        </div>
        <main>
          <h1>{pageTitle}</h1>

          <StaticImage
            className="w-40"
            alt="XiBears"
            src="../images/logo.png"
          />
          {children}
        </main>
      </div>

    </div>
  )
}

export default Layout