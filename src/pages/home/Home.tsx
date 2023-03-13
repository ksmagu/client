import React, { useState } from 'react';
import Button from '../../components/button/Button';
import BigButton from '../../components/bigButton/BigButton';
import Monster from '../../monster.png';
import './home.scss';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [selectedTopic, setSelectedTopic] = useState<string>('');
    const [activeButton, setActiveButton] = useState<string>('');
    const navigate = useNavigate();

    const handleClick = (event: React.FormEvent<Element>) => {
        // Listening to click and setting topic of clicked button
        const topic = event.currentTarget.textContent || '';
        console.log(`Selected topic: ${topic}`);

        // Set the active button and topic
        setActiveButton(topic);
        setSelectedTopic(topic);
    };

    const handleStartClick = () => {
        // Navigate to the Questions page with the selected topic
        navigate(`/questions?topic=${selectedTopic}`);
        console.log(`Starting trivia for ${selectedTopic}`);
    };

    return (
        <>
            <div className='wrapper'>
                <div className='topHalf'>
                    <img className='monster' src={Monster} alt='img' />
                    <div className='welcome'>
                        <h2>WELCOME </h2>
                        <h2>to</h2>
                        <h1>TECH TRIVIA</h1>
                    </div>
                    <img className='monster' src={Monster} alt='img' />
                </div>
                <div className='bottomHalf'>
                    <h1 className='start'>
                        Let's get started! Choose a topic:
                    </h1>
                    <div className='topics'>
                        <Button
                            color='$orange'
                            onClick={handleClick}
                            active={activeButton === 'HTML'}
                        >
                            HTML
                        </Button>
                        <Button
                            color='$orange'
                            onClick={handleClick}
                            active={activeButton === 'CSS'}
                        >
                            CSS
                        </Button>
                        <Button
                            color='$orange'
                            onClick={handleClick}
                            active={activeButton === 'React'}
                        >
                            React
                        </Button>
                        <Button
                            color='$orange'
                            onClick={handleClick}
                            active={activeButton === 'JavaScript'}
                        >
                            JavaScript
                        </Button>
                        <Button
                            color='$orange'
                            onClick={handleClick}
                            active={activeButton === 'I know it all'}
                        >
                            I know it all
                        </Button>
                    </div>
                    <div>
                        <BigButton color='$yellow' onClick={handleStartClick}>
                            START
                        </BigButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
