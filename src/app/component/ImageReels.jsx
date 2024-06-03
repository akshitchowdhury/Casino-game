"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonFunc from './ButtonFunc';
import Image from 'next/image';
import './ImageReels.css';
import GameRules from './GameRules';

export default function ImageReels() {
    const rewards = 100;
    const [number, setNumber] = useState(0);
    const [reel3, setReel3] = useState(0);
    const [luckyNumber, setLuckyNumber] = useState(0);
    const [points, setPoints] = useState(50);
    const [balance, setBalance] = useState(rewards);
    const [loading, setLoading] = useState(true);
    const [showRules, setShowRules] = useState(false);

    useEffect(() => {
        setNumber(0);
        setLuckyNumber(-1);
        setReel3(-2);
        setLoading(false);
        setShowRules(false);
    }, []);

    useEffect(() => {
        if (luckyNumber === number && reel3 === luckyNumber && reel3 === number && points !== 0) {
            setBalance(prevBalance => prevBalance + 100);
        }
    }, [luckyNumber, number, reel3, points]);

    // Function to handle opening modal
    const handleOpenRules = () => {
        setShowRules(true);
    };

    // Function to handle closing modal
    const handleCloseRules = () => {
        setShowRules(false);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-zinc-900 bg-opacity-900 text-white">
                <div className="text-2xl md:text-4xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center 
        min-h-screen bg-zinc-900 bg-opacity-90 text-white p-4">
        <div className="text-xl md:text-2xl absolute top-6 left-6">Balance: {balance}</div>
        
        <button 
            className="bg-inherit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg my-2 shadow-md transition duration-300 ease-in-out"
            onClick={handleOpenRules}
        >
            Game Rules
        </button>
        
        {showRules && (
            <GameRules 
                title="Reel Wheel" 
                objective="Objective of the Game" 
                image={`/assets/${-2}.jpg`}
                open={showRules} 
                onClose={handleCloseRules} 
            />
        )}
    
        <div className="mt-16 text-lg md:text-xl text-center md:text-left w-full">
            {points === 0 ? (
                <p>Game Over!</p>
            ) : (
                <div className="flex flex-col md:flex-row items-center 
                w-[800px] mx-[20%] align-middle
                justify-center gap-4 p-2 md:p-4 border border-gray-700 rounded-md">
                    <div className="text-center">
                        <p className="text-lg">Reel 1:</p>
                        <AnimatePresence mode='wait'>
                            <motion.div 
                                key={luckyNumber}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="my-2">
                                    <Image className="w-[150px] md:w-[200px] h-[200px] md:h-[300px]" src={`/assets/${luckyNumber}.jpg`} alt="Lucky Number" width={200} height={300} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                    <div className="text-center mx-4">
                        <p className="text-lg">Reel 2:</p>
                        <AnimatePresence mode='wait'>
                            <motion.div 
                                key={number}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="my-2">
                                    <Image className="w-[150px] md:w-[200px] h-[200px] md:h-[300px]" src={`/assets/${number}.jpg`} alt="Number" width={200} height={300} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                    <div className="text-center mx-4">
                        <p className="text-lg">Reel 3:</p>
                        <AnimatePresence mode='wait'>
                            <motion.div 
                                key={reel3}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="my-2">
                                    <Image className="w-[150px] md:w-[200px] h-[200px] md:h-[300px]" src={`/assets/${reel3}.jpg`} alt="Reel 3" width={200} height={300} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </div>
    
        {luckyNumber === number && reel3 === luckyNumber && reel3 === number && points !== 0 ? (
            <div className="text-center mt-4">
                <div className="text-lg md:text-lg absolute top-[10%] left-[20%]">Congratulations! You Won <br /> Total Coins: {points + 100}</div>
                <div className="mt-12">
                    <ButtonFunc 
                        balance={balance} 
                        points={points} 
                        rewards={rewards}
                        setBalance={setBalance} 
                        setPoints={setPoints} 
                        number={number}
                        setNumber={setNumber}
                        luckyNumber={luckyNumber}
                        setLuckyNumber={setLuckyNumber}
                        reel3={reel3}
                        setReel3={setReel3}
                    />
                </div>
            </div>
        ) : (
            <div className="text-center mt-20">
                <ButtonFunc 
                    balance={balance} 
                    points={points} 
                    rewards={rewards}
                    setBalance={setBalance} 
                    setPoints={setPoints} 
                    number={number}
                    setNumber={setNumber}
                    luckyNumber={luckyNumber}
                    setLuckyNumber={setLuckyNumber}
                    reel3={reel3}
                    setReel3={setReel3}
                />
            </div>
        )}
    </div>
    
    );
}
