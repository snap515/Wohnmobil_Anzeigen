import styled from 'styled-components';
import { theme } from 'styles/styles';
const Button = styled.button`
  width: 145px;
  height: 56px;
  padding: 16px 32px;
  gap: 10px;
  border-radius: 200px;

  color: ${theme.colors.primaryBlack};
  border: 1px solid #47546733;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.005em;
`;

export const LoadMoreBtn = ({ onLoadMoreClick }) => {
  return (
    <Button type="button" onClick={onLoadMoreClick}>
      Load more
    </Button>
  );
};
