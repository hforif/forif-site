import React from "react"
import styles from "./Profile.module.css"
// import profileInfo from "./profileInfo.json"

function Profile ({year}) {
    const clicked_year = require(`../staffs/staffs_${year}.json`);
    const semester_1st = clicked_year.semester.first;
    const semester_2nd = clicked_year.semester.second;

    return (
        <div className={styles.profileSection}>
            <h3 className={styles.semester}>1학기</h3>
            <SemesterBlock
                semester = {semester_1st}
            />
            <hr/>
            <h3 className={styles.semester}>2학기</h3>
            <SemesterBlock
                semester = {semester_2nd}
            />
        </div>
    )
}

const SemesterBlock = ({semester}) => {
    const managerList = semester.manager;
    const mentoList = semester.mento;

    return (
        <div className={styles.semesterSection}>
                <h4 className={styles.jobTitle}>운영진</h4>
                <div className={styles.profileCells}>
                    <ProfileCell
                        people = {managerList}
                    />
                </div>
                <h4 className={styles.jobTitle}>멘토</h4>
                <div className={styles.profileCells}>
                    <ProfileCell
                        people = {mentoList}
                    />
                </div>
        </div>
    )
}

const ProfileCell = ({people}) => {
    return ( people.map((person, index ) =>
        <div key={index} className={styles.profileCell}>
            <img src={ require('../../images/fire.png') } alt="#" className={styles.profileImage}/>
            <p className={styles.personName}>{person.name}</p>
            <p className={styles.personPosition}>{person.position}</p>
        </div>
    ))
} 


export default Profile;