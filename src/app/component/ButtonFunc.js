import React, { useState } from 'react'
import { FaArrowDown, FaArrowRight, FaArrowUp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ButtonFunc = ({balance,points,number, setNumber,
    luckyNumber, setLuckyNumber,
    setBalance, setPoints,
reel3, setReel3}) => {
    function lowBalAlert() {
        return alert("Low balance");
    }

    const handleBalanceMinus = () => {
        if (points > 10) {
            setBalance(balance + 10);
            setPoints(points - 10);
        } else {
            lowBalAlert();
        }
    }
    const handleBalancePlus = () => {
        if(balance>0){
            setBalance(balance - 10);
            setPoints(points + 10);
        }
        else{
            alert("Out of Balance! Restart Game")
        }
        
    }

    const handleRandomGeneration = () => {
        
        const randomNumber = generateUniqueRandomNumber(4);
        const randomLuckyNumber = generateUniqueRandomNumber(5);
        const randomReelNumber = generateUniqueRandomNumber(6);
    
        if (points === 0) {
            alert('Game Over');
            setNumber(points);   
            return;   
        } else {
            setNumber(randomNumber);
            console.log("Random Number: " + randomNumber)
            setLuckyNumber(randomLuckyNumber);
            console.log("Lucky Number: " + randomLuckyNumber)
            setPoints(points - 10);
            setReel3(randomReelNumber)
            console.log("Random reel: " + randomReelNumber)
        }
    }
    
    const generateUniqueRandomNumber = (max) => {
        const usedNumbers = []
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * max) + 1;
        } while (usedNumbers.includes(randomNumber));
        usedNumbers.push(randomNumber);
        return randomNumber;
    }
    
    return (
    <div className='flex flex-row -my-12'>
    <p>Coins Remaining: {points}</p>
      <button 
                        onClick={handleBalanceMinus}
                        className="flex flex-row bg-blue-500 hover:bg-blue-700 mx-12
                        hover:scale-105 transition ease-in-out duration-300
                         text-white font-bold py-2 px-4 rounded"
                    >
                        Stakes <FaArrowDown className='text-white'/>
                    </button>
                    <button 
                        className="bg-blue-500 hover:bg-blue-700
                         hover:scale-105 transition ease-in-out duration-300
                         text-white font-bold py-2 px-4 rounded"
                        onClick={handleRandomGeneration}
                    >
                        Play On!
                    </button>
                 
                    <button 
                        onClick={handleBalancePlus}
                        className="flex flex-row bg-blue-500 hover:bg-blue-700 mx-12
                        hover:scale-105 transition ease-in-out duration-300
                         text-white font-bold py-2 px-4 rounded"
                    >
                        Stakes  <FaArrowUp className='text-white'/>
                    </button>
    </div>
  )
}

export default ButtonFunc
