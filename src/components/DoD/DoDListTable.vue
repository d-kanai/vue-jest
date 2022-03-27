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
        <td>
          <a @click="selectDoD(dod.id)" href="#">{{dod.name}}</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: "DoDListTable",
  props: {
    dodList: {}
  },
  setup(props, context) {
    return {
      selectDoD: (dodId:number) => {
        context.emit("selectDoD", dodId)
      }

    }

  }
});
</script>
<style></style>
