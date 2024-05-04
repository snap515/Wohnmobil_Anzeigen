import styled from 'styled-components';
import { theme } from 'styles/styles';

export const Card = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  border-radius: 20px;
  border: 1px solid #10182833;
`;

export const StyledImg = styled.img`
  border-radius: 10px;
`;

// export const CamperInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
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

export const AddToFavBtn = styled.button`
  all: unset;
  cursor: pointer;
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

export const DescriptionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  color: ${theme.colors.primaryGray};
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  margin-bottom: 24px;
`;

export const DetailsItem = styled.li`
  display: flex;
  padding: 12px 18px 12px 18px;
  gap: 8px;
  border-radius: 100px;

  background-color: #f2f4f7;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
`;

export const ShowMoreBtn = styled.button`
  padding: 16px 40px;
  border-radius: 200px;
  border: none;

  color: #ffffff;
  background-color: ${theme.colors.primaryRed};
`;
