import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/404page/NotFoundPage';
import Home from './pages/home/Home';
import Questions from './pages/questions/Questions';
import Results from './pages/results/Results';
import './App.css';
import { useState } from 'react';
import { Answers } from './modules';

// import { useState } from 'react';

const App: React.FC = () => {


    const [userAnswers, setUserAnswers] = useState<Answers[]>([]);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route
                path='/questions'
                element={
                    <Questions
                        userAnswers={userAnswers}
                        setUserAnswers={setUserAnswers}
                    />
                }
            />
            <Route path='*' element={<NotFound />} />
            <Route
                path='/results'
                element={<Results userAnswers={userAnswers} />}
            />
        </Routes>
    );
};

export default App;
