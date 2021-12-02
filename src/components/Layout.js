import React from 'react'
import cls from '../styles/layout.module.css'

export default function Layout({children}) {
    return (
        <React.Fragment>
            <div className={cls.main}>
                {children}
            </div>
        </React.Fragment>
    )
}
