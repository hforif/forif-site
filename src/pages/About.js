import React from "react"
import Layout from "../components/layout"
import styles from "./About.module.css"

export default function Studies({ location }) {
  return (
    <Layout sideList={0} pathName={location.pathname}>
      <div className={styles.layoutWrapper}>
        <div className={styles.imageWrapper}>
          <img src={require("../images/mainImage.jpg")} />
          <div className={styles.textWrapperHorizontal}>
            <div className={styles.textFormat}>
              <p>
                <span>FORIF</span>는 정말 개쩌는 프로그래밍 동아리 입니다. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quod
                necessitatibus rem porro minima, quidem eos recusandae. Ea
                aliquam, aspernatur fugit animi suscipit, ad cum, laudantium
                impedit quam nemo dolores expedita?
              </p>
            </div>
            <div className={styles.textFormat}>
              <p>
                <span>We are FORIF!</span>
                FORIF will make your coding-dream true! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Nostrum enim debitis esse
                eligendi, cum temporibus quo facere, rerum dolorem dolorum,
                explicabo incidunt iste expedita labore veniam amet quidem atque
                deserunt?
              </p>
            </div>
          </div>
        </div>
        <div className={styles.textWrapperVertical}>
          <div className={styles.textFormat}>
            <p>
              <span>FORIF</span>는 정말 개쩌는 프로그래밍 동아리 입니다. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quod
              necessitatibus rem porro minima, quidem eos recusandae. Ea
              aliquam, aspernatur fugit animi suscipit, ad cum, laudantium
              impedit quam nemo dolores expedita?
            </p>
          </div>
          <div className={styles.textFormat}>
            <p>
              <span>We are FORIF!</span>
              FORIF will make your coding-dream true! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Nostrum enim debitis esse
              eligendi, cum temporibus quo facere, rerum dolorem dolorum,
              explicabo incidunt iste expedita labore veniam amet quidem atque
              deserunt?
            </p>
          </div>
        </div>
        <div className={styles.historyWrapper}>
          <h3>HISTORY</h3>
          <ul className={styles.historyList}>
            <li>
              <p>
                <span>2020</span>
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <p>
                <span>2019</span>
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <p>
                <span>2018</span>
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <p>
                <span>2017</span>
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <p>
                <span>2016</span>
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <p>
                <span>2015</span>
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <p>
                <span>2014</span>
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
