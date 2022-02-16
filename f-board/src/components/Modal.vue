<template>
  <div v-if="show" class="backdrop" v-on:click.stop="offModal">
    <!-- <div class="custom-modal"><slot></slot></div> -->
    <div class="custom-modal"><slot></slot></div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    offModal(e: { target: Element }): void {
      e.target.classList.contains("backdrop") ? this.$emit("@off", e) : null;
    },
  },
});
</script>

<style scoped>
.backdrop {
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.315);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.custom-modal {
  border-radius: 10px;
  width: 400px;
  min-height: 300px;
  background-color: white;
  padding: 10px;
}

@media screen and (max-width: 570px) {
  .custom-modal {
    width: 90%;
  }
}
</style>