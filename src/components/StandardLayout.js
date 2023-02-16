import * as React from "react";
import { Link } from "gatsby";

export function StandardLayout({children, name}) {
    return (
        <>
        <Header name={name} />
        {children}
        <Footer />
        </>
    )
}

const Footer = function() {
    return (
        <footer>
            <hr/>
            <span>
                Copyright Scandio GmbH(C)
            </span>
        </footer>
    )
}

const Header = function({name}) {
    return (
      <header>
        <div>
          <h1><a href={"/"}>{name}</a></h1>
          <div>
            <nav>
              <Link to="/blog">Blog</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </div>
  
      </header>
    )
  }