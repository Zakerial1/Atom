import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./sing_up.module.css"
export default function Sing_up() {
    const navigate = useNavigate()
    return (
        <div>
            <div className={styles.boxSing_up}>
                <div className={styles.boxName}>
                    Sing_up
                </div>
                <div className={styles.boxTextSing_in}>
                    <input className={styles.TextSing_up} type="text" placeholder='Login' />
                    <input className={styles.TextSing_up} type="text" placeholder='email' />
                    <input className={styles.TextSing_up} type="text" placeholder='Password' />
                    <input className={styles.TextSing_up} type="text" placeholder=' Double Password' />
                    <input className={styles.TextSing_up} type="text" placeholder='Number Phone' />
                </div>
                <Link>
                    <button className={styles.ButSing_up} onClick={() => {
                        navigate('/Taskbar')
                    }}
                    >
                        Regi
                    </button>
                    {/* сделать переход через useNavigate */}
                </Link>
                <button className={styles.ButSing_upHome} onClick={() => {
                    navigate('/')
                }}>
                    Home
                </button>
            </div>
        </div>
    )
}
