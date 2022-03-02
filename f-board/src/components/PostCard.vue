<template>
  <div>
    <b-card
      v-bind:img-src="
        imgpath.length == 0
          ? 'https://cdn.pixabay.com/photo/2017/03/02/08/58/background-texture-2110724__340.jpg'
          : imgpath
      "
      img-alt="Image"
      img-top
      tag="article"
      class="m-3 card"
      v-on:click="getPost"
    >
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1">{{ title }}</h6>
      </div>
      <div class="d-flex w-100 justify-content-between">
        <small>{{ date }}</small>
        <small>{{ writer }}</small>
      </div>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    date: {
      type: String,
      default: "00-00-00",
    },
    imgpath: {
      type: String,
    },
    writer: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      data: "data",
    };
  },
  methods: {
    getPost() {
      this.$router.push({ name: `Read`, params: { id: this.id.toString() } });
    },
  },
});
</script>

<style scoped>
.card {
  width: 16rem;
  max-width: 16rem;
  box-shadow: 0 0.25rem 0.25rem rgb(0 0 0 / 10%);
  cursor: pointer;
  transition: 0.2s;
}
.card > img{
  height: 150px;
}
.card:hover {
  transform: scale(1.05);
}
</style>
