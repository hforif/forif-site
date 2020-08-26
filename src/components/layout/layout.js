import React, { useEffect, useRef, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import "./reset.css"
import styles from "./layout.module.css"

export default function Layout({ sideList, setSideCurrent, pathName, children }) {
  // for SSR rendering
  const [width,setWidth] = useState(1500);


  useEffect(() => {

    const handleWidth = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWidth)
    return () => {
      window.removeEventListener("resize", handleWidth)
    }
  })

  /*How to make Scroll Event*/
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("scroll", onScrollEvent)
    return () => window.removeEventListener("scroll", onScrollEvent)
  }, [])

  const headerRef = useRef(null)
  const bodyRef = useRef(null)
  const onScrollEvent = (e) => {
    headerRef.current.style.top = e.srcElement.scrollingElement.scrollTop === 0 ? `0px` : `-400px`
  }


  return (
    <div>
      <Header width={width} pathName={pathName} headerRef={headerRef}/>
      {sideList !== 0 &&
      <div className={styles.sidebar}><Sidebar width={width} sideList={sideList} setSideCurrent={setSideCurrent}/>
      </div>}

      <div className={styles[`bodyWrapper${(sideList === 0) ? `None` : ``}`]} ref={bodyRef}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
Layout.defaultProps = {
  sideList: [],
  setSideCurrent: (pressed) => {
    console.log(pressed)
  },
  pathName: null
}
