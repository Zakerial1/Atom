import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './sing_in.module.css'
export default function Sing_in() {
    const navigate = useNavigate()
    return (
        <div>
            <div className={styles.boxSing_in}>
                <div className={styles.boxName}>
                    Sing_in
                </div>
                <div className={styles.boxTextSing_in}>
                    <input type="text" placeholder='Email' className={styles.TextSing_in} />
                    <input type="text" placeholder='Password' className={styles.TextSing_in} />
                </div>
                <button className={styles.ButSing_in} onClick={()=>{
                    navigate('/Taskbar')
                }}>
                    Authorization
                </button>
                <button className={styles.butHome} onClick={()=>{
                    navigate('/')
                }}>
                    Home
                </button>
            </div>

        </div>
    )
}
