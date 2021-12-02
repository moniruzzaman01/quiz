import React, { useState } from 'react'
import cls from '../styles/question.module.css'
import Result from './Result';

export default function Question() {
    const questions = [
		{
			questionText: 'What is the capital of Bangladesh?',
			answerOptions: [
				{ answerText: 'Rajshahi', isCorrect: false },
				{ answerText: 'Cumilla', isCorrect: false },
				{ answerText: 'Dhaka', isCorrect: true },
				{ answerText: 'Mymensingh', isCorrect: false },
			],
		},
		{
			questionText: 'How many devisions Bangladesh has?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '5', isCorrect: false },
				{ answerText: '7', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name of our first president?',
			answerOptions: [
				{ answerText: 'Sheikh Mujibur Rahman', isCorrect: true },
				{ answerText: 'Tajuddin Ahmed', isCorrect: false },
				{ answerText: 'Ziaur Rahman', isCorrect: false },
				{ answerText: 'Kamruzzaman', isCorrect: false },
			],
		}
	];
    const [currentQuestion,setQuestion]=useState(0)
    const [showResult,setShowResult]=useState(false)
    const [mark,setMark]=useState(0)
    
    function QstnNmbrHndlr(val){
        if(val){
            setMark(mark+1)
            console.log(mark)
        }
        const nextQuestion = currentQuestion+1
        if(nextQuestion>questions.length-1){
            setShowResult(true)
        }
        else{
            setQuestion(nextQuestion)
        }
    }
    return (
        <React.Fragment>
            {
            showResult?
            <Result mark={mark} totalMark={questions.length} />
            :
            <>
            <div className={cls.top}>
                <h2>Question {currentQuestion+1} out of {questions.length}</h2>
            </div>
            <div className={cls.questions}>
                <h3>{questions[currentQuestion].questionText}</h3>
                {
                questions[currentQuestion].answerOptions.map((answer)=>
                        
                    <ul>
                        <li onClick={()=>QstnNmbrHndlr(answer.isCorrect)} >{answer.answerText}</li>
                    </ul>
                )
                }
            </div>
            </>
            }
        </React.Fragment>
    )
}
