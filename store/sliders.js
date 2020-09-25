import Vuex from 'vuex'
import {getSliders} from '../endpoints';

export const state = () => ({
  sliderSuzuki: {},
  sliderMazda: {},
  sliderGW: {},
  toggleSidebar: false
});
export const mutations = {
  SET_SLIDER_SUZUKI(state, sliderData) {
    state.sliderSuzuki = sliderData
  },
  SET_SLIDER_MAZDA(state, sliderData) {
    state.sliderMazda = sliderData
  },
  SET_SLIDER_GW(state, sliderData) {
    state.sliderGW = sliderData
  },
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  }
}
export const  actions = {
  async getAllSliders({ commit }) {
    const slidersSuzuki = await getSliders('Suzuki')
    const slidersMazda = await getSliders('Mazda')
    const slidersGW = await getSliders('Changan')
    commit('SET_SLIDER_SUZUKI', slidersSuzuki.slider)
    commit('SET_SLIDER_MAZDA', slidersMazda.slider)
    commit('SET_SLIDER_GW', slidersGW.slider)
  },
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export const  getters = {
  getSliderSuzuki(state) {
    return state.sliderSuzuki
  },
  getSliderMazda(state) {
    return state.sliderMazda
  },
  getSliderGW(state) {
    return state.sliderGW
  },
  toggleSidebar: (state) => state.toggleSidebar
}