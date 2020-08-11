import React from "react"
import profileInfo from "./profileInfo.json"

function Profile () {

    const managerList = profileInfo.semester.first.manager;
    const a = managerList
    const index = 1;

    return (
        <div className="profileSection">
            <div>
                <h3>운영진</h3>
                <div>
                    <ProfileCell
                        managerList = {managerList}
                    />
                </div>
            </div>
            <hr/>
            <div>

            </div>
        </div>
    )
}

const ProfileCell = ({managerList}) => {
    const managerArr = managerList.map((person, index ) =>
        <div key={index}>
            <img src="#" alt=""/>
            <p>{person.name}</p>
            <p>{person.position}</p>
        </div>
    )
    

    return (
        <li>{managerArr}</li>
    )
} 


export default Profile;