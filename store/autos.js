
import {getVersions} from '../endpoints';

export const state = () => ({
  autosSuzuki: {},
  autosMazda: {},
  autosGreatwall: {},
  autosChangan: {}
});
export const mutations = {
  SET_AUTOS_SUZUKI(state, autosData) {
    state.autosSuzuki = autosData
  },
  SET_AUTOS_MAZDA(state, autosData) {
    state.autosMazda = autosData
  },
  SET_AUTOS_GW(state, autosData) {
    state.autosGreatwall = autosData
  },
  SET_AUTOS_CHANGAN(state, autosData) {
    state.autosChangan = autosData
  },
};
export const actions = {
  async getAllCars({ commit }) {
    const autosSuzuki = await getVersions('Suzuki')
    const autosMazda = await getVersions('Mazda')
    //const autosGreatwall = await getVersions('Changan')
    const autosChangan = await getVersions('Changan')
    commit('SET_AUTOS_SUZUKI', autosSuzuki)
    commit('SET_AUTOS_MAZDA', autosMazda)
    commit('SET_AUTOS_GW', autosChangan)
    commit('SET_AUTOS_CHANGAN', autosChangan)
  },
};
const autoRandom = (autos) => {
    const valorRandomSuzuki = Math.floor(Math.random() * (autos.length + 1))
    const autoDestacado = autos[valorRandomSuzuki];
    return autoDestacado;
}
export const getters = {
  getAllBrandCars(state) {
    return state.autosSuzuki.
          concat(state.autosMazda).
          concat(state.autosGreatwall).
          concat(state.autosChangan)
  },
  getAutosDestacados(state) {
      let arrayDestacados = [];
      arrayDestacados.push(autoRandom(state.autosSuzuki))
      arrayDestacados.push(autoRandom(state.autosMazda))
      arrayDestacados.push(autoRandom(state.autosGreatwall))
      arrayDestacados.push(autoRandom(state.autosChangan))
      return arrayDestacados;
  },
  getAutosSuzuki(state) {
    return state.autosSuzuki
  },
  getAutosMazda(state) {
    return state.autosMazda
  },
  getAutosGW(state) {
    return state.autosGreatwall
  },
  getAutosChangan(state) {
    return state.autosChangan
  },
};