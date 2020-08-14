import React from "react"
import renderHTML from "react-render-html"

import Layout from "../components/layout/layout"
import styles from "./Announcement.module.css"

export default function Studies({ data, location }) {
  const edges = data.allMarkdownRemark.edges
  return (
    <Layout sideList={0} pathName={location.pathname}>
      <div className={styles.wrapper}>
        {edges.map((value, index) => (
          <Template
            key={index}
            frontmatter={value.node.frontmatter}
            html={value.node.html}
          />
        ))}
      </div>
    </Layout>
  )
}

function Template({frontmatter, html}){
  return(
    <div className={styles.announcementWrapper}>
      <div className={styles.frontmatter}>
        <h1
          style={{
            margin: "5px",
          }}
        >
          {frontmatter.title}
        </h1>
        <span
          style={{
            color: "gray",
            fontSize: "0.8rem",
          }}
        >
          {frontmatter.date}
        </span>
        <br />
        <span
          style={{
            color: "gray",
            fontSize: "0.8rem",
          }}
        >
          <i>posted by {frontmatter.create}</i>
        </span>
      </div>
      {renderHTML(html)}
    </div>
  )
}

export const pageQuery = graphql`
  query {
  allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/announcements/"}} sort:{fields: frontmatter___number, order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          date
          create
        }
      }
    }
  }
`
