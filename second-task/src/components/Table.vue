<template>
  <div>
    <Select></Select>
    <BaseMoney></BaseMoney>
    <table>
      <tr>
        <th>{{$t('main.code')}}</th>
        <th>{{base}}</th>
        <th>{{$t('main.сurrencies')}}</th>
        <th>{{$t('main.get')}}</th>
      </tr>
      <TableItem v-for="(elem, i) in getElements"
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
import BaseMoney from './BaseMoney.vue';

export default {
  components: {
    TableItem, Select, BaseMoney,
  },

  data() {
    return {
      base: localStorage.getItem('baseMoney') || 'USD',
    };
  },

  computed: {
    getElements() {
      return this.$store.state.tableItems.map((item) => ({
        id: item.id,
        cost: item.cost,
        name: this.$t('main.names')[item.id],
      }));
    },
  },

  mounted() {
    this.$store.dispatch('getTableItems');
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
