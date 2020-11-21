import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Body from "../components/body"

export function containingFolder (path) {
    let pathItems = path.split("/");
    let beforeLastPathItem = pathItems[pathItems.length - 2];

    return beforeLastPathItem;
}
const IndexPage = () => {
    
    const homeContent = useStaticQuery(graphql`
        {
            allMarkdownRemark {
                nodes {
                    html
                    fileAbsolutePath
                    frontmatter {
                        layout
                        order
                        title
                    }
                }
            }
        }
    `)['allMarkdownRemark']['nodes']
        .filter(a => containingFolder(a['fileAbsolutePath']) === "home")
        .sort((a, b) => (a['frontmatter']['order'] - b['frontmatter']['order']))
    ;

    return (
        <Body>
            <header>
                <nav>
                    <ol>{ homeContent.map((i, k) => 
                        <li key={ k }><h1>{ i['frontmatter']['title'] }</h1></li>
                    )}</ol>
                </nav>
            </header>
            <main>{ homeContent.map((i, k) => 
                <section key={k} id={ i['frontmatter']['title'] }>
                    <article dangerouslySetInnerHTML={ {__html: i['html']} } />
                </section>
            )}</main>
        </Body>
    )
}

export default IndexPage
