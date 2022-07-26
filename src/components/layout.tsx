import * as React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ pageTitle, children }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </head>
      <body>
        <nav class="flex items-center justify-between flex-wrap bg-blue-700 p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6 hidden lg:block">
            <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <StaticImage
                className="w-32"
                alt="XiBears"
                src="../images/logo.png"
              />
            </Link>
          </div>
          <div class="block lg:hidden">
            <Link to="/" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <StaticImage
                className="w-32"
                alt="XiBears"
                src="../images/logo.png"
              />
            </Link>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <Link to="/home" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Home
              </Link>
              <Link to="/players" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Spieler
              </Link>
              <Link to="/secondPage" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                XiBowl
              </Link>
              <Link to="/secondPage" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Liga
              </Link>
            </div>
            <div>
              <Link to="/contact" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Kontakt</Link>
            </div>
          </div>
        </nav>
        <main>

          <i class="fa-brands fa-instagram"></i><i class="fa-brands fa-facebook"></i>
          <title className="text-3xl font-bold underline">{pageTitle}</title>
          <header>{pageTitle}</header>
          <h1>{pageTitle}</h1>
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

export default Layout