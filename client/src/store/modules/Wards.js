import { SET_PROVINCE_CODE } from '../mutation-types.js';

const state = {
    provinceCode: 1,
};

const mutations = {
    [SET_PROVINCE_CODE](state, payload) {
        state.provinceCode = payload;
    },
};

const actions = {
    // Change Province Code
    setProvinceCode({ commit }, payload) {
        commit('SET_PROVINCE_CODE', payload);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
