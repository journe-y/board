<template>
  <article class="sidebar-contaier">
    <b-list-group class="test">
      <b-list-group-item button v-for="item in list" :key="item">{{
        item
      }}</b-list-group-item>
    </b-list-group>
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  // category 선택시 store 사용하여 렌더링
  data() {
    return {
      list: ["HTTP", "SpringBoot", "Node.js", "Vue.js", "React.js", "ect"],
    };
  },
  methods: {},
});
</script>

<style scoped>
.sidebar-contaier {
  width: 100%;
  background-color: rgb(255, 255, 255);
  height: 100%;
}
.test {
  position: sticky;
  top: 70px;
}
</style>
