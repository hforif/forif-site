import React from "react"
import styles from "./HackOverview.module.css"
import Modal from 'react-modal';

const altImage = require('../../images/fire.png')


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

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }

    return ( semester.map((hackResult, index) =>
        
        
        <div className={styles.productCell} key={index}>
            <img className={styles.productImage} src="https://avatars3.githubusercontent.com/u/52434876?s=460&u=5e3fd210fe8ff302d81c0ed2cf64b865eb99665e&v=4/" alt={altImage} onClick={openModal}/>
            <p className={styles.productName}>{hackResult.name}</p>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                // className={styles.productModal}
                // overlayClassName={styles.productOverlay}
                style={{
                    overlay: {
                        backgroundColor: 'transparent'
                    },
                    content: {
                        height: '80vh',
                        width: '70vw',
                        top : '5%',
                        left: '15%',
                        // right : 'auto',
                        // bottom : 'auto',
                        // marginRight : '-50%'
                    }
                }}  
            >
                <img className={styles.modalImage} src="https://avatars3.githubusercontent.com/u/52434876?s=460&u=5e3fd210fe8ff302d81c0ed2cf64b865eb99665e&v=4/" alt={altImage}></img>
                <h2 className={styles.modalProductName}>{hackResult.name}</h2>
                <h3 className={styles.modalTeamName}>{hackResult.teamName}</h3>
                <h4 className={styles.modalTeamMember}>{hackResult.member}</h4>
                <p className={styles.modalSummary}>{hackResult.summary}</p>
                <p className={styles.modalDesc}>{hackResult.desc}</p>
            </Modal>
        </div>   
    ))
}



export default HackOverview;
