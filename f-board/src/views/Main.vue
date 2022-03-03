<template>
  <section class="main-container">
    <router-link class="add-post" to="/write">글쓰기</router-link>
    <aside class="side">
      <sidebar v-on:@selected="changedCategory"></sidebar>
    </aside>
    <article class="main">
      <card
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :imgpath="post.imgpath"
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
      originPosts: [],
      posts: [],
    };
  },
  beforeCreate() {
    //all data request
    getPostsReq("https://toyboard.herokuapp.com/post/list", ({ data }) => {
      this.originPosts = this.posts = data.posts;
    });
  },
  methods: {
    changedCategory(category) {
      if (category === "ALL") {
        console.log(this.originPosts);
        this.posts = this.originPosts;
        return;
      }
      this.posts = this.originPosts.filter((post) => {
        return post["category"] === category;
      });
    },
  },
};
</script>