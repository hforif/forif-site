import React from "react"
import styles from "./HackOverview.module.css"

const HackOverview = ({ year }) => {
  // const clicked_year = require(`../../hackaton/hackaton_${year}.json`);
  return (
    <div>
      <h3>1학기</h3>
      <div>
        <Product />
      </div>
    </div>
  )
}

const Product = () => {
    return (
        <div>
            <img className={styles.productImage} src={require('../../images/fire.png')} alt=""/ >
            <p>뭐시기뭐시기</p>
        </div>
    )
}

export default HackOverview
