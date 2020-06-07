<template>
  <select v-on:change="selectItem($event)">
    <option disabled selected>Выбирите валюту(Добавить в избранное)</option>
    <option v-for="(name,i) in names"
    v-bind:key="i"
    v-bind:value="i">
    >{{name}}</option>
  </select>
</template>

<script>

import values from './values';

export default {
  data() {
    return {
      names: [],
    };
  },
  methods: {
    selectItem(event) {
      const id = event.target.value;
      const keys = Object.keys(values);
      this.$emit('select-item', keys[id]);
    },
  },

  mounted() {
    this.names = Object.values(values);
  },
};
</script>

<style lang="scss">
</style>
