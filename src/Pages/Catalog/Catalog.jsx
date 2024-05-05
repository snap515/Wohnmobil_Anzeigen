import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';

import {
  apiGetAutos,
  apiLoadMoreAutos,
  incrementPage,
} from '../../redux/autoSlice/autoSlice';

import {
  selectAutos,
  selectPage,
  selecLimit,
} from '../../redux/autoSlice/autoSlice.selectors';

import { CamperList, LoadMoreBtn } from 'components';

import { CatalogContainer } from './Catalog.styled';

const Catalog = () => {
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const autosAmount = 13;
  const autos = useSelector(selectAutos);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!autos) {
      dispatch(apiGetAutos());
    }
  }, []);
  const page = useSelector(selectPage);
  const limit = useSelector(selecLimit);

  useEffect(() => {
    if (page * limit >= autosAmount) {
      setShowLoadMoreBtn(false);
    }
  }, [limit, page]);

  const onLoadMoreClick = () => {
    dispatch(incrementPage());
    dispatch(apiLoadMoreAutos());
  };

  return (
    <>
      <CatalogContainer>
        <CamperList autos={autos} />
        {showLoadMoreBtn && <LoadMoreBtn onLoadMoreClick={onLoadMoreClick} />}
      </CatalogContainer>
    </>
  );
};

export default Catalog;
