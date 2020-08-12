import React, {useState} from "react"
import styles from './sidebar.module.css'

export default function Sidebar ({sideList, setSideCurrent}){
  const [shown, setShown] = useState(0);
  const onClickEvent = (pressed)=>()=>{
    setSideCurrent(pressed);
    setShown(pressed);
  }
  return(
    <div className={styles.sidebarWrapper}>
      <ul>
        {sideList.map((item, index)=><li key={index} ><button className={styles[`sideMenu${(shown === index) ? `On` : `Off`}`]} onClick={onClickEvent(index)}>{item}</button></li>)}
      </ul>
    </div>
  )
}