import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <Box
      sx={{
        background: `url(${background}) no-repeat center center/cover`,
        padding: 3,
        borderRadius: 2,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        color: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <IconButton
        sx={{ position: 'absolute', top: 10, right: 10, color: '#fff' }}
        onClick={onEdit}
      >
        <EditIcon />
      </IconButton>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
        {description}
      </Typography>
      <Button variant="contained" color="secondary">
        {cta}
      </Button>
    </Box>
  );
};

export default BannerImageComp;
