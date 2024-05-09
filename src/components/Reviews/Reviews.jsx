import { nanoid } from 'nanoid';
import { GoldStar, Star } from 'components/Icons';

import {
  ReviewsList,
  UserContainer,
  UserIcon,
  UserInfo,
  Name,
  RatingStars,
  Review,
  ReviewText,
} from './Reviews.styled';

export const Reviews = ({ reviews }) => {
  function renderStars(goldStarsQuantity) {
    const greyStarsQuantity = 5 - goldStarsQuantity;
    let icons = [];
    for (let i = 0; i < goldStarsQuantity; i += 1) {
      icons.push(<GoldStar key={nanoid()} />);
    }

    for (let i = 0; i < greyStarsQuantity; i += 1) {
      icons.push(<Star key={nanoid()} />);
    }
    return icons;
  }

  return (
    <ReviewsList>
      {reviews.map(review => {
        return (
          <Review
            key={review.reviewer_name + review.reviewer_rating + review.comment}
          >
            <UserContainer>
              <UserIcon>{review.reviewer_name[0].toUpperCase()}</UserIcon>
              <UserInfo>
                <Name>{review.reviewer_name}</Name>
                <RatingStars>{renderStars(review.reviewer_rating)}</RatingStars>
              </UserInfo>
            </UserContainer>
            <ReviewText>{review.comment}</ReviewText>
          </Review>
        );
      })}
    </ReviewsList>
  );
};
