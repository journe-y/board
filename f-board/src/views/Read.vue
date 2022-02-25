<template>
  <section class="write-container read-page">
    <b-container>
      <b-row>
        <b-col cols="8">
          <h1>
            <b>{{ data.title }}</b>
          </h1>
        </b-col>
        <b-col cols="2"></b-col>
        <b-col cols="2"> <button>수정</button><button>삭제</button> </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col cols="2">작성자 : {{ data.userid }}</b-col>
        <b-col cols="10">{{ data.date }}</b-col>
      </b-row>
      <br />
      <hr />
      <br />
      <b-row ref="content"> </b-row>
    </b-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { getPostDetail } from "../api/post";
import { PostDetail } from "../api/type";

export default Vue.extend({
  props: {
    id: {
      type: String || Number,
      default: 0,
    },
  },
  data() {
    return {
      test: "ReadPage",
      data: {},
    };
  },
  created() {
    getPostDetail(`/post/read/${this.id}`, (post: PostDetail) => {
      this.data = post;
      const contentEl: any = this.$refs.content;
      contentEl.innerHTML = post.contents;
    });
  },
});
</script>

<style scoped>
.read-page {
  background-color: white;
}
</style>
