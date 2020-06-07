<template>
  <ul>
    <li v-for="locale in locales" v-bind:key="locale" v-on:click="switchLocale(locale)">
      {{locale}}
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        this.$forceUpdate();
      }
    },
  },

  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
    };
  },
};
</script>

<style lang="scss" scoped>
  ul {
    position: sticky;
    right: 0;
    top: 0;
    width: 10px;
  }
  li {
    text-decoration: underline;
    color: #459CE7;
    cursor: pointer;
  }
</style>
