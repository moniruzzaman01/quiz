import React from 'react'
import { Link } from 'react-router-dom'
import cls from '../styles/home.module.css'

export default function Home() {
    return (
        <React.Fragment>
            <div className={cls.landing}>
                <Link to="question">
                    <button className={cls.btn} >start</button>
                </Link>
            </div>
        </React.Fragment>
    )
}
