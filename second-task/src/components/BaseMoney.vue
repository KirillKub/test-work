<template>
  <div class="select-base">
    <select v-bind:title="$t('main.changeCurrency')" v-model="baseMoney" v-on:change="selectItem">
        <option v-for="(item,i) in countries"
        v-bind:value="item"
        v-bind:key="i"
        >{{item}}</option>
      </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseMoney: this.$store.state.baseMoney,
      countries: [],
    };
  },

  methods: {
    selectItem(event) {
      const name = event.target.value;
      localStorage.setItem('baseMoney', name);
    },
  },

  mounted() {
    this.countries = Object.keys(this.$t('main.names'));
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
