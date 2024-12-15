import React from 'react';
import { useState } from 'react';
import styles from './head.module.css';
import { Link } from 'react-router-dom';
export default function Head() {
    const [butMenu, setButMenu] = useState(false)
    return (
        <div>
            <div className={styles.boxMain}>
                <div className={styles.boxNameSite}>
                    <div className={styles.boxMenu}>
                        <img src="https://i.imgur.com/mHzPIZP.png" alt="" className={styles.menuImg} onClick={() => {
                            setButMenu(prev => !prev)
                        }} />

                    </div>
                    <Link to={"/"}>
                        <div className={styles.nameSite}>
                            <img src="https://i.imgur.com/REHx2zs.png" alt="" className={styles.mainLogo} />
                            <h1>Atom</h1>
                        </div>
                    </Link>
                    <div className={styles.boxButNavig}>
                        <button className={styles.butNavigDropdown}>
                            <p className={styles.textNavigDropdown}>
                                Products
                            </p>
                            <div className={styles.boxProducts}>
                                <a href="" className={styles.linksProduct}>For Everyone</a>
                                <a href="" className={styles.linksProduct}>For Teams</a>
                                <a href="" className={styles.linksProduct}>For Enterprises</a>
                                <a href="" className={styles.linksProduct}>For Education</a>
                            </div>
                        </button>
                        <button className={styles.butNavig}>
                            Company
                        </button>
                    </div>
                </div>
                <div>
                    <Link to={"/Sing_in"}>
                        <button className={styles.butNavig}>
                            Sing in
                        </button>
                    </Link>
                    <Link to={"/Sing_up"}>
                        <button className={styles.butNavig}>
                            Sing up
                        </button>
                    </Link>
                </div>
            </div>
            <div className={butMenu ? styles.butMenuOn : styles.butMenuOff}>
                <button>Проєкт</button>
                <button>Чат</button>
                <button>Ещё фигня какая-то</button>
            </div>
        </div>
    )
}
