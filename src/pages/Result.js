import React from 'react'
import cls from '../styles/result.module.css'

export default function Result({mark,totalMark}) {
    return (
        <React.Fragment>
            <div className={cls.result}>
                <div>
                    <h2>Result</h2>
                    <p>You score is {mark} out of {totalMark}</p>
                </div>
            </div>
        </React.Fragment>
    )
}
