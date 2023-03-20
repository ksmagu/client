import React, { useState } from 'react';
import Button from '../../components/button/Button';
import BigButton from '../../components/bigButton/BigButton';
import Monster from '../../monster.png';
import './home.scss';
import { useNavigate } from 'react-router-dom';


interface HomeProps {
    selectedTopic: string;
    setSelectedTopic: React.Dispatch<React.SetStateAction<string>>;
  }

const Home: React.FC<HomeProps> = ({selectedTopic, setSelectedTopic}) => {
    const [activeButton, setActiveButton] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const Navigate = useNavigate();

    const handleClick = (event: React.FormEvent<Element>) => {
        // Listening to click and setting topic of clicked button
        const topic = event.currentTarget.textContent || '';
        console.log(`Selected topic: ${topic}`);
    
        // Setting the active button and topic
        setActiveButton(topic);
        if (topic === 'I know it all') {
            setSelectedTopic('All');
        } else {
            setSelectedTopic(topic);
        }
        // Clearing error message
        setErrorMessage('');
    };

    const handleStartClick = () => {
        if (!selectedTopic) {
            // Show error message if topic is not selected
            setErrorMessage(
                'Just select one of the orange buttons above!:)'
            );
            return;
        }
        // Navigate to the Questions page with the selected topic
        Navigate(`/questions?topic=${selectedTopic}`);
        console.log(`Starting trivia for ${selectedTopic}`);
    };

    return (
        <>
            <div className='wrapper'>
                <div className='topHalf'>
                    <img className='topHalf__monster' src={Monster} alt='img' />
                    <div className='topHalf__welcome'>
                        <h2>WELCOME </h2>
                        <h2>to</h2>
                        <h1>TECH TRIVIA</h1>
                    </div>
                    <img className='topHalf__monster' src={Monster} alt='img' />
                </div>
                <div className='bottomHalf'>
                    <h1 className='bottomHalf__start'>
                        Let's get started! Select a topic:
                    </h1>
                    <div className='bottomHalf__topics'>
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
                    {/* Showing error message if topic is not selected */}
                    {errorMessage ? (
                        <p className='bottomHalf__error'>{errorMessage}</p>
                    ):    <p className='bottomHalf__error'></p>}
                </div>
            </div>
        </>
    );
};

export default Home;
