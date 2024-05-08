import { useState } from 'react';
import { Features, Reviews, BookingForm } from 'components';

import {
  Navigaton,
  DetailedInfoContainer,
  StyledButton,
  Line,
  ButtonContainer,
  RedLine,
  ButtonWrapper,
} from './DetailedInfo.styled';
export const DetailedInfo = () => {
  const [activeTab, setActiveTab] = useState('');
  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <Navigaton>
      <ButtonContainer>
        <ButtonWrapper>
          <StyledButton
            type="button"
            onClick={() => handleTabChange('features')}
            data-active={activeTab === 'features'}
          >
            Features
          </StyledButton>
          {activeTab === 'features' && <RedLine />}
        </ButtonWrapper>
        <ButtonWrapper>
          <StyledButton
            type="button"
            onClick={() => handleTabChange('reviews')}
            data-active={activeTab === 'reviews'}
          >
            Reviews
          </StyledButton>
          {activeTab === 'reviews' && <RedLine />}
        </ButtonWrapper>
      </ButtonContainer>
      <Line />
      <DetailedInfoContainer>
        {activeTab === 'features' && <Features />}
        {activeTab === 'reviews' && <Reviews />}
        <BookingForm />
      </DetailedInfoContainer>
    </Navigaton>
  );
};
