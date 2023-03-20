import React, { useState } from 'react';
import './results.scss';
import { Answers } from '../../modules';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';


import './results.scss';
import { GiCrossMark, GiCheckMark } from 'react-icons/gi';

interface Props {
    userAnswers: Answers[];
}

const Results = ({ userAnswers }: Props) => {
    console.log(userAnswers);
    const Navigate = useNavigate();

    let correctCount = 0;
    userAnswers.forEach((answer) => {
        const selectedAnswer = answer.answers.find(
            (a) => a.id === answer.users_answer.answer_id
        );
        if (selectedAnswer?.correct) {
            correctCount++;
        }
    });
    const scorePercent = Math.round((correctCount / userAnswers.length) * 100);

    const [showAnswers, setShowAnswers] = useState(false);

    const toggleAnswers = () => {
        setShowAnswers(!showAnswers);
    };

    const backHome = () => {
        Navigate('/');
        window.location.reload();
    };

    return (
        <div className='results'>
            <div className='score'>
                <h2 className='score__title'>YOUR SCORE</h2>
                <div className='score__count'>
                    {correctCount} out of {userAnswers.length}
                </div>
                <h1 className='score__percent'>{scorePercent}%</h1>
                <div className='score__text'>
                    {scorePercent === 100
                        ? 'Perfect! Hard work pays off!'
                        : scorePercent >= 80
                        ? 'Well done! almost perfect. Can you make it perfect?'
                        : scorePercent >= 70
                        ? 'Not bad, but you can do better!'
                        : scorePercent >= 50
                        ? 'Well, good, but maybe study a little more!'
                        : 'Well, you need some serious studying to do!'}
                </div>
            </div>
            <div className='buttons'>
                <Button color='$purple' onClick={toggleAnswers}>
                    {showAnswers ? 'Hide Answers' : 'Show Answers'}
                </Button>
                <Button color='$purple' onClick={backHome}>
                    Try Again
                </Button>
                <Button color='$purple' onClick={backHome}>
                    Back to Trivia
                </Button>
            </div>

            {showAnswers && (
                <div className='answers'>
                    {userAnswers.map((answer, index) => {
                        const selectedAnswer = answer.answers.find(
                            (a) => a.id === answer.users_answer.answer_id
                        );

                        return (
                            <><div
                            className='answers__card'
                            key={answer.question_id}
                        >
                            <div
                                className={`answers__question ${
                                    selectedAnswer?.correct
                                        ? 'answers__question--correct'
                                        : 'answers__question--incorrect'
                                }`}
                            >
                                <h3>{answer.question}</h3>

                                <p>
                                    {index + 1}/{userAnswers.length}
                                </p>
                            </div>
                            <div className='answers__possibleAnswers'>
                                <ul>
                                    {answer.answers.map(
                                        (possibleAnswer) => (
                                            <li key={possibleAnswer.id}>
                                                {possibleAnswer.answer}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <p>
                                {index + 1}/{userAnswers.length}
                            </p>
                        </div>
                        <div className='answers__possibleAnswers'>
                            <ul>
                                {answer.answers.map((possibleAnswer) => {
                                    // if user answer and correct answer matches
                                    if (
                                        possibleAnswer.correct &&
                                        possibleAnswer.id ===
                                            answer.users_answer.answer_id
                                    ) {
                                        return (
                                            <li key={possibleAnswer.id}>
                                                <div className='answers__option'>
                                                    {possibleAnswer.answer}
                                                    <GiCheckMark color='green' />
                                                </div>
                                            </li>
                                        );
                                        // if user answer is incorrect but it matches answer option
                                    } else if (
                                        !possibleAnswer.correct &&
                                        possibleAnswer.id ===
                                            answer.users_answer.answer_id
                                    ) {
                                        return (
                                            <li key={possibleAnswer.id}>
                                                <div className='answers__option'>
                                                    {possibleAnswer.answer}
                                                    <GiCrossMark color='red' />
                                                </div>
                                            </li>
                                        );
                                        // if the answer option is correct but not selected by user
                                    } else if (possibleAnswer.correct) {
                                        return (
                                            <li key={possibleAnswer.id}>
                                                <div className='answers__option'>
                                                    {possibleAnswer.answer}
                                                    <GiCheckMark color='green' />
                                                </div>
                                            </li>
                                        );
                                        // if none of the above is true returns simple li element
                                    } else {
                                        return (
                                            <li key={possibleAnswer.id}>
                                                {possibleAnswer.answer}
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div></>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Results;