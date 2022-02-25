<template>
  <section class="main-container">
    <router-link class="add-post" to="/write">글쓰기</router-link>
    <aside class="side">
      <sidebar></sidebar>
    </aside>
    <article class="main">
      <card
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :imgPath="post.imgpath"
        :title="post.title"
        :date="post.date"
        :writer="post.userid"
      />
    </article>
  </section>
</template>

<script>
import Sidebar from "../components/SideBar.vue";
import PostCard from "../components/PostCard.vue";
import { getPostsReq } from "../api/post";

export default {
  components: {
    sidebar: Sidebar,
    card: PostCard,
  },
  data() {
    return {
      posts: [],
    };
  },
  beforeCreate() {
    //all data request
    getPostsReq(
      "/post/list",
      ({ data }) => {
        this.posts = data.posts;
      }
    );
  },
};
</script>