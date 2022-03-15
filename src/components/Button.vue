<template>
  <button class="button is-primary is-small is-responsive" type="submit">
    {{ label }}
  </button>
</template>
<script lang="ts">
export default {
  name: "Button",
  props: {
    label: String,
  },
};
</script>
<style></style>
