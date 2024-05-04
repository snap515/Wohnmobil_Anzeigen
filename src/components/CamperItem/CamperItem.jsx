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
export const CamperItem = ({ camper }) => {
  const {
    adults,
    children,
    consumption,
    description,
    details,
    engine,
    form,
    gallery,
    height,
    length,
    location,
    name,
    price,
    rating,
    reviews,
    tank,
    transmission,
    width,
  } = camper;
  return (
    <Card>
      <StyledImg src={gallery[0]} alt="" width="290px" />
      <div>
        <HeaderContainer>
          <Header>{name}</Header>
          <PriceContainer>
            <Price>{price}</Price>
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
        <ShowMoreBtn type="button">Show more</ShowMoreBtn>
      </div>
    </Card>
  );
};
