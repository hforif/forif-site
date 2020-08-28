import React, { useState } from "react"
import Layout from "../components/layout/layout"
import renderHTML from "react-render-html"
import styles from "./Studies.module.css"

export default function Studies({ data, location }) {
  const [shown, setShown] = useState(0)
  const studiesList = data.allMarkdownRemark.edges.map((value) => value.node.frontmatter.category)
  const studiesData = data.allMarkdownRemark.edges.map((value) => {
    return {
      category: value.node.frontmatter.category,
      title: value.node.frontmatter.title,
      mentor: value.node.frontmatter.mentor,
      introduction: value.node.frontmatter.introduction,
      aim: value.node.frontmatter.aim,
      method: value.node.frontmatter.method,
      remark: value.node.frontmatter.remark,
      html: value.node.html
    }
  })
  return (
    <Layout sideList={studiesList} setSideCurrent={setShown} pathName={location.pathname}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>{studiesData[shown].title}</h2>
        </div>
        <span className={styles.mentor}>멘토 {studiesData[shown].mentor}</span>
        <h3>소개</h3>
        <p>{studiesData[shown].introduction}</p>
        <h3>학습 목표</h3>
        <p>{studiesData[shown].aim}</p>
        <h3>진행 방식</h3>
        <p>{studiesData[shown].method}</p>
        <h3>주별 계획</h3>
        {renderHTML(studiesData[shown].html)}
        <h3>비고</h3>
        <p>{studiesData[shown].remark}</p>

      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/studies/"}}, sort: {fields: frontmatter___category, order: ASC}) {
    edges {
      node {
        frontmatter {
          category
          title
          mentor
          introduction
          aim
          method
          remark
        }
        html
      }
    }
  }
}
`
