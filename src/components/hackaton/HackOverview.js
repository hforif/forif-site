import React from "react"
// import ReactModal from 'react-modal';
import styles from "./HackOverview.module.css"

const HackOverview = ({ year }) => {
    const clicked_year = require(`../../hackathon/hackathon_${year}.json`);
    const semester_1st = clicked_year.semester.first;
    const semester_2nd = clicked_year.semester.second;
    
    return (
        <div>
        <h3 className={styles.semester}>1학기</h3>
        <div className={styles.productCells}>
            <Product
                semester = {semester_1st}
            />
        </div>
        <hr/>
        <h3 className={styles.semester}>2학기</h3>
        <div className={styles.productCells}>
            <Product
                semester = {semester_2nd}
            />
        </div>
        </div>
    )
}

const Product = ({semester}) => {
    return ( semester.map((hackResult, index) =>
        <div className={styles.productCell} key={index}>
            <img className={styles.productImage} src={require('../../images/fire.png')} alt=""/ >
            <p className={styles.productName}>{hackResult.name}</p>
        </div>   
    ))
}

export default HackOverview;
