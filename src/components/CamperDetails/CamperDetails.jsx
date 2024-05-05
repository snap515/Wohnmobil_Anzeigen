import { useSelector } from 'react-redux';
import { selectModalData } from '../../redux/autoSlice/autoSlice.selectors';

import { ModalCross, DetailedInfo } from 'components';

import { GoldStar, Location } from 'components/Icons';

import { euroSign } from 'constants/constants';

import {
  ModalContent,
  HeaderContainer,
  Header,
  InfoField,
  ReviewsText,
  LocationContainer,
  LocationText,
  // PriceContainer,
  Price,
  ImgContainer,
  ScrollableContainer,
  StyledImg,
  DescriptionText,
} from './CamperDetails.styled';
export const CamperDetails = ({ contentId, onClose }) => {
  const modalContent = useSelector(state => selectModalData(state, contentId));
  console.log(modalContent);
  return (
    <ModalContent>
      <HeaderContainer>
        <Header>{modalContent.name}</Header>
        <ModalCross onClose={onClose} />
      </HeaderContainer>
      <LocationContainer>
        <GoldStar />
        <ReviewsText>
          {modalContent.rating}({modalContent.reviews.length} Reviews)
        </ReviewsText>
        <Location />
        <LocationText>{modalContent.location}</LocationText>
      </LocationContainer>
      <InfoField>
        <Price>
          {euroSign}
          {modalContent.price.toFixed(2)}
        </Price>
      </InfoField>
      <ScrollableContainer>
        <ImgContainer>
          {modalContent.gallery.map(img => {
            return <StyledImg key={img} src={img} width={290} height={310} />;
          })}
        </ImgContainer>
        <DescriptionText>{modalContent.description}</DescriptionText>
        <DetailedInfo />
      </ScrollableContainer>
    </ModalContent>
  );
};
