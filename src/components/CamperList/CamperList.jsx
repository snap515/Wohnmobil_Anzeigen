import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { apiGetAutos } from '../../redux/autoSlice/autoSlice';
import { selectAutos } from '../../redux/autoSlice/autoSlice.selectors';

import { CamperItem } from 'components';

export const CamperList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetAutos());
  }, [dispatch]);

  const autos = useSelector(selectAutos);
  console.log(autos);
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
