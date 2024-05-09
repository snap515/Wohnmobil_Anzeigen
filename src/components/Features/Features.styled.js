import styled from 'styled-components';

export const FeatureContainer = styled.div`
  margin-top: 44px;
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 430px;
  gap: 8px;
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

export const VehicleDetailsContainer = styled.div`
  margin-top: 44px;
`;

export const VehicleDetailsTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  text-align: start;

  margin-bottom: 24px;
`;

export const VehicleDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const GreyLine = styled.div`
  border: 1px solid #1018281a;
  margin-bottom: 24px;
`;

export const VehicleDetailsItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsInfo = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
`;
