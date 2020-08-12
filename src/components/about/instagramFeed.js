import React from "react"
import styles from "./instagramFeed.module.css"

function Feed({ thumnail, link }) {
    return (
        <div className={styles.feed}>
            <a href={link}>
                <img src={thumnail} alt="이미지를 찾을 수 없습니다." />
            </a>
        </div>
    );
}

export default Feed;