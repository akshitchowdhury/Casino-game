import React from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', 
    maxWidth: '1200px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxHeight: '90%',
    overflowY: 'auto', 
};

const GameRules = ({ title,objective,image, onClose }) => {
    return (
        <Modal open={true} onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    {title} - Game Rules
                </Typography>
                <img className='mx-28' src={image} alt={title} 
                style={{ width: '30%', height: '30%', marginTop: '16px' }} />
                <Typography sx={{ mt: 2 }}>
                    Welcome to the {title} Game! Here are the rules:
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    1. The objective of the game is to match 3 reels in a row.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    2. Players must spin their luck by pressing the "Play On" button.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    3. Once 3 Reels are in a match, you win the game and earn a bonus 100 coins as reward.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    4. Per spin uses 10 stake points which.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    5. Stake points can be changed according to your needs by withdrawing from your Balance coins.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    6. Have fun and enjoy the game...and most of all play responsibly!
                </Typography>
                <Button onClick={onClose} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default GameRules;
