<template>
  <select v-on:change="selectItem($event)">
    <option disabled selected>{{$t('main.select')}}</option>
    <option v-for="(name,i) in getNames"
    v-bind:key="i"
    v-bind:value="i">
    >{{name}}</option>
  </select>
</template>

<script>
export default {
  methods: {
    selectItem(event) {
      const id = event.target.value;
      const keys = Object.keys(this.$t('main.names'));
      const name = keys[id];
      this.$store.commit('changeTableItem', name);
    },
  },
  computed: {
    getNames() {
      return Object.values(this.$t('main.names'));
    },
  },
};
</script>

<style lang="scss">
</style>
