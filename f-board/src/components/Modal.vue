<template>
  <div v-if="show" class="backdrop" v-on:click="offModal">
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
    }
  },
  data() {
    return {
    };
  },
  methods: {
    offModal(): void {
      this.$emit("@off");
    },
  },
});
</script>

<style scoped>
.backdrop {
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
  height: 300px;
  background-color: white;
  padding: 10px;
}

@media screen and (max-width: 570px) {
  .custom-modal {
    width: 90%;
  }
}
</style>