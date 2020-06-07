<template>
    <tr>
      <td>{{elem.id}}</td>
      <td>1</td>
      <td>{{elem.name}}</td>
      <td>{{elem.cost}}</td>
    </tr>
</template>

<script>
export default {
  props: ['elem'],
};
</script>

<style lang="scss">
  table {
    border: 1px solid black;
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    padding: 5px;
    text-align: left;
  }
</style>
