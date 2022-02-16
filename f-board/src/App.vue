<template>
  <div class="body-container">
    <navbar></navbar>
    <section class="main-container">
      <aside class="side">
        <sidebar></sidebar>
      </aside>
      <article class="main">
        <card />
        <card />
        <card />
        <card />
        
      </article>
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
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding-top: 70px;
  display: flex;
  background-color: rgb(248, 249, 255);
}
.main {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;

}
.side {
  width: 300px;
}
</style>
