import { useDispatch, useSelector } from 'react-redux';
import { apiGetAutos } from '../../redux/autoSlice/autoSlice';
import { selectAutos } from '../../redux/autoSlice/autoSlice.selectors';
import { useEffect } from 'react';
const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetAutos());
  }, [dispatch]);

  const autos = useSelector(selectAutos);
  console.log(autos);

  return <div>CATALOG PAGE</div>;
};

export default Catalog;
