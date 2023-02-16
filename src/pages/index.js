import * as React from "react";
import "../SCSS/index.scss";
import {StandardLayout} from "../components/StandardLayout";

const IndexPage = () => {
  return (
    <StandardLayout name={"Home"}>
    <main>
      <h2>Welcome to my Home Page!</h2>
    </main>
    </StandardLayout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
