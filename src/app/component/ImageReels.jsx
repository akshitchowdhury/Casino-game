"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonFunc from './ButtonFunc';
import Image from 'next/image';
import './ImageReels.css'
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
        setShowRules(false)
    }, []);

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
        <div className=" flex flex-col items-center justify-center min-h-screen bg-zinc-900 bg-opacity-900 text-white">
            <div className="text-2xl md:text-4xl absolute top-6 left-6">Balance: {balance}</div>
            <button onClick={handleOpenRules}>Open Game Rules</button>
            {
                showRules ? (
                    <GameRules 
                title="Your Game Title" 
                objective="Objective of the Game" 
                image={`/assets/${reel3}.jpg`}
                open={showRules} 
                onClose={handleCloseRules} 
            />
                ) : (
                    <>

                    </>
                )
            }
            
               
                <div className="my-16 text-xl md:text-2xl text-center md:text-left">
                    {points === 0 ? (
                        <p>
                            Game Over!
                        </p>
                    ) : (
                        <>
                        <div className="flex flex-col md:flex-row items-center gap-4 p-4 border border-gray-700 rounded-md">
           
                        <div className="text-xl md:text-2xl text-center md:text-left">
                    Reel1:
                    <AnimatePresence mode='wait'>
                                <motion.div 
                                    key={luckyNumber}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                    <div className="my-4">
                        <Image className="w-[300px] h-[400px]" src={`/assets/${luckyNumber}.jpg`} 
                        alt="Lucky Number" width={300} height={400} />
                    </div>
                    </motion.div>
                    </AnimatePresence>
                </div>
                        
                        <div className='mx-6 flex flex-col items-center'>
                            <p>Reel2:</p>
                            <AnimatePresence mode='wait'>
                                <motion.div 
                                    key={number}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className='mx-6'>
                                        <Image className="w-[300px] h-[400px]" 
                                        src={`/assets/${number}.jpg`} alt='Lets Go' width={300} height={400} />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className='mx-6 flex flex-col items-center'>
                            <p>Reel 3:</p>
                            <AnimatePresence mode='wait'>
                                <motion.div 
                                    key={reel3}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className='mx-6'>
                                        <Image className="w-[300px] h-[400px]" 
                                        src={`/assets/${reel3}.jpg`} alt='Lets Go' width={300} height={400} />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        </div>
                        </>
                    )}
                
            </div>
            {luckyNumber === number && reel3=== luckyNumber
            && reel3==number && points !== 0 ? (
                <>
                    <div className="text-xl md:text-2xl mb-4 text-center">
                        Congratulations! You Won <br /> Total Coins: {points + 100}
                    </div>
                    <div className="text-xl md:text-2xl mb-4 text-center">
                        Bonus Coins won : 100<br />  
                    </div>
                </>
            ) : (
                <div className="text-xl md:text-2xl mb-4 text-center">
                    
                    <ButtonFunc 
                        balance={balance} 
                        points={points} 
                        rewards={rewards}
                        setBalance={setBalance} 
                        setPoints={setPoints} 
                        number={number}
                        setNumber={setNumber}
                        luckyNumber= {luckyNumber}
                        setLuckyNumber= {setLuckyNumber}
                        reel3={reel3}
                        setReel3 = {setReel3}
                    />
                </div>
            )}
        </div>
    );
}
