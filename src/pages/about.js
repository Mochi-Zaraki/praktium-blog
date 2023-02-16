import React from "react";
import { graphql } from "gatsby";
import { StandardLayout } from "../components/StandardLayout";

function About({data}) {
    const postAbs = data.allMarkdownRemark.edges.length
    return (
        <StandardLayout name={"About"}>
            <main>
                <h2>Ich habe einen Blog aus dem Praktikum gebaut:</h2>
                <p>Das war die erste Aufgabe von meinem Betreuer Florian.</p>
                <br/>
                <p>Ich habe viel über Gatsby gelernt und das ich es nie wieder nutzen will.<sup><small>werde ich auch nicht...</small></sup></p>
                <p>Geht gerne auf die Blog Site um dort mehr nachzulesen.</p>
                <br/>
                <p><strong>Gerade gibt es {postAbs} Posts!</strong></p>
            </main>
        </StandardLayout>
    )
}

export default About;

export const postAbsQuery = graphql`
query {
    allMarkdownRemark {
        edges {
            node {
            id
        }
    }
    }
}
`