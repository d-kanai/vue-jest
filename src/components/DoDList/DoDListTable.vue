<template>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="dod in dodList.items" :key="dod">
        <td>{{ dod.id }}</td>
        <td>{{ dod.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "DoDListTable",
  props: {
    dodList: {},
  },
};
</script>
<style></style>
