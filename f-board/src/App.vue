<template>
  <div class="body-container">
    <navbar></navbar>
    <section class="main-container">
      <aside class="side">
        <sidebar></sidebar>
      </aside>
      <article class="main"><card /></article>
    </section>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Sidebar from "./components/SideBar.vue";
import PostCard from "./components/PostCard.vue";

export default {
  components: {
    navbar: NavBar,
    sidebar: Sidebar,
    card: PostCard,
  },
};
</script>


<style>
html,
body,
.body-container {
  min-height: 100vh;
}
.main-container {
    padding-top: 70px;
    display: flex;
    background-color: rgb(248, 249, 255);
    /* position: fixed;
    width: 100%;
    height: 100%; */
    height: 100%;
}
.main {
  width: 100%;
  outline: 2px dotted brown;
}
.side {
  width: 300px;
}
</style>
