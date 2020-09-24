import Vuex from 'vuex'
import {getSliders} from '../endpoints';

const createDercoStore = () => {
  return new Vuex.Store({
    state: () => ({
      sliderSuzuki: {},
      sliderMazda: {},
      sliderGW: {},
      toggleSidebar: false
    }),
    mutations: {
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
    },
    actions: {
      async nuxtServerInit({ commit }) {
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
    },
    getters: {
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
  })
}

export default createDercoStore;