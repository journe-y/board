<template>
  <div class="alerts">
    <b-alert
      v-model="this.$store.state.showAlerts"
      fade
      v-bind:variant="this.$store.state.alertType"
    >
      {{ this.$store.state.alertInfo }}
    </b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.alerts {
  z-index: 9999;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>