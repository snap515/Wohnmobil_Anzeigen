import {
  FeatureContainer,
  DetailsList,
  DetailsItem,
  VehicleDetailsContainer,
  VehicleDetailsTitle,
  VehicleDetailsList,
  VehicleDetailsItem,
  GreyLine,
  DetailsInfo,
} from './Features.styled';

export const Features = ({ camper }) => {
  const {
    adults,
    children,
    consumption,
    engine,
    form,
    height,
    length,
    width,
    transmission,
    tank,
    details: {
      CD,
      TV,
      airConditioner,
      bathroom,
      beds,
      freezer,
      gas,
      hob,
      kitchen,
      microwave,
      radio,
      shower,
      toilet,
      water,
    },
  } = camper;
  return (
    <FeatureContainer>
      <DetailsList>
        <DetailsItem>{CD && 'CD'} </DetailsItem>
        <DetailsItem>{TV && 'TV'} </DetailsItem>
        <DetailsItem>
          {airConditioner && airConditioner} Air Conditioner
        </DetailsItem>
        <DetailsItem>{beds && beds} beds</DetailsItem>
        <DetailsItem>{freezer && freezer} freezer</DetailsItem>
        <DetailsItem>{gas && gas} gas</DetailsItem>
        <DetailsItem>{hob && hob} hob</DetailsItem>
        <DetailsItem>{kitchen && kitchen} kitchen</DetailsItem>
        <DetailsItem>{microwave && microwave} microwave</DetailsItem>
        <DetailsItem>{radio && radio} radio</DetailsItem>
        <DetailsItem>{shower && shower} shower</DetailsItem>
        <DetailsItem>{toilet && toilet} toilet</DetailsItem>
        <DetailsItem>{water && water} water tank</DetailsItem>
        <DetailsItem>{adults && adults} adults</DetailsItem>
        <DetailsItem>{children && children} children</DetailsItem>
        <DetailsItem>{engine && engine} </DetailsItem>
        <DetailsItem>{bathroom && bathroom} bathroom</DetailsItem>
        <DetailsItem>{transmission && transmission} </DetailsItem>
      </DetailsList>
      <VehicleDetailsContainer>
        <VehicleDetailsTitle>Vehicle Details</VehicleDetailsTitle>
        <GreyLine />
        <VehicleDetailsList>
          <VehicleDetailsItem>
            <DetailsInfo>Form</DetailsInfo>
            <DetailsInfo>{form}</DetailsInfo>
          </VehicleDetailsItem>
          <VehicleDetailsItem>
            <DetailsInfo>Length</DetailsInfo>
            <DetailsInfo>{length}</DetailsInfo>
          </VehicleDetailsItem>
          <VehicleDetailsItem>
            <DetailsInfo>Width</DetailsInfo>
            <DetailsInfo>{width}</DetailsInfo>
          </VehicleDetailsItem>
          <VehicleDetailsItem>
            <DetailsInfo>Height</DetailsInfo>
            <DetailsInfo>{height}</DetailsInfo>
          </VehicleDetailsItem>
          <VehicleDetailsItem>
            <DetailsInfo>Tank</DetailsInfo>
            <DetailsInfo>{tank}</DetailsInfo>
          </VehicleDetailsItem>
          <VehicleDetailsItem>
            <DetailsInfo>Consumption</DetailsInfo>
            <DetailsInfo>{consumption}</DetailsInfo>
          </VehicleDetailsItem>
        </VehicleDetailsList>
      </VehicleDetailsContainer>
    </FeatureContainer>
  );
};
