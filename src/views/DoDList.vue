<template>
  <div>
    <section class="section">
      <h3 class="subtitle">DoDList</h3>
      <p v-for="dod in dodList.items" :key="dod">{{dod.name}}</p>
    </section>
  </div>
</template>

<script lang='ts'>

import { findDoDList, DoDList } from "@/apis/DoDApi"
import { ref } from "vue";

export default {
  name: "App",
  components: {},
  setup() {
    const dodList = ref({items: []} as DoDList);
    const load = async () => {
      dodList.value = await findDoDList()
    }
    load()
    console.log(dodList.value)
    return {
      dodList
    }
  },
};
</script>

<style>
</style>
