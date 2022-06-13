<template>
  <button class="button is-primary is-small is-responsive" type="submit">
    {{ label }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    label: String,
  },
});
</script>
<style></style>
