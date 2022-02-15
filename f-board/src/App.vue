<template>
  <div>
    <navbar></navbar>
    <section class="main-container">
      <aside class="side">
        <sidebar></sidebar>
      </aside>
      <article class="main">post</article>
    </section>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Sidebar from "./components/SideBar.vue";

export default {
  components: {
    navbar: NavBar,
    sidebar: Sidebar,
  },
};
</script>


<style>
.main-container {
  display: flex;
  direction: row;
  width: 100vw;
  background-color: rgb(248, 249, 255);
}
.side {
  width: 300px;
}
</style>
