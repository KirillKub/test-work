<template>
  <div class="select-base">
    <select title="изменить базовую валюту" v-model="baseMoney" v-on:change="selectItem">
        <option v-for="(item,i) in countries"
        v-bind:value="item"
        v-bind:key="i"
        >{{item}}</option>
      </select>
  </div>
</template>

<script>
import values from './values';

export default {
  data() {
    return {
      baseMoney: localStorage.getItem('baseMoney') || 'USD',
      countries: [],
    };
  },

  methods: {
    selectItem(event) {
      const name = event.target.value;
      this.$emit('change-base', name);
      localStorage.setItem('baseMoney', name);
    },
  },

  mounted() {
    this.countries = Object.keys(values);
  },
};
</script>

<style lang="scss">
  .select-base {
    margin: 10px;
  }
  select {
    cursor: pointer;
  }
</style>
