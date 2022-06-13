<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: { Header },
});
</script>

<style lang="scss"></style>
