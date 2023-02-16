import React from "react";
import { graphql, Link } from "gatsby";
import { StandardLayout } from "../components/StandardLayout";


export default function PostTemplate({data}) {
    const post = data.markdownRemark
    console.log(data)
    const date = new Date(post.frontmatter.date)
    const formatedDate = date.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
    return (
        <StandardLayout name={"Blog"}>
        <main>
            <Link to="/blog">&lt;--zurück</Link>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <sup>gepostet am <time dateTime={date}>{formatedDate}</time></sup>
            </div>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </main>
        </StandardLayout>
    )

}

export const postQuery = graphql`
    query MyQuery($name: String!) {
        markdownRemark(frontmatter: {path: {eq: $name}}) {
        html
        frontmatter {
            date
            path
            title
        }
  }
}
`