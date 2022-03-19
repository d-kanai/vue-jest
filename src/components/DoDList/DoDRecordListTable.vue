<template>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Value</th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="dodRecord in dodRecordList" :key="dodRecord">
        <td>{{ dodRecord.id }}</td>
        <td>{{ dodRecord.date }}</td>
        <td>{{ dodRecord.value }}</td>
        <td>{{ dodRecord.comment }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: "DoDRecordListTable",
  props: {
    dodRecordList: {},
  },
});
</script>
<style></style>
