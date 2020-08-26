import React, { useEffect, useState } from "react"
import styles from './sidebar.module.css'

export default function Sidebar ({width, sideList, setSideCurrent}){
  const [shown, setShown] = useState(0);
  const [bottomOn, setBottomOn] = useState(false);
  const onClickEvent = (pressed)=>()=>{
    setSideCurrent(pressed);
    setShown(pressed);
  }
  useEffect(()=>{
    if(width<767){
      setBottomOn(true);
    } else {
      setBottomOn(false);
    }
  },[])
  useEffect(()=>{
    if(width<767){
      setBottomOn(true);
    } else {
      setBottomOn(false);
    }
  },[width])

  return(
    <div>
      {
        !bottomOn &&
          <div className={styles.sidebarWrapper}>
            <ul>
              {sideList.map((item, index)=><li key={index} ><button className={styles[`sideMenu${(shown === index) ? `On` : `Off`}`]} onClick={onClickEvent(index)}>{item}</button></li>)}
            </ul>
          </div>

      }
      {
        bottomOn &&
          <div className={styles.bottomSidebarWrapper}>
            <ul>
            {sideList.map((item, index)=><li key={index} ><button className={styles[`sideMenu${(shown === index) ? `On` : `Off`}`]} onClick={onClickEvent(index)}>{item}</button></li>)}
            </ul>
          </div>
      }
    </div>
  )
}