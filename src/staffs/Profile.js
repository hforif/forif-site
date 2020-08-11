import React from "react"
import styles from "./Profile.module.css"
import profileInfo from "./profileInfo.json"

function Profile () {
    const managerList = profileInfo.semester.first.manager;
    const mentoList = profileInfo.semester.first.mento;

    return (
        <div className={styles.profileSection}>
            <h3 className={styles.semester}>1학기</h3>
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
            <hr/>
        </div>
    )
}

const ProfileCell = ({people}) => {
    return ( people.map((person, index ) =>
        <div key={index} className={styles.profileCell}>
            <img src={ require('../images/fire.png') } alt="#" className={styles.profileImage}/>
            <p className={styles.personName}>{person.name}</p>
            <p className={styles.personPosition}>{person.position}</p>
        </div>
    ))
} 


export default Profile;