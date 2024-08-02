"use client";

import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import BannerImageComp from '../app/components/BannerImageComp';
import EditBannerTemplateBs from '../app/components/EditBannerTemplateBs';
import { BannerData } from '../app/types/types';

const initialBanners: BannerData[] = [
  {
    title: 'Banner 1',
    description: 'This is the first banner',
    cta: 'Click Here',
    image: '/images/banner1.jpg',
    background: '/images/Background1.jpg',
  },
  {
    title: 'Banner 2',
    description: 'This is the second banner',
    cta: 'Learn More',
    image: '/images/banner2.jpg',
    background: '/images/background2.jpg',
  },
];

const HomePage: React.FC = () => {
  const [banners, setBanners] = useState<BannerData[]>(initialBanners);
  const [currentBanner, setCurrentBanner] = useState<BannerData | null>(null);
  const [open, setOpen] = useState(false);

  const handleEdit = (index: number) => {
    setCurrentBanner({ ...banners[index], index });
    setOpen(true);
  };

  const handleSave = (data: BannerData) => {
    if (currentBanner !== null) {
      const updatedBanners = [...banners];
      updatedBanners[currentBanner.index!] = data;
      setBanners(updatedBanners);
    }
    setOpen(false);
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {banners.map((banner, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BannerImageComp {...banner} onEdit={() => handleEdit(index)} />
          </Grid>
        ))}
      </Grid>
      {currentBanner && (
        <EditBannerTemplateBs
          open={open}
          onClose={() => setOpen(false)}
          bannerData={currentBanner}
          onSave={handleSave}
        />
      )}
    </Container>
  );
};

export default HomePage;
