import { CamperItem } from 'components';

export const CamperList = ({ autos }) => {
  return (
    <div>
      <ul>
        {autos?.map(auto => (
          <CamperItem key={auto._id} camper={auto} />
        ))}
      </ul>
    </div>
  );
};
