import React from "react"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerTextWrapper}>
        <p>한양대학교 프로그래밍 동아리 FORIF</p>
        <p>010-0000-0000 | MON - SUN 09:00 ~ 17:00 | email@gamil.com</p>
      </div>
    </div>
  )
}
