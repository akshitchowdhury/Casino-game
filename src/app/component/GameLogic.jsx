"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonFunc from './ButtonFunc';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';

export default function GameLogic() {
    const rewards = 1000;
    const [number, setNumber] = useState(""); 
    const [points, setPoints] = useState(10); 
    const [luckyNumber, setLuckyNumber] = useState(""); 
    const [balance, setBalance] = useState(rewards);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setNumber(Math.floor(Math.random() * 30) + 1);
        setLuckyNumber(Math.floor(Math.random() * 10) + 1);
        setLoading(false);
    }, []);

    const handleRandomGeneration = () => {
        const randomNum = Math.floor(Math.random() * 10) + 1;

        if (points === 0) {
            alert('Game Over');
            setNumber(points);   
            return;   
        } else {
            setNumber(randomNum);
            setPoints(points - 1);
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-zinc-900 bg-opacity-900 text-white">
                <div className="text-2xl md:text-4xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 bg-opacity-900 text-white">
            <div className='text-2xl md:text-4xl absolute top-14 left-20'>Balance: {balance}</div>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <p className="text-xl md:text-2xl">{`Your Lucky Number is: ${luckyNumber}`}</p>
                <p className="text-xl md:text-2xl">{points === 0 ? 'Use Stakes++ to increase your coins; else Hard Luck!' : (
                    <>
                    <p className='mx-6 flex flex-row'>Your Number:
                    <AnimatePresence mode='wait'>
                        <motion.span 
                            key={number}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                          <div className='mx-6'>   {number} </div>
                        </motion.span>
                    </AnimatePresence>
                    </p>
                    </>
                )}</p>
            </div>
            {luckyNumber === number && points !== 0 ? (
                <>
                    <div className="text-xl md:text-2xl mb-4">
                        Congratulations! You Won <br /> Total Coins: {points + 100}
                    </div>
                    <div className="text-xl md:text-2xl mb-4">
                        Bonus Coins won : 100<br />  
                    </div>
                    
                </>
            ) : (
                <div>
                    <p className="text-xl md:text-2xl mb-4">Coins Remaining: {points}</p>
                    <ButtonFunc 
                        balance={balance} 
                        points={points} 
                        rewards={rewards}
                        setBalance={setBalance} 
                        setPoints={setPoints} 
                        number={number}
                        setNumber={setNumber}
                        handleRandomGeneration={handleRandomGeneration}
                    />
                </div>
            )}
        </div>
    );
}
