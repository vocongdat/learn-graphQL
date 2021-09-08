import Vue from 'vue';
import Vuex from 'vuex';
import Provinces from './modules/Provinces';
import Districts from './modules/Districts';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Provinces,
        Districts,
    },
});
