import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import i18n from '../i18n';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseMoney: localStorage.getItem('baseMoney') || 'USD',
    countries: [],
    tableItems: [] as {id: string; name: string; cost: number}[],
  },
  mutations: {
    setCountries(state, data) {
      state.countries = data;
    },
    setTableData(state, data) {
      state.tableItems = data;
    },
    changeTableItem(state, id) {
      const newList = state.tableItems.filter((item) => item.id !== id);
      const elem = state.tableItems.find((item) => item.id === id) as
      {id: string; name: string; cost: number};
      newList.unshift(elem);
      state.tableItems = newList;
    },
  },
  actions: {
    getData({ commit }, event) {
      let item = event;
      if (event.target) {
        item = event.target.value;
      }
      axios.get(`https://api.exchangeratesapi.io/latest?base=${item}`)
        .then((res) => {
          const arr = [];
          const keys = Object.keys(res.data.rates);
          for (let i = 0; i < keys.length; i += 1) {
            const obj = {
              name: keys[i],
              value: res.data.rates[keys[i]],
            };
            arr.push(obj);
          }
          commit('setCountries', arr);
        });
    },
    getTableItems({ commit, state }) {
      axios.get(`https://api.exchangeratesapi.io/latest?base=${state.baseMoney}`)
        .then((res) => {
          const keys = Object.keys(res.data.rates);
          const arr = [];
          for (let i = 0; i < keys.length; i += 1) {
            const elem = i18n.t('main.names') as any;
            const obj = {
              id: keys[i],
              cost: res.data.rates[keys[i]],
              name: elem[keys[i]],
            };
            arr.push(obj);
          }
          commit('setTableData', arr);
        });
    },

  },
  modules: {
  },
});
