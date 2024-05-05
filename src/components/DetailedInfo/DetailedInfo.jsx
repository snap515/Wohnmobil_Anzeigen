import { useState } from 'react';
import { Features, Reviews, BookingForm } from 'components';

import {
  Navigaton,
  DetailedInfoContainer,
  StyledButton,
} from './DetailedInfo.styled';
export const DetailedInfo = () => {
  const [activeTab, setActiveTab] = useState('features');
  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <Navigaton>
      <div>
        <StyledButton
          type="button"
          onClick={() => handleTabChange('features')}
          // active={activeTab === 'features'}
        >
          Features
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => handleTabChange('reviews')}
          // active={activeTab === 'reviews'}
        >
          Reviews
        </StyledButton>
      </div>
      <DetailedInfoContainer>
        {activeTab === 'features' && <Features />}
        {activeTab === 'reviews' && <Reviews />}
        <BookingForm />
      </DetailedInfoContainer>
    </Navigaton>
  );
};
