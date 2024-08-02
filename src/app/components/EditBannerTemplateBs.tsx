import React, { useState } from 'react';
import { Box, Button, TextField, Modal, Fade, Backdrop } from '@mui/material';

interface EditBannerProps {
  open: boolean;
  onClose: () => void;
  bannerData: BannerData;
  onSave: (data: BannerData) => void;
}

interface BannerData {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ open, onClose, bannerData, onSave }) => {
  const [formData, setFormData] = useState(bannerData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={3}
          />
          <TextField
            fullWidth
            label="CTA"
            name="cta"
            value={formData.cta}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Background"
            name="background"
            value={formData.background}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EditBannerTemplateBs;
