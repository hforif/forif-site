import React, { useEffect, useState } from "react"
import styles from "./header.module.css"
import {useSpring, animated} from "react-spring"

import logo from "../../images/logo.svg"
import { Link } from "gatsby"
import HamburgerMenu from "react-hamburger-menu"

export default function Header({ width, pathName, headerRef }) {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(()=>{
    if(width>767){
      setIsOpen(false);
    }
  },[width])
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const menuSlide = useSpring({
    opacity: isOpen ? 1 : 0,
    marginTop: isOpen ? 0 : -1000,
  });
  const logoSlide = useSpring({
    opacity: !isOpen ? 1 : 0,
    marginTop: !isOpen ? 0 : -10,
  });

  return (
    <div className={styles.wrapper} ref={headerRef}>
      {!isOpen &&
      <animated.div className={styles.logoWrapper} style={logoSlide}>
        <Link to={`/`}>
          <img src={logo} alt={`Forif Logo`} className={styles.logo}/>
        </Link>
      </animated.div>
      }

      {isOpen &&
      <animated.div className={styles.menuWrapperMobile} style={menuSlide}>
        <MenuList pathName={pathName}/>
      </animated.div>
      }

      <div className={styles.menuWrapper}>
        <MenuList/>
      </div>
      <div className={styles.hamburgerMenu}>
        <div className={styles.hamburgerMenuWrapper}>
          <HamburgerMenu isOpen={isOpen} menuClicked={handleClick} width={24} height={20} color={'#898989'}/>
        </div>
      </div>

    </div>
  )
}
function MenuList({pathName}){
  return (
    <ul>
      <li><Link to={"/Announcement"}
                className={styles[`menuLink${pathName === `/Announcement` ? `On` : `Off`}`]} style={{textDecoration:'none'}}>Announcement</Link>
      </li>
      <li><Link to={"/Staffs"}
                className={styles[`menuLink${pathName === `/Staffs` ? `On` : `Off`}`]} style={{textDecoration:'none'}}>Staffs</Link>
      </li>
      <li><Link to={"/Studies"}
                className={styles[`menuLink${pathName === `/Studies` ? `On` : `Off`}`]} style={{textDecoration:'none'}}>Studies</Link></li>
      <li><Link to={"/Hackathon"}
                className={styles[`menuLink${pathName === `/Hackathon` ? `On` : `Off`}`]} style={{textDecoration:'none'}}>Hackathon</Link></li>
    </ul>
  )
}
