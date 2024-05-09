import styled from 'styled-components';

export const ReviewsList = styled.ul`
  width: 430px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 44px;
  gap: 24px;
`;

export const Review = styled.li`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; */
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;

  color: #e44848;
  background-color: #f2f4f7;

  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Name = styled.h4`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
`;

export const RatingStars = styled.div`
  display: flex;
  gap: 4px;
`;

export const ReviewText = styled.p`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  color: #475467;
`;
