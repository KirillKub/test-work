<template>
  <div>
    <Select v-on:select-item="selectItem"></Select>
    <BaseMoney></BaseMoney>
    <table>
      <tr>
        <th>Код</th>
        <th>{{base}}</th>
        <th>Валюты</th>
        <th>Получите</th>
      </tr>
      <TableItem v-for="(elem, i) in elements"
      v-bind:key="i"
      v-bind:elem="elem"
      ></TableItem>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import TableItem from './TableItem.vue';
import Select from './Select.vue';
import values from './values';
import BaseMoney from './BaseMoney.vue';

export default {
  components: {
    TableItem, Select, BaseMoney,
  },

  data() {
    return {
      elements: [],
      base: localStorage.getItem('baseMoney') || 'USD',
    };
  },

  methods: {
    selectItem(name) {
      const newList = this.elements.filter((item) => item.id !== name);
      const elem = this.elements.find((item) => item.id === name);
      newList.unshift(elem);
      this.elements = newList;
    },
  },

  mounted() {
    axios.get(`https://api.exchangeratesapi.io/latest?base=${this.base}`)
      .then((res) => {
        console.log(res.data);
        const keys = Object.keys(res.data.rates);
        const arr = [];
        for (let i = 0; i < keys.length; i += 1) {
          const obj = {
            id: keys[i],
            cost: res.data.rates[keys[i]],
            name: values[keys[i]],
          };
          arr.push(obj);
        }
        this.elements = arr;
        this.base = res.data.base;
      });
  },
};
</script>

<style lang="scss">
  table {
    margin: 30px auto;
    border: 1px solid black;
    border-collapse: collapse;
  }
  th {
    border: 1px solid black;
    padding: 5px;
    text-align: left;
  }
</style>
