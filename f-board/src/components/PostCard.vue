<template>
  <div>
    <b-card
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 16rem; box-shadow: 0 0.25rem 0.25rem rgb(0 0 0 / 10%);"
      class="m-3 "
    >
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1">List group item heading</h6>
      </div>
      <div class="d-flex w-100 justify-content-between">
        <small>22-01-20</small>
         <small>jiwon3261</small>
      </div>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      data: "data",
    };
  },
});
</script>

<style scoped>
</style>
