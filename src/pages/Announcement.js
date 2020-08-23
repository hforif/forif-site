import React, { useEffect, useState } from "react"
import renderHTML from "react-render-html"
import { useTransition, useSpring, animated } from "react-spring"

import Layout from "../components/layout/layout"
import styles from "./Announcement.module.css"


export default function Studies({ data, location }) {
  const edges = data.allMarkdownRemark.edges
  const [onClickListener, setOnClickListener] = useState(-1)
  const setIsVisibleList = []

  useEffect(() => {
    setIsVisibleList.map((func, index) => {
      if (index === onClickListener) {
        func(1)
      } else {
        func(0)
      }
    })
  }, [onClickListener])

  return (
    <Layout sideList={0} pathName={location.pathname}>
      <div className={styles.wrapper}>
        {edges.map((value, index) => {
          return (
            <TemplatesWrapper value={value} index={index} key={index} setIsVisibleList={setIsVisibleList}
                              setOnClickListener={setOnClickListener}/>
          )
        })}
      </div>
    </Layout>
  )
}

function TemplatesWrapper({ value, index, setIsVisibleList, setOnClickListener }) {
  const [isVisible, setIsVisible] = useState(0)
  setIsVisibleList.push(setIsVisible)
  const onClickResetEvent = () => setOnClickListener(-1)
  const onClickEvent = () => setOnClickListener(index)

  return (
    <div>
      <PreviewTemplate frontmatter={value.node.frontmatter} isVisible={isVisible} onClickEvent={onClickEvent}
                       onClickResetEvent={onClickResetEvent}/>
      {(isVisible === 1) && <Template
        key={index}
        isVisible={isVisible}
        frontmatter={value.node.frontmatter}
        html={value.node.html}
      />}

    </div>
  )
}

function PreviewTemplate({ frontmatter, isVisible, onClickEvent, onClickResetEvent }) {
  return (
    <div onClick={() => {
      if (!isVisible) onClickEvent()
      else onClickResetEvent()
    }} className={styles.previewWrapper}>
      <span className={styles.previewFrontmatter}>{frontmatter.date}</span>
      <h3 className={styles.previewFrontmatter}>{frontmatter.title}</h3>
      <span className={styles.previewFrontmatter}><i>posted by {frontmatter.create}</i></span>
    </div>
  )
}

function Template({ frontmatter, html }) {
  const slideAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: {
      opacity: 0,
      transform: 'translateY(-50px)'
    }
  });
  return (
    <animated.div style={slideAnimation}>
    <div className={styles.announcementWrapper}>
      <div className={styles.frontmatter}>
        <h2
          style={{
            margin: "5px"
          }}
        >
          {frontmatter.title}
        </h2>
        <span
          style={{
            color: "gray",
            fontSize: "0.8rem"
          }}
        >
          {frontmatter.date}
        </span>
        <br/>
        <span
          style={{
            color: "gray",
            fontSize: "0.8rem"
          }}
        >
          <i>posted by {frontmatter.create}</i>
        </span>
      </div>
      {renderHTML(html)}
    </div>
    </animated.div>
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
        html
      }
    }
  }
}
`
