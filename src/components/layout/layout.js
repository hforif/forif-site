import React, {useEffect, useRef} from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import "./reset.css"
import styles from "./layout.module.css"

export default function Layout({ sideList, setSideCurrent,pathName, children }) {

  /*How to make Scroll Event*/
  useEffect(()=>{
    window.addEventListener('scroll',onScrollEvent);
    return ()=>window.removeEventListener('scroll',onScrollEvent);
  },[]);
  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const onScrollEvent = (e) => {
    headerRef.current.style.top = e.srcElement.scrollingElement.scrollTop === 0 ? `0px` : `-60px`;
  }

  return (
    <div>
      <Header pathName={pathName} headerRef={headerRef}/>
      {sideList !== 0 && <Sidebar sideList={sideList} setSideCurrent={setSideCurrent}/>}
      <div className={styles[`bodyWrapper${(sideList === 0) ? `None` : ``}`]} ref={bodyRef}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
Layout.defaultProps = {
  sideList: [],
  setSideCurrent: (pressed) => {
    console.log(pressed);
  },
  pathName: null,
}