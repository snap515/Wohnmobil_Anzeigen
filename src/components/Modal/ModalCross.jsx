import { Cross } from 'components/Icons';

import { styled } from 'styled-components';

const CloseModalCrossStyled = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  float: inline-end;
`;

export const ModalCross = ({ onClose }) => {
  return (
    <CloseModalCrossStyled type="button" onClick={() => onClose()}>
      <Cross />
    </CloseModalCrossStyled>
  );
};
