<template>
  <div>
    <div class="value">
      <select v-model="name" v-on:change="selectItem">
        <option v-for="(item,i) in countries"
        v-bind:value="item.name"
        v-bind:key="i"
        >{{item.name}}</option>
      </select>
      <input v-model="price" type="text">
    </div>
    <div class="exchanger">
      <div class="exchanger-item" v-for="(item,i) in countries" v-bind:key="i">
        <span>{{item.name}}</span>
        <input type="text" v-bind:value="item.value | newPrice(price)" disabled>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      countries: [],
      price: 1,
      name: localStorage.getItem('baseMoney') || 'USD',
    };
  },

  methods: {
    selectItem(event) {
      const item = event.target.value;
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
          this.countries = arr;
        });
    },
  },

  filters: {
    newPrice(value, price) {
      return value * price;
    },
  },

  mounted() {
    axios.get(`https://api.exchangeratesapi.io/latest?base=${this.name}`)
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
        this.countries = arr;
      });
  },

};
</script>

<style lang="scss">
  select {
    cursor: pointer;
  }

  .value {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 50px auto;
    height: 60px;
    background: lightblue;
    width: 250px;
    input {
      height: 40px;
      border: 0;
      padding: 5px;
    &:focus {
      border: 0;
      outline: 0;
    }
    &:active {
      border: 0;
      outline: 0;
    }
    }
  }

  .exchanger {
    overflow: hidden;
    margin: 50px auto;
    width: 1200px;
    height: 620px;
    background: #EBF6FB;
    color: blue;
    display: flex;
    flex-wrap: wrap;
  }

  .exchanger-item {
    padding: 10px;
    width: 360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 300px;
      height: 30px;
    }
  }

</style>
