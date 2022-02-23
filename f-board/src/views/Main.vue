<template>
  <section class="main-container">
    <router-link class="add-post" to="/write">글쓰기</router-link>
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
</template>

<script>
import Sidebar from "../components/SideBar.vue";
import PostCard from "../components/PostCard.vue";

export default {
  components: {
    sidebar: Sidebar,
    card: PostCard,
  },
};
</script>