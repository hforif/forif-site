import React from "react"
import styles from "./header.module.css"
import logo from "../images/logo.png"
import { Link } from "gatsby"

export default function Header({ pathName, headerRef }) {
  return (
    <div className={styles.wrapper} ref={headerRef}>
      <div className={styles.logoWrapper}>
        <a href={`/`}>
          <img src={logo} alt={`Forif Logo`} className={styles.logo}/>
        </a>
      </div>
      <div className={styles.menuWrapper}>
        <ul>
          <li><Link to={"/About"} className={styles[`menuLink${pathName === `/About` ? `On` : `Off`}`]}>About</Link>
          </li>
          <li><Link to={"/Announcement"} className={styles[`menuLink${pathName === `/Announcement` ? `On` : `Off`}`]}>Announcement</Link>
          </li>
          <li><Link to={"/Staffs"} className={styles[`menuLink${pathName === `/Staffs` ? `On` : `Off`}`]}>Staffs</Link>
          </li>
          <li><Link to={"/Studies"} className={styles[`menuLink${pathName === `/Studies` ? `On` : `Off`}`]}>Studies</Link></li>
          <li><Link to={"/Hackathon"} className={styles[`menuLink${pathName === `/Hackathon` ? `On` : `Off`}`]}>Hackathon</Link></li>
        </ul>
      </div>

    </div>
  )
}