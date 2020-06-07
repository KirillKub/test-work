<template>
  <div id="app">
    <LocaleSwitcher></LocaleSwitcher>
    <div id="nav">
      <router-link to="/">{{$t('main.firstPage')}}</router-link> |
      <router-link to="/exchanger">{{$t('main.secondPage')}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import LocaleSwitcher from './components/LocaleSwitcher.vue';

export default {
  components: {
    LocaleSwitcher,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
