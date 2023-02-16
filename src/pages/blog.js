import { graphql, Link } from "gatsby";
import * as React from "react";
import { StandardLayout } from "../components/StandardLayout";

function BlogSite({data}) {    
    return(
        <StandardLayout name={"Blog"}>
            <main>
                <h2>Posts:</h2>
                {data.allMarkdownRemark.edges.map((currentPost) => {
                    return (
                        <Post key={currentPost.node.id} title={currentPost.node.frontmatter.title}
                            message={currentPost.node.excerpt} time={currentPost.node.frontmatter.date}
                            path={currentPost.node.frontmatter.path}
                        ></Post>
                    )
                })}
            </main>
        </StandardLayout>
    )
}


const Post = function({title, message, time, path}) {
    const date = new Date(time);
    const formatedDate = date.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
    return (
        <div className="BlogWrapper">
        <div className="BlogPost">
            <div>
            <h3><Link to={path}>{title}</Link></h3>
            <span>
                <time dateTime={date}>{formatedDate}</time>
            </span>
            </div>
            <p>{trim({
                text: message,
                start:0,
                end:50
                })}</p>
        </div>
        </div>
    )
}

const trim = ({text, start, end}) => {
    return text.substring(start,end) + " ..."
}

export const query = graphql`
query {
    allMarkdownRemark {
        edges {
            node {
            id
            frontmatter {
                path
                title
                date
            }
            excerpt
        }
    }
    }
}
`

export default BlogSite; 