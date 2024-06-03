import React, { useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaArrowUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Box, Modal, Typography, Button } from "@mui/material";
const ButtonFunc = ({
  balance,
  points,
  number,
  setNumber,
  luckyNumber,
  setLuckyNumber,
  setBalance,
  setPoints,
  reel3,
  setReel3,
}) => {
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
  };
  const handleBalancePlus = () => {
    if (balance > 0) {
      setBalance(balance - 10);
      setPoints(points + 10);
    } else {
      alert("Out of Balance! Restart Game");
    }
  };

 const handleRandomGeneration = () => {
  const randomNumber = generateUniqueRandomNumber(4);
  const randomLuckyNumber = generateUniqueRandomNumber(5);
  const randomReelNumber = generateUniqueRandomNumber(6);

  if (points === 0) {
    alert("Game Over");
    setNumber(points);
    return;
  } else {
    // Delayed execution of setNumber
    setTimeout(() => {
      setLuckyNumber(randomLuckyNumber);
      console.log("Random Number: " + randomLuckyNumber);
    }, 100);

    // Delayed execution of setLuckyNumber
    setTimeout(() => {
        setNumber(randomNumber);
      console.log("Lucky Number: " + randomNumber);
    }, 300);

    // Delayed execution of setReel3
    setTimeout(() => {
      setPoints(points - 10);
      setReel3(randomReelNumber);
      console.log("Random reel: " + randomReelNumber);
    }, 500);
  }
};


  const generateUniqueRandomNumber = (max) => {
    const usedNumbers = [];
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * max) + 1;
    } while (usedNumbers.includes(randomNumber));
    usedNumbers.push(randomNumber);
    return randomNumber;
  };

  return (
    <div className="flex flex-row -my-12 gap-x-11">
      <p>Coins Remaining: {points}</p>
      <Button
        onVolumeChangeariant="contained"
        color="primary"
        onClick={handleBalanceMinus}
        sx={{
          borderRadius: 20,
          border: "1px solid #8A1E73",
          boxShadow: "0 3px 5px 2px rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: "#8A1E73",
            color: "white"
          },
        }}
      >
        Stakes <FaArrowDown className="text-white" />
      </Button>
      {/* <Button onClick={onClose} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Close
                </Button> */}
      <Button
        onVolumeChangeariant="contained"
        color="primary"
        onClick={handleRandomGeneration}
        sx={{
          borderRadius: 20,
          border: "1px solid #1E568A",
          boxShadow: "0 3px 5px 2px rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: "#1E3A8A",
            color: "white"
          },
        }}
      >
        Play On!
      </Button>

      <Button
        onVolumeChangeariant="contained"
        color="primary"
        onClick={handleBalancePlus}
        sx={{
          borderRadius: 20,
          border: "1px solid #BE3921",
          boxShadow: "0 3px 5px 2px rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: "#BE3921",
            color: "white"
          },
        }}
      >
        Stakes <FaArrowUp className="text-white" />
      </Button>
    </div>
  );
};

export default ButtonFunc;
