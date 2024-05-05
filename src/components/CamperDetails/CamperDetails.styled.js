import styled from 'styled-components';
import { theme } from 'styles/styles';
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 982px;
  max-height: 720px;
  overflow-y: auto;
`;

export const ScrollableContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const InfoField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const ReviewsText = styled.p`
  margin-left: 4px;
  margin-right: 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const LocationText = styled.p`
  margin-left: 4px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;

  margin-right: 11px;
`;
export const ImgContainer = styled.div`
  display: flex;

  margin-bottom: 24px;
`;
export const StyledImg = styled.img`
  border-radius: 10px;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.colors.primaryGray};
`;
