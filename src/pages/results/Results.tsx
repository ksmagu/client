import React from 'react';
import { Answers } from '../../modules';
import './results.scss';


interface Props {
    userAnswers: Answers[];
}

const Results = ({ userAnswers }: Props) => {
    console.log(userAnswers);
    return <div className='results'>Results</div>;
};

export default Results;
