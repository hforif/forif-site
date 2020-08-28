import React from "react"
import styles from "./footer.module.css"
import styled from "styled-components"

const FooterWrapper = styled.div`
  height: 130px;
  width: 100%;
  background-color: #AAAAAA;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.sideList ? `40px`: `0px` };
  @media all and (min-width:767px) {
    margin-bottom: 0px;  
  }
`

export default function Footer({ sideList }) {
  return (
    <FooterWrapper sideList={sideList}>
      <div className={styles.footerTextWrapper}>
        <p>한양대학교 프로그래밍 동아리 FORIF</p>
        <p>010-0000-0000 | MON - SUN 09:00 ~ 17:00 | email@gamil.com</p>
      </div>
    </FooterWrapper>
  )
}
