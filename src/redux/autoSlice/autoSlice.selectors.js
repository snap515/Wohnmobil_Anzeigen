export const selectAutos = state => state.autos.autos;
export const selectPage = state => state.autos.page;
export const selecLimit = state => state.autos.limit;
export const selectModalData = (state, id) =>
  state.autos.autos.find(auto => auto._id === id);
