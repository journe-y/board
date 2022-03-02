<template>
  <article class="sidebar-contaier">
    <b-list-group class="test">
      <b-list-group-item
        button
        v-for="item in list"
        :key="item"
        v-on:click="listClick(item)"
        v-bind:class="{ active: item === selected }"
        >{{ item }}</b-list-group-item
      >
    </b-list-group>
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      selected: "ALL",
      list: [
        "ALL",
        "HTTP",
        "SpringBoot",
        "Node.js",
        "Vue.js",
        "React.js",
        "ect",
      ],
    };
  },
  methods: {
    listClick(tapName:string) {
      this.selected = tapName;
      this.$emit('@selected', tapName);
    },
  },
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
