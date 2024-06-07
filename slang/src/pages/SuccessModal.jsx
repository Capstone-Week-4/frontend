import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const SuccessModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ 
          p: 4, 
          bgcolor: 'white', 
          borderRadius: '12px', 
          boxShadow: 24, 
          maxWidth: '400px', 
          margin: 'auto', 
          mt: '20%', 
          color: 'black', 
          border: '1px solid #ddd',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
      >
        <Typography variant="h6" component="h2" style={{margin: 'auto', textAlign: 'center'}}>
          축하합니다!
        </Typography>
        <Typography sx={{ mt: 2 }} style={{color: 'black', margin: 'auto', textAlign: 'center'}}>
          학습을 완료했습니다.
        </Typography>
        <Button onClick={onClose} sx={{ mt: 2 }} variant="contained" style={{margin: 'auto', textAlign: 'center', backgroundColor:'#00cc00'}}>
          확인
        </Button>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
