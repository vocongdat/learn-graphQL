import { SET_DISTRICT_CODE } from '../mutation-types.js';

const state = {
    districtCode: 1,
};

const mutations = {
    [SET_DISTRICT_CODE](state, payload) {
        state.districtCode = payload;
    },
};

const actions = {
    // Change District Code
    setDistrictCode({ commit }, payload) {
        commit('SET_DISTRICT_CODE', payload);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
