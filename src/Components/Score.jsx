import React from 'react';
import '../App.css';

const Score = ({ score, onNextQuestion }) => {
    return (
        <div>
            <h2>Results</h2>
            <h4>Your score: {score}</h4>
            <button onClick={onNextQuestion} 
                    className="btn btn-primary mt-2">
                Next
            </button>
        </div>
    );
};

export default Score;
