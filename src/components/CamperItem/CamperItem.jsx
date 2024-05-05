import {
  GoldStar,
  Location,
  Heart,
  User,
  Automatic,
  Petrol,
  Kitchen,
  Bed,
  AC,
} from 'components/Icons';
import {
  Card,
  HeaderContainer,
  Header,
  Price,
  PriceContainer,
  AddToFavBtn,
  InfoField,
  ReviewsText,
  LocationText,
  DescriptionText,
  DetailsList,
  DetailsItem,
  StyledImg,
  ShowMoreBtn,
} from './CamperItem.styled';
import { useState } from 'react';
import { Modal, CamperDetails } from 'components';
import { euroSign } from 'constants/constants';
export const CamperItem = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContentId, setModalContentId] = useState(null);

  const handleShowModal = id => {
    setIsModalOpen(true);
    setModalContentId(id);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContentId(null);
    document.body.style.overflow = '';
  };

  const {
    adults,
    // children,
    // consumption,
    description,
    details,
    engine,
    // form,
    gallery,
    // height,
    // length,
    location,
    name,
    price,
    rating,
    reviews,
    // tank,
    transmission,
    // width,
  } = camper;

  return (
    <Card>
      <StyledImg src={gallery[0]} alt="" width="290px" />
      <div>
        <HeaderContainer>
          <Header>{name}</Header>
          <PriceContainer>
            <Price>
              {euroSign}
              {price.toFixed(2)}
            </Price>
            <AddToFavBtn>
              <Heart />
            </AddToFavBtn>
          </PriceContainer>
        </HeaderContainer>
        <InfoField>
          <GoldStar />
          <ReviewsText>
            {rating}({reviews.length} Reviews)
          </ReviewsText>
          <Location />
          <LocationText>{location}</LocationText>
        </InfoField>
        <InfoField>
          <DescriptionText>{description}</DescriptionText>
        </InfoField>

        <DetailsList>
          <DetailsItem>
            <User />
            {adults} adults
          </DetailsItem>
          <DetailsItem>
            <Automatic />
            {transmission}
          </DetailsItem>
          <DetailsItem>
            <Petrol />
            {engine}
          </DetailsItem>
          <DetailsItem>
            <Kitchen />
            {details.kitchen && 'Kitchen'}
          </DetailsItem>
          <DetailsItem>
            <Bed />
            {details.beds} Beds
          </DetailsItem>
          <DetailsItem>
            <AC />
            {details.airConditioner && 'AC'}
          </DetailsItem>
        </DetailsList>
        <ShowMoreBtn
          type="button"
          onClick={() => {
            handleShowModal(camper._id);
          }}
        >
          Show more
        </ShowMoreBtn>
      </div>
      <Modal isModalOpen={isModalOpen} onClose={handleCloseModal}>
        <CamperDetails contentId={modalContentId} onClose={handleCloseModal} />
      </Modal>
    </Card>
  );
};
